import React, { useEffect, useRef } from 'react';

export interface WireframePrismProps {
  className?: string;
  size?: number;
  theme?: 'dark' | 'light';
}

export const WireframePrism: React.FC<WireframePrismProps> = ({
  className = '',
  size,
  theme = 'dark',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let currentSize = size || canvas.clientWidth || 220;

    const updateDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && !size) {
        currentSize = rect.width;
      } else if (size) {
        currentSize = size;
      }
      canvas.width = Math.round(currentSize * dpr);
      canvas.height = Math.round(currentSize * dpr);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(canvas);

    // Geometry definition: 3D Wireframe Hexagonal Prism with Apex Pyramids (Kffein.com reference)
    // Vertices: [x, y, z]
    const R = 1.05;
    const H = 0.75;
    const apexH = 1.65;

    const baseVertices: [number, number, number][] = [
      // Top Apex (0)
      [0, -apexH, 0],
      // Bottom Apex (1)
      [0, apexH, 0],
      // Center Core (2)
      [0, 0, 0],
    ];

    // Top Hexagonal Ring (indices 3 to 8)
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      baseVertices.push([R * Math.cos(angle), -H, R * Math.sin(angle)]);
    }

    // Bottom Hexagonal Ring (indices 9 to 14)
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      baseVertices.push([R * Math.cos(angle), H, R * Math.sin(angle)]);
    }

    // Edges: [vertexA, vertexB, isDiagonal]
    const edges: [number, number, boolean][] = [];

    // Connect Top Apex (0) to Top Ring (3..8)
    for (let i = 0; i < 6; i++) {
      edges.push([0, 3 + i, false]);
    }

    // Connect Bottom Apex (1) to Bottom Ring (9..14)
    for (let i = 0; i < 6; i++) {
      edges.push([1, 9 + i, false]);
    }

    // Connect Top Ring vertices (3..8) to form top hexagon
    for (let i = 0; i < 6; i++) {
      const next = 3 + ((i + 1) % 6);
      edges.push([3 + i, next, false]);
    }

    // Connect Bottom Ring vertices (9..14) to form bottom hexagon
    for (let i = 0; i < 6; i++) {
      const next = 9 + ((i + 1) % 6);
      edges.push([9 + i, next, false]);
    }

    // Connect Vertical struts between Top and Bottom rings
    for (let i = 0; i < 6; i++) {
      edges.push([3 + i, 9 + i, false]);
    }

    // Cross/Diagonal geodesic braces for triangulated wireframe
    for (let i = 0; i < 6; i++) {
      const nextBottom = 9 + ((i + 1) % 6);
      edges.push([3 + i, nextBottom, true]);
    }

    // Internal spokes to Center Core (2)
    for (let i = 0; i < 6; i += 2) {
      edges.push([2, 3 + i, true]);
      edges.push([2, 9 + i, true]);
    }

    // Animation state
    let angleY = 0;
    let angleX = 0.38;
    let animationFrameId: number;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const currentAngleX = angleX + mouseRef.current.y * 0.3;
      const currentAngleY = angleY + mouseRef.current.x * 0.4;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      const focalLength = 3.6;
      const scaleRadius = (currentSize * 0.23) * dpr;
      const centerX = canvas.width / 2;
      const centerY = (canvas.height / 2) + (currentSize * 0.04 * dpr);

      // Transform & Project Vertices
      const projected: { x: number; y: number; z: number; scale: number }[] = [];

      for (let i = 0; i < baseVertices.length; i++) {
        const [x0, y0, z0] = baseVertices[i];

        // Rotate around Y-axis
        const x1 = x0 * cosY + z0 * sinY;
        const y1 = y0;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate around X-axis
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Perspective camera projection
        const depth = focalLength + z2;
        const pScale = focalLength / Math.max(0.2, depth);
        const px = centerX + x2 * pScale * scaleRadius;
        const py = centerY + y2 * pScale * scaleRadius;

        projected.push({ x: px, y: py, z: z2, scale: pScale });
      }

      // Draw Edges (Crisp Architectural Wireframe Lines)
      for (const [idxA, idxB, isDiagonal] of edges) {
        const pA = projected[idxA];
        const pB = projected[idxB];

        // Depth-based opacity for true 3D spatial hierarchy
        const avgZ = (pA.z + pB.z) / 2;
        // z ranges approximately from -1.8 to 1.8
        const depthFactor = Math.max(0.15, Math.min(1, (1.8 - avgZ) / 3.2));

        let alpha: number;
        if (isDiagonal) {
          alpha = 0.22 * depthFactor;
        } else {
          alpha = 0.35 + 0.55 * depthFactor;
        }

        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);

        // Thin crisp stroke (theme-aware)
        if (theme === 'dark') {
          // Dark ink lines for light background
          if (isDiagonal) {
            ctx.strokeStyle = `rgba(71, 85, 105, ${(alpha * 0.85).toFixed(3)})`;
            ctx.lineWidth = 1.0 * dpr;
          } else {
            ctx.strokeStyle = `rgba(15, 23, 42, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1.35 * dpr;
          }
        } else {
          // Crisp white lines for dark background
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          ctx.lineWidth = isDiagonal ? 0.95 * dpr : 1.25 * dpr;
        }
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Draw Vertices (Subtle Glowing Nodes)
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depthFactor = Math.max(0.2, Math.min(1, (1.8 - p.z) / 3.2));

        if (i === 2) {
          // Center core: glowing electric blue vertex
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5 * dpr, 0, Math.PI * 2);
          ctx.fillStyle = theme === 'dark' ? '#2563eb' : '#38bdf8';
          ctx.fill();
        } else {
          // Outer vertices: crisp nodes
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.0 * dpr, 0, Math.PI * 2);
          if (theme === 'dark') {
            ctx.fillStyle = `rgba(15, 23, 42, ${(0.45 + 0.55 * depthFactor).toFixed(3)})`;
          } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${(0.4 + 0.6 * depthFactor).toFixed(3)})`;
          }
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        angleY += 0.007; // Gentle continuous rotation
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [size, theme]);

  return (
    <div
      className={`relative flex items-center justify-center select-none w-full h-full ${className}`.trim()}
      role="img"
      aria-label="3D Wireframe Prism Geometric Centerpiece Z Developer"
    >
      <canvas
        ref={canvasRef}
        style={size ? { width: size, height: size } : { width: '100%', height: '100%' }}
        className="block cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
