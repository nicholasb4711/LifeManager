interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function DashboardCard({ title, description, href, icon }: DashboardCardProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center">
        <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
} 