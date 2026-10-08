import React from 'react';
import { HeroThreeScene } from './HeroThreeScene';

export interface HeroCenterpieceProps {
  className?: string;
  size?: number;
}

/**
 * HeroCenterpiece
 * 3D interactive Three.js showcase featuring:
 * - 3D Extruded Block "Z" Wireframe Shape with vertex nodes and glowing cyan core
 * - Single bold 3D text ring: "Z DEVELOPER STUDIO" revolving together with the shape as one unified group
 * - Deep downward arc on both sides following the shape's contour
 * - Pitch-black starfield atmosphere with drifting star particles
 * - Dominant 500-600px presence and smooth mouse parallax tilt
 */
export const HeroCenterpiece: React.FC<HeroCenterpieceProps> = ({
  className = '',
  size,
}) => {
  return (
    <div
      style={size ? { maxWidth: size, height: size } : undefined}
      className={`relative w-full max-w-[620px] h-[380px] sm:h-[450px] md:h-[520px] lg:h-[560px] flex items-center justify-center select-none mx-auto ${className}`.trim()}
      aria-label="Z Developer Studio 3D Wireframe and Revolving Text Emblem"
    >
      {/* Three.js 3D Canvas */}
      <HeroThreeScene className="w-full h-full" />
    </div>
  );
};
