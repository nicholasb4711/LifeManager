'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

interface ProfileFormData {
  first_name: string;
  last_name: string;
  phone: string;
  location: string;
  bio: string;
}

export default function EditProfilePage() {
  const router = useRouter();
  const { user, profile, loading, updateProfile } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ProfileFormData>({
    first_name: '',
    last_name: '',
    phone: '',
    location: '',
    bio: '',
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
    if (profile) {
      setFormData({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        phone: profile.phone || '',
        location: profile.location || '',
        bio: profile.bio || '',
      });
    }
  }, [loading, user, profile, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { error } = await updateProfile(formData);
      if (error) throw error;
      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!profile) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 rounded-xl">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Edit Profile
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4 ring-1 ring-slate-900/5">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Account Type
                    </label>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
                    </p>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Cannot be changed
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      First Name
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-600 
                        shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 
                        dark:focus:ring-emerald-500 bg-white dark:bg-slate-800 
                        text-slate-900 dark:text-white transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-600 
                        shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 
                        dark:focus:ring-emerald-500 bg-white dark:bg-slate-800 
                        text-slate-900 dark:text-white transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-600 
                        shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 
                        dark:focus:ring-emerald-500 bg-white dark:bg-slate-800 
                        text-slate-900 dark:text-white transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-600 
                        shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 
                        dark:focus:ring-emerald-500 bg-white dark:bg-slate-800 
                        text-slate-900 dark:text-white transition-colors"
                      disabled={isSubmitting}
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-600 
                      shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 
                      dark:focus:ring-emerald-500 bg-white dark:bg-slate-800 
                      text-slate-900 dark:text-white transition-colors"
                    disabled={isSubmitting}
                    placeholder="Tell us a bit about yourself..."
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push('/profile')}
                  className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 
                    dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 
                    focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
                    dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 