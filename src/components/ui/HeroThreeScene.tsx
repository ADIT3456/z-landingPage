import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface HeroThreeSceneProps {
  className?: string;
}

interface LetterItem {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  baseOpacity: number;
}

export const HeroThreeScene: React.FC<HeroThreeSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5.0, 12.0);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Root Group for interactive mouse parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Master Group containing both 3D Z shape and text ring
    // Rotating as ONE single unified group in 100% lockstep
    const masterGroup = new THREE.Group();
    masterGroup.rotation.x = 0.14; // Subtle 3D pitch so top extruded facets are visible
    masterGroup.rotation.z = -0.04;
    rootGroup.add(masterGroup);

    // 2. Starfield Particles (350 subtle stars in deep space)
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 32;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 26 - 4;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    // Circular soft star dot texture
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sCtx = starCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      grad.addColorStop(0.8, 'rgba(255, 255, 255, 0.15)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 32, 32);
    }
    const starTexture = new THREE.CanvasTexture(starCanvas);

    const starMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeo, starMaterial);
    scene.add(starPoints);

    // 3. Central 3D Extruded Block "Z" Wireframe Shape
    const shapeGroup = new THREE.Group();
    masterGroup.add(shapeGroup);

    // Dimension parameters for bold, architectural 3D block "Z"
    const hw = 0.95; // half width (total width = 1.9)
    const hh = 1.15; // half height (total height = 2.3)
    const hd = 0.38; // half depth (total depth = 0.76)
    const barH = 0.44; // height of top & bottom bars
    const diagCut = 0.58; // diagonal horizontal cut

    // 10 2D vertices defining the outer polygonal contour of block letter "Z"
    // Symmetrical point reflection about origin (0, 0)
    const zPoly2D: [number, number][] = [
      [-hw, hh], // V0: top-left outer corner
      [hw, hh], // V1: top-right outer corner
      [hw, hh - barH], // V2: top-right lower corner (start of upper diagonal)
      [-hw + diagCut, -hh + barH], // V3: inner bottom-left junction
      [hw, -hh + barH], // V4: bottom-right upper corner
      [hw, -hh], // V5: bottom-right outer corner
      [-hw, -hh], // V6: bottom-left outer corner
      [-hw, -hh + barH], // V7: bottom-left upper corner (start of lower diagonal)
      [hw - diagCut, hh - barH], // V8: inner top-right junction
      [-hw, hh - barH], // V9: top-left lower corner
    ];

    // Build 20 3D vertices: 10 front (+hd) and 10 back (-hd)
    const allVertices: THREE.Vector3[] = [];
    // Front face: indices 0..9
    for (let i = 0; i < 10; i++) {
      allVertices.push(new THREE.Vector3(zPoly2D[i][0], zPoly2D[i][1], hd));
    }
    // Back face: indices 10..19
    for (let i = 0; i < 10; i++) {
      allVertices.push(new THREE.Vector3(zPoly2D[i][0], zPoly2D[i][1], -hd));
    }

    // Build Primary Wireframe Edges (Thin crisp white lines)
    const primaryPoints: THREE.Vector3[] = [];

    // 1. Front face loop (10 edges)
    for (let i = 0; i < 10; i++) {
      const next = (i + 1) % 10;
      primaryPoints.push(allVertices[i], allVertices[next]);
    }

    // 2. Back face loop (10 edges)
    for (let i = 0; i < 10; i++) {
      const next = 10 + ((i + 1) % 10);
      primaryPoints.push(allVertices[10 + i], allVertices[next]);
    }

    // 3. Longitudinal Z-edges connecting front to back (10 edges)
    for (let i = 0; i < 10; i++) {
      primaryPoints.push(allVertices[i], allVertices[10 + i]);
    }

    const primaryGeo = new THREE.BufferGeometry().setFromPoints(primaryPoints);
    const primaryMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
    });
    const primaryLines = new THREE.LineSegments(primaryGeo, primaryMat);
    shapeGroup.add(primaryLines);

    // 4. Subtle Architectural Interior Bracing Struts (6 lines)
    const diagPoints: THREE.Vector3[] = [
      // Top bar interior cross
      allVertices[0], allVertices[8],
      allVertices[9], allVertices[1],
      // Bottom bar interior cross
      allVertices[6], allVertices[3],
      allVertices[7], allVertices[5],
      // Diagonal central box cross
      allVertices[2], allVertices[7],
      allVertices[8], allVertices[3],
    ];
    const diagGeo = new THREE.BufferGeometry().setFromPoints(diagPoints);
    const diagMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const diagLines = new THREE.LineSegments(diagGeo, diagMat);
    shapeGroup.add(diagLines);

    // 5. Vertex Dots at all 20 corners of the 3D block Z
    const vertexPointsGeo = new THREE.BufferGeometry().setFromPoints(allVertices);
    const vertexPointsMat = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    shapeGroup.add(vertexPoints);

    // 6. Glowing Cyan Core Node at origin (0, 0, 0)
    const coreGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0)]);
    const coreMat = new THREE.PointsMaterial({
      size: 0.22,
      color: 0x38bdf8,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
    });
    const corePoint = new THREE.Points(coreGeo, coreMat);
    shapeGroup.add(corePoint);

    // 4. Single 3D Text Ring: HANYA "Z DEVELOPER STUDIO"
    // Texture generator canvas resolusi tinggi (256x256) untuk tipografi tajam & jelas
    const charTextureCache = new Map<string, THREE.CanvasTexture>();

    const getCharTexture = (char: string): THREE.CanvasTexture => {
      if (charTextureCache.has(char)) {
        return charTextureCache.get(char)!;
      }

      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 256, 256);
        ctx.font = '900 156px "Plus Jakarta Sans", "Inter", -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(char, 128, 134);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      charTextureCache.set(char, tex);
      return tex;
    };

    const lettersList: LetterItem[] = [];

    // Teks cincin: HANYA "Z DEVELOPER STUDIO" dengan spasi lebar antar kata,
    // diulang 2x agar melingkar penuh mengelilingi shape
    const ringText = 'Z     DEVELOPER     STUDIO       Z     DEVELOPER     STUDIO       ';
    const radius = 2.75;
    const charWidth = 0.42;
    const charHeight = 0.70;
    const baseOpacity = 0.98;
    const archDrop = 0.65; // Arc dalam: turun ke bawah di kedua sisi

    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    const chars = ringText.split('');
    const total = chars.length;
    const angleStep = (Math.PI * 2) / total;
    const planeGeo = new THREE.PlaneGeometry(charWidth, charHeight);

    // Offset awal agar tulisan "Z DEVELOPER STUDIO" langsung tepat di posisi depan saat dibuka
    const initialCenterOffsetIndex = 14;
    ringGroup.rotation.y = -(initialCenterOffsetIndex / total) * Math.PI * 2;

    chars.forEach((char, i) => {
      if (char === ' ') return; // Spasi fisik antar kata

      // Sudut polar pada lingkaran silinder
      // x = radius * sin(angle), z = radius * cos(angle)
      // Penambahan i membuat x bergerak dari kiri (-x) ke kanan (+x) di sisi depan (z > 0)
      // Sehingga teks terbaca normal dari kiri ke kanan ("Z DEVELOPER STUDIO")
      const angle = i * angleStep;
      const x = radius * Math.sin(angle);
      const z = radius * Math.cos(angle);

      // Arc yang dalam: puncak di tengah, turun ke bawah di kedua sisi (kiri & kanan)
      const y = 0.22 - archDrop * Math.pow(Math.sin(angle), 2);

      const tex = getCharTexture(char);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: baseOpacity,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const letterMesh = new THREE.Mesh(planeGeo, mat);
      letterMesh.position.set(x, y, z);
      // Tangensial outward: normal bidang menghadap keluar
      letterMesh.rotation.y = angle;
      // Banking/roll mengikuti kemiringan lereng arc
      letterMesh.rotation.z = (2 * archDrop / radius) * Math.sin(angle);

      ringGroup.add(letterMesh);
      lettersList.push({ mesh: letterMesh, material: mat, baseOpacity });
    });

    // 5. Interactive Mouse Parallax & Smooth Lerp
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetMouse.x = x;
      targetMouse.y = y;
    };

    const handleMouseLeave = () => {
      targetMouse.x = 0;
      targetMouse.y = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((touch.clientY - rect.top) / rect.height) * 2 - 1;
        targetMouse.x = x;
        targetMouse.y = y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Responsive camera & scale: elemen besar & dominan (±500-600px desktop)
    const updateResponsiveScale = () => {
      if (!container) return;
      const width = window.innerWidth;
      const aspect = container.clientWidth / container.clientHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);

      if (width < 480) {
        masterGroup.scale.set(0.68, 0.68, 0.68);
        camera.position.z = 7.6;
      } else if (width < 768) {
        masterGroup.scale.set(0.85, 0.85, 0.85);
        camera.position.z = 7.2;
      } else if (width < 1024) {
        masterGroup.scale.set(0.96, 0.96, 0.96);
        camera.position.z = 7.0;
      } else {
        masterGroup.scale.set(1.08, 1.08, 1.08);
        camera.position.z = 6.8;
      }
    };

    updateResponsiveScale();

    const resizeObserver = new ResizeObserver(() => {
      updateResponsiveScale();
    });
    resizeObserver.observe(container);

    // 6. Animation Loop
    let animationFrameId: number;
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse lerp
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Parallax tilt on root composition
      rootGroup.rotation.y = mouse.x * 0.22;
      rootGroup.rotation.x = -mouse.y * 0.15;

      // Shape "Z" & Teks berputar bersama sebagai satu grup dalam 100% lockstep
      masterGroup.rotation.y -= 0.0026;

      // Drift bintang halus di latar belakang
      starPoints.rotation.y += 0.00015;
      starPoints.rotation.x += 0.00008;

      // Dynamic Depth Fade:
      // Huruf di depan (z > 0) besar, tajam, dan putih terang (opacity 0.98).
      // Huruf di belakang (z < 0) lebih kecil dan redup (opacity ~0.18) berbaur dengan background fog.
      for (let i = 0; i < lettersList.length; i++) {
        const item = lettersList[i];
        item.mesh.getWorldPosition(tempVec);
        const zDepth = tempVec.z;
        const depthFactor = Math.max(0.0, Math.min(1.0, (zDepth + 2.5) / 5.2));
        item.material.opacity = item.baseOpacity * (0.18 + 0.82 * depthFactor);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup & Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);

      planeGeo.dispose();

      // Dispose all geometries, materials, and textures
      scene.traverse((obj) => {
        if (
          obj instanceof THREE.Mesh ||
          obj instanceof THREE.LineSegments ||
          obj instanceof THREE.Points
        ) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => {
                if ('map' in m && m.map) m.map.dispose();
                m.dispose();
              });
            } else {
              if ('map' in obj.material && obj.material.map) {
                (obj.material.map as THREE.Texture).dispose();
              }
              obj.material.dispose();
            }
          }
        }
      });

      charTextureCache.forEach((tex) => tex.dispose());
      charTextureCache.clear();
      starTexture.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none cursor-grab active:cursor-grabbing overflow-hidden ${className}`.trim()}
      aria-label="3D Extruded Z Wireframe and Synchronized Revolving Text Ring"
    />
  );
};
