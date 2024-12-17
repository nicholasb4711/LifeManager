'use client';

import Link from 'next/link';

export default function VerifyEmailPage() {
  return (
    <div className="text-center">
      <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
        Check your email
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        We sent you a verification link. Please check your email to verify your account.
      </p>
      <div className="mt-8">
        <Link
          href="/auth/login"
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
        >
          Return to login
        </Link>
      </div>
    </div>
  );
} 