import React from 'react';

export interface DotBackgroundProps {
  className?: string;
}

export const DotBackground: React.FC<DotBackgroundProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] opacity-60 dark:opacity-40 pointer-events-none -z-10 ${className}`.trim()}
      aria-hidden="true"
    />
  );
};
