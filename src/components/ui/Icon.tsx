import React from 'react';

export type IconSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: IconSize;
  strokeWidth?: number;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  children?: React.ReactNode;
}

const sizeMap: Record<IconSize, { width: number; height: number; className: string }> = {
  xs: { width: 14, height: 14, className: 'w-3.5 h-3.5' },
  sm: { width: 16, height: 16, className: 'w-4 h-4' },
  base: { width: 20, height: 20, className: 'w-5 h-5' },
  lg: { width: 24, height: 24, className: 'w-6 h-6' },
  xl: { width: 32, height: 32, className: 'w-8 h-8' },
};

export const Icon: React.FC<IconProps> = ({
  size = 'base',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  children,
  ...props
}) => {
  const isAriaHidden = ariaHidden !== undefined ? ariaHidden : !ariaLabel;
  const sizeConfig = sizeMap[size];

  // If children is an icon element from iconoir-react, clone and pass size & strokeWidth
  if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      width: sizeConfig.width,
      height: sizeConfig.height,
      strokeWidth,
      className: `${sizeConfig.className} ${className}`.trim(),
      'aria-hidden': isAriaHidden,
      'aria-label': ariaLabel,
      role: ariaLabel ? 'img' : undefined,
      ...props,
    });
  }

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${sizeConfig.className} ${className}`.trim()}
      aria-hidden={isAriaHidden}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      {children}
    </span>
  );
};
