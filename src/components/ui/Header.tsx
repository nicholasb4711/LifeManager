'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { supabase } from '@/lib/supabase/client';

export function Header() {
  const router = useRouter();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 
                bg-clip-text text-transparent">
                LifeManager
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {user ? (
              <>
                <Link href="/dashboard" 
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 
                    dark:hover:text-emerald-400 transition-colors">
                  Dashboard
                </Link>
                <Link href="/profile" 
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 
                    dark:hover:text-emerald-400 transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 
                    dark:hover:text-emerald-400 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/features" 
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 
                    dark:hover:text-emerald-400 transition-colors">
                  Features
                </Link>
                <Link href="/auth/login" 
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 
                    dark:hover:text-emerald-400 transition-colors">
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 
                    transition-colors shadow-sm"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 
                dark:hover:text-slate-300 focus:outline-none focus:ring-2 
                focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 
                rounded-lg p-2"
            >
              {isMenuOpen ? (
                <IoCloseOutline className="h-6 w-6" />
              ) : (
                <IoMenuOutline className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden py-2 space-y-1">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/features"
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/auth/login"
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block py-2 text-blue-600 hover:text-blue-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
} 