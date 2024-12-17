'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { IoPersonOutline, IoMailOutline, IoSettingsOutline, IoLocationOutline, IoPhonePortraitOutline, IoInformationCircleOutline } from 'react-icons/io5';

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [loading, user, router]);

  if (loading) return <LoadingSpinner />;
  if (!profile) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                <IoPersonOutline className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {profile.first_name} {profile.last_name}
                </h1>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 rounded-xl">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Profile Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <IoMailOutline className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                <span className="text-slate-600 dark:text-slate-300">{user?.email}</span>
              </div>
              {profile.phone && (
                <div className="flex items-center space-x-3">
                  <IoPhonePortraitOutline className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <span className="text-slate-600 dark:text-slate-300">{profile.phone}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center space-x-3">
                  <IoLocationOutline className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                  <span className="text-slate-600 dark:text-slate-300">{profile.location}</span>
                </div>
              )}
              {profile.bio && (
                <div className="flex space-x-3">
                  <IoInformationCircleOutline className="h-5 w-5 text-slate-400 dark:text-slate-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{profile.bio}</span>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <IoSettingsOutline className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  Member since {new Date(profile.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => router.push('/profile/edit')}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 
              dark:focus:ring-offset-slate-900 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
} 