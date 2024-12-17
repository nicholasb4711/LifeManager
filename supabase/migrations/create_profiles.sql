-- Enable RLS
alter table auth.users enable row level security;

-- Create profiles table with role
create type user_role as enum ('client', 'trainer', 'developer');

create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  role user_role not null default 'client',
  first_name text,
  last_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create trainer profiles
create table public.trainer_profiles (
  id uuid references public.profiles on delete cascade not null primary key,
  specialties text[] default '{}',
  bio text,
  certification_ids text[] default '{}',
  years_of_experience integer default 0,
  hourly_rate decimal(10,2) default 0.00
);

-- Create client profiles
create table public.client_profiles (
  id uuid references public.profiles on delete cascade not null primary key,
  trainer_id uuid references public.trainer_profiles(id),
  goals text[] default '{}',
  health_conditions text[] default '{}',
  fitness_level text check (fitness_level in ('beginner', 'intermediate', 'advanced')),
  preferred_workout_time text
);

-- Create developer profiles
create table public.developer_profiles (
  id uuid references public.profiles on delete cascade not null primary key,
  github_username text,
  access_level text check (access_level in ('full', 'limited')) default 'limited'
);

-- Set up Row Level Security (RLS) policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role)
  values (new.id, 'client');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user(); 