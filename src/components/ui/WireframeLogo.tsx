import React from 'react';

export interface WireframeLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizeDimensions = {
  sm: { box: 'w-9 h-9', svg: 'w-5 h-5', text: 'text-lg', badge: 'text-[9px] px-1 py-0.2' },
  md: { box: 'w-11 h-11', svg: 'w-7 h-7', text: 'text-xl', badge: 'text-[10px] px-1.5 py-0.5' },
  lg: { box: 'w-14 h-14', svg: 'w-9 h-9', text: 'text-2xl', badge: 'text-xs px-2 py-0.5' },
};

export const WireframeLogo: React.FC<WireframeLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const config = sizeDimensions[size];

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`.trim()}>
      <div
        className={`relative ${config.box} flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-inner group-hover:border-blue-500/50 transition-all duration-300 wireframe-cube-container`}
      >
        {/* Isometric 3D Wireframe Polyhedron SVG */}
        <div className="wireframe-cube flex items-center justify-center">
          <svg
            className={`${config.svg} text-blue-600 dark:text-blue-400`}
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Outer Hexagonal Prism Facets */}
            <polygon
              points="20 4, 35 12, 35 28, 20 36, 5 28, 5 12"
              className="opacity-90"
            />
            {/* Inner Isometric Vertices */}
            <line x1="20" y1="4" x2="20" y2="36" className="opacity-60 stroke-dasharray-[2_2]" />
            <line x1="5" y1="12" x2="35" y2="28" className="opacity-60" />
            <line x1="5" y1="28" x2="35" y2="12" className="opacity-60" />
            {/* Center Core Vertex */}
            <circle cx="20" cy="20" r="2.5" className="fill-blue-600 dark:fill-blue-400 stroke-none" />
          </svg>
        </div>

        {/* Live Status Pulse Badge */}
        <span
          className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900"
          title="Status: Online & Ready"
        />
      </div>

      {showText && (
        <div>
          <div className="flex items-center gap-1.5">
            <span className={`${config.text} font-bold tracking-tight text-slate-900 dark:text-white`}>
              Z<span className="text-blue-600 dark:text-blue-400">Developer</span>
            </span>
            <span
              className={`${config.badge} font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded border border-blue-200/60 dark:border-blue-800/60`}
            >
              Studio
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none mt-0.5">
            Custom Web &amp; Tech Partner
          </p>
        </div>
      )}
    </div>
  );
};
