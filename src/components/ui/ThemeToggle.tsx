import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Icon } from './Icon';
import { SunLight, HalfMoon } from 'iconoir-react';

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('Beralih ke mode terang', 'Switch to light mode') : t('Beralih ke mode gelap', 'Switch to dark mode')}
      title={isDark ? t('Beralih ke mode terang', 'Switch to light mode') : t('Beralih ke mode gelap', 'Switch to dark mode')}
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
