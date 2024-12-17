import { DashboardCard } from "@/components/dashboard/DashboardCard";
import Image from "next/image";
import Link from "next/link";
import { IoBarbell, IoNutrition, IoMoon } from "react-icons/io5";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wrapper text-center">
          <h1 className="heading-1 gradient-text mb-6">
            Your Complete Fitness & Wellness Solution
          </h1>
          <p className="body-large mb-8">
            Personalized workout plans, nutrition tracking, and wellness management
            for trainers and clients.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup" className="btn-primary">
              Get Started
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-wrapper">
          <h2 className="heading-2 text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards using the card component class */}
            <div className="card card-hover group">
              <div className="icon-container">
                <IoBarbell className="icon" />
              </div>
              <h3 className="heading-2 text-xl mb-2">
                Workout Planning
              </h3>
              <p className="body-regular">
                Create and manage custom workout plans with our extensive exercise library.
              </p>
            </div>
            {/* <DashboardCard 
              title="Workout Planning" 
              description="Create and manage custom workout plans" 
              href="/workout-plans" 
              icon={IoBarbell} 
            /> */}
            {/* ... other feature cards ... */}

          </div>
        </div>
      </section>
    </div>
  );
}
