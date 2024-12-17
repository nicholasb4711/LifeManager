'use client';

import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 
        dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IoSunnyOutline className="h-5 w-5" />
      ) : (
        <IoMoonOutline className="h-5 w-5" />
      )}
    </button>
  );
} 