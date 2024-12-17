import { IoFitnessOutline } from 'react-icons/io5';
import { FaChartLine } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa';
import { DashboardCard } from './DashboardCard';


export function ClientDashboard() {
  return (
    <>
      <DashboardCard
        title="Today's Workout"
        description="View your scheduled workout for today"
        href="/dashboard/workouts"
        icon={<IoFitnessOutline />}
      />
      <DashboardCard
        title="Progress Tracker"
        description="Track your fitness journey"
        href="/dashboard/progress"
        icon={<FaChartLine />}
      />
      <DashboardCard
        title="Nutrition Plan"
        description="View your meal plan and track calories"
        href="/dashboard/nutrition"
        icon={<FaAppleAlt />}
      />
    </>
  );
} 