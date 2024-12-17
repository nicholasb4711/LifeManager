'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { supabase } from '@/lib/supabase/client';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const router = useRouter();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-900/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 
                dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                LifeManager
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {user ? (
              <>
                <Link href="/dashboard" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors">
                  Dashboard
                </Link>
                <Link href="/profile" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors">
                  Profile
                </Link>
                <ThemeToggle />
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/features" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors">
                  Features
                </Link>
                <Link href="/pricing" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors">
                  Pricing
                </Link>
                <ThemeToggle />
                <Link href="/auth/login" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 
                    dark:hover:text-indigo-400 transition-colors">
                  Sign In
                </Link>
                <Link href="/auth/signup" 
                  className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg 
                    hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 sm:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 
                dark:hover:text-gray-300 focus:outline-none focus:ring-2 
                focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
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