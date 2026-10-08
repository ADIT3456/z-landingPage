import React from 'react';

export interface PillBadgeProps {
  category?: string;
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const PillBadge: React.FC<PillBadgeProps> = ({
  category,
  dot = true,
  dotColor = 'bg-blue-600',
  icon,
  children,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-400/60 transition-colors ${className}`.trim()}
    >
      {dot && (
        <span className="flex h-2 w-2 relative shrink-0">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
        </span>
      )}

      {icon && <span className="shrink-0 text-blue-600 dark:text-blue-400">{icon}</span>}

      {category && (
        <>
          <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider text-[11px]">
            {category}
          </span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
        </>
      )}

      <span>{children}</span>
    </div>
  );
};
