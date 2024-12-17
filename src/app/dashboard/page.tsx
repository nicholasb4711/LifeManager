'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { ClientDashboard } from '@/components/dashboard/ClientDashboard';
// import { TrainerDashboard } from '@/components/dashboard/TrainerDashboard';
// import { DeveloperDashboard } from '@/components/dashboard/DeveloperDashboard';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, loading, isClient, isTrainer, isDeveloper } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {profile?.first_name || 'User'}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Here's an overview of your {isClient() ? 'fitness' : isTrainer() ? 'clients' : 'platform'} activity
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {isClient() && <ClientDashboard />}
          {/* {isTrainer() && <TrainerDashboard />} */}
          {/* {isDeveloper() && <DeveloperDashboard />} */}
        </div>
      </div>
    </div>
  );
} 