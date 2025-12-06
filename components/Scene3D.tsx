import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, PerspectiveCamera, Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for Three.js elements in JSX to fix missing intrinsic element errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

function PersistentObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a material that looks good in dark mode
  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: "#222",
    roughness: 0.1,
    metalness: 0.9,
    emissive: "#3b82f6",
    emissiveIntensity: 0.1,
    wireframe: true,
  }), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Base rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.05;

    // Scroll based transformations (Keyframes)
    // Get scroll progress (0 to 1 approximate)
    const scrollY = window.scrollY;
    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / (scrollMax || 1), 0), 1);

    // Keyframe 1: Start (Hero) - Center, large
    // Keyframe 2: Middle - Side, smaller
    // Keyframe 3: End - Center, warped

    const t = progress * Math.PI * 2; // Cycle through

    // Smooth transitions based on scroll
    meshRef.current.position.y = THREE.MathUtils.lerp(0, -2, Math.sin(t));
    meshRef.current.position.x = THREE.MathUtils.lerp(0, 3, Math.sin(t * 2));
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(1.2, 0.8, Math.cos(t)));
    
    // Rotation flair on scroll
    meshRef.current.rotation.z = progress * Math.PI;
  });

  return (
    <Float 
      speed={2} 
      rotationIntensity={1} 
      floatIntensity={1}
    >
      <TorusKnot ref={meshRef} args={[3, 1, 200, 30]} material={material} />
    </Float>
  );
}

const Scene3D = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        {/* @ts-ignore */}
        <ambientLight intensity={0.2} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} color="#4c7894" />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <PersistentObject />
      </Canvas>
    </div>
  );
};

export default Scene3D;