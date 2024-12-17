import Image from "next/image";
import Link from "next/link";
import { IoBarbell, IoNutrition, IoMoon } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 
            to-emerald-500 bg-clip-text text-transparent">
            Your Complete Fitness & Wellness Solution
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-slate-600 dark:text-slate-300">
            Personalized workout plans, nutrition tracking, and wellness management
            for trainers and clients.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/auth/signup"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 
                transition-colors shadow-sm ring-1 ring-emerald-600"
            >
              Get Started
            </Link>
            <Link 
              href="/about"
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 
                text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 
                transition-colors shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workout Planning */}
            <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm 
              ring-1 ring-slate-900/5 hover:shadow-md hover:ring-emerald-500/50 transition-all">
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl 
                flex items-center justify-center mb-4 group-hover:bg-emerald-100 
                dark:group-hover:bg-emerald-900/50 transition-colors">
                <IoBarbell className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Workout Planning
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Create and manage custom workout plans with our extensive exercise library.
              </p>
            </div>

            {/* Nutrition Tracking */}
            <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm 
              ring-1 ring-slate-900/5 hover:shadow-md hover:ring-emerald-500/50 transition-all">
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl 
                flex items-center justify-center mb-4 group-hover:bg-emerald-100 
                dark:group-hover:bg-emerald-900/50 transition-colors">
                <IoNutrition className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Nutrition Management
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Track meals, count macros, and generate personalized meal plans.
              </p>
            </div>

            {/* Sleep Tracking */}
            <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm 
              ring-1 ring-slate-900/5 hover:shadow-md hover:ring-emerald-500/50 transition-all">
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl 
                flex items-center justify-center mb-4 group-hover:bg-emerald-100 
                dark:group-hover:bg-emerald-900/50 transition-colors">
                <IoMoon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Sleep Tracking
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monitor sleep patterns and get personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-slate-600 dark:text-slate-300">
            Join thousands of users who have already improved their fitness and wellness journey.
          </p>
          <Link 
            href="/auth/signup"
            className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-lg 
              hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-600"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
