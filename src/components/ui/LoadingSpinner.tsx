export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-200 
          dark:border-slate-700"></div>
        <div className="absolute top-0 left-0 animate-spin rounded-full h-12 w-12 border-4 
          border-emerald-600 dark:border-emerald-400 border-t-transparent"></div>
      </div>
    </div>
  );
} 