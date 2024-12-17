export type UserRole = 'client' | 'trainer' | 'developer';

export interface Profile {
  id: string;
  user_id: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
}

export interface TrainerProfile extends Profile {
  specialties: string[];
  bio: string | null;
  certification_ids: string[];
  years_of_experience: number;
  hourly_rate: number;
}

export interface ClientProfile extends Profile {
  trainer_id: string | null;
  goals: string[];
  health_conditions: string[];
  fitness_level: 'beginner' | 'intermediate' | 'advanced';
  preferred_workout_time: string | null;
}

export interface DeveloperProfile extends Profile {
  github_username: string | null;
  access_level: 'full' | 'limited';
} 