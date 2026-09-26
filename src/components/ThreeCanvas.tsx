import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  darkMode: boolean;
}

export function ThreeCanvas({ darkMode }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [sceneMode, setSceneMode] = useState<'slides' | 'lattice' | 'prisms'>('slides');
  const animFrameIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(darkMode ? 0x222233 : 0xffffff, darkMode ? 1.5 : 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(darkMode ? 0x38bdf8 : 0x0284c7, 2, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(darkMode ? 0xf59e0b : 0xd97706, 1.8, 20);
    pointLight2.position.set(-5, -4, 3);
    scene.add(pointLight2);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Slide Deck Panels Group
    const slidesGroup = new THREE.Group();
    const slideGeometry = new THREE.BoxGeometry(3.6, 2.025, 0.04); // 16:9 ratio

    const colors = darkMode 
      ? [0x1e293b, 0x0f172a, 0x334155] 
      : [0xf8fafc, 0xf1f5f9, 0xe2e8f0];

    const edgeColors = darkMode 
      ? [0x38bdf8, 0x818cf8, 0xf59e0b] 
      : [0x0284c7, 0x4f46e5, 0xd97706];

    const slides: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.2,
        metalness: 0.6,
        transparent: true,
        opacity: darkMode ? 0.85 : 0.9,
      });

      const slide = new THREE.Mesh(slideGeometry, material);
      slide.position.set((i - 1) * 0.45, (i - 1) * -0.35, (i - 1) * 0.8);
      slide.rotation.x = 0.25;
      slide.rotation.y = -0.35;
      slide.rotation.z = 0.05;

      // Wireframe / Accent edge
      const edges = new THREE.EdgesGeometry(slideGeometry);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: edgeColors[i],
        linewidth: 1.5,
        transparent: true,
        opacity: darkMode ? 0.75 : 0.5,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      slide.add(wireframe);

      slidesGroup.add(slide);
      slides.push(slide);
    }

    // 2. Lattice / Particle Field
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(darkMode ? 0x38bdf8 : 0x0284c7);
    const goldColor = new THREE.Color(darkMode ? 0xf59e0b : 0xd97706);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 16;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = baseColor.clone().lerp(goldColor, Math.random());
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: darkMode ? 0.6 : 0.45,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);

    // 3. Floating Prisms (Think-cell Geometry Symbolism)
    const prismGroup = new THREE.Group();
    const geom1 = new THREE.IcosahedronGeometry(1.2, 0);
    const mat1 = new THREE.MeshStandardMaterial({
      color: darkMode ? 0x0f172a : 0xe2e8f0,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.8 : 0.6,
    });
    const mesh1 = new THREE.Mesh(geom1, mat1);
    mesh1.position.set(2, 1, 0);
    prismGroup.add(mesh1);

    const geom2 = new THREE.OctahedronGeometry(1.4, 0);
    const mat2 = new THREE.MeshStandardMaterial({
      color: darkMode ? 0x38bdf8 : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.7 : 0.5,
    });
    const mesh2 = new THREE.Mesh(geom2, mat2);
    mesh2.position.set(-2, -1, -1);
    prismGroup.add(mesh2);

    // Initial attachment
    mainGroup.add(slidesGroup);
    mainGroup.add(particleSystem);
    if (sceneMode === 'prisms') {
      mainGroup.add(prismGroup);
    }

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = mouseX * 0.4;
      mouseRef.current.targetY = mouseY * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      camera.position.x = mouseRef.current.x * 1.5;
      camera.position.y = mouseRef.current.y * 1.2;
      camera.lookAt(0, 0, 0);

      if (isRotating) {
        slidesGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.2 + mouseRef.current.x * 0.3;
        slidesGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.15 + mouseRef.current.y * 0.2;

        slides.forEach((slide, idx) => {
          slide.position.y = (idx - 1) * -0.35 + Math.sin(elapsedTime * 1.2 + idx * 0.8) * 0.08;
        });

        particleSystem.rotation.y = elapsedTime * 0.03;
        particleSystem.rotation.x = elapsedTime * 0.01;

        mesh1.rotation.x = elapsedTime * 0.3;
        mesh1.rotation.y = elapsedTime * 0.4;
        mesh2.rotation.x = -elapsedTime * 0.25;
        mesh2.rotation.y = elapsedTime * 0.35;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      renderer.dispose();
      slideGeometry.dispose();
      particleGeometry.dispose();
      geom1.dispose();
      geom2.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [darkMode, isRotating, sceneMode]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div ref={containerRef} className="w-full h-full opacity-65 transition-opacity duration-700" />
      
      {/* Interactive Canvas Controls */}
      <div className="absolute bottom-4 right-6 pointer-events-auto flex items-center gap-2 text-xs font-mono bg-neutral-900/80 dark:bg-neutral-900/80 light:bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-700/50 text-neutral-300 dark:text-neutral-300 shadow-lg">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="hidden sm:inline">3D WebGL Presentation Engine</span>
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-2 py-0.5 rounded text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors"
          title={isRotating ? 'Pause 3D rotation' : 'Resume 3D rotation'}
        >
          {isRotating ? 'Pause' : 'Play'}
        </button>
        <span className="text-neutral-500">|</span>
        <button
          onClick={() => {
            const modes: ('slides' | 'lattice' | 'prisms')[] = ['slides', 'lattice', 'prisms'];
            const next = modes[(modes.indexOf(sceneMode) + 1) % modes.length];
            setSceneMode(next);
          }}
          className="px-2 py-0.5 rounded text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors capitalize"
          title="Switch 3D Geometry"
        >
          Mode: {sceneMode}
        </button>
      </div>
    </div>
  );
}
