import Link from 'next/link';
import { IconType } from 'react-icons';

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

export function DashboardCard({ title, description, href, icon }: DashboardCardProps) {
  return (
    <Link href={href}>
      <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm 
        ring-1 ring-slate-900/5 hover:shadow-md hover:ring-emerald-500/50 transition-all 
        duration-200 ease-in-out">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl 
          bg-emerald-50 dark:bg-emerald-900/30 group-hover:bg-emerald-100 
          dark:group-hover:bg-emerald-900/50 transition-colors">
          <div className="h-6 w-6 text-emerald-600 dark:text-emerald-400">
            {icon}
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </Link>
  );
} 