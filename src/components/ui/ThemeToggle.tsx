import React from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from '../../context/ThemeContext';
import { Icon } from './Icon';
import { SunLight, HalfMoon } from 'iconoir-react';

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      toggleTheme();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    const transition = document.startViewTransition(() => {
      flushSync(toggleTheme);
    });

    void transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' },
      );
    }).catch(() => {
      // A newer transition can cancel this one before it is ready.
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
      title={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 active:scale-95 ${
        isDark
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-amber-300 hover:text-amber-200 border-slate-700 shadow-sm'
          : 'bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 hover:text-slate-900 border-slate-200/90 shadow-sm'
      } ${className}`.trim()}
    >
      <Icon
        size="base"
        strokeWidth={1.5}
        aria-hidden="true"
        className="transition-transform duration-300 transform group-hover:rotate-12"
      >
        {isDark ? <SunLight /> : <HalfMoon />}
      </Icon>
    </button>
  );
};
