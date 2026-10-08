import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'gradient-frame';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  className = '',
  children,
  ...props
}) => {
  if (variant === 'gradient-frame') {
    return (
      <div
        className={`relative p-1.5 sm:p-2.5 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-2xl shadow-blue-500/20 ${className}`.trim()}
        {...props}
      >
        <div className="rounded-[22px] bg-white dark:bg-slate-900 overflow-hidden p-6 sm:p-8 lg:p-10">
          {children}
        </div>
      </div>
    );
  }

  const baseClasses =
    'rounded-2xl border transition-all duration-300 overflow-hidden';
  const variantStyles = {
    default:
      'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-sm',
    subtle:
      'bg-slate-50/70 dark:bg-slate-800/50 border-slate-200/90 dark:border-slate-800 shadow-sm',
  };
  const hoverStyles = hoverEffect
    ? 'hover:border-blue-400/80 dark:hover:border-blue-500/60 hover:shadow-xl'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantStyles[variant]} ${hoverStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
