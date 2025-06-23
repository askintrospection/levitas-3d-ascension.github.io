

import { useRef, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { STLLoader as ThreeSTLLoader } from 'three-stdlib';
import * as THREE from 'three';

export const STLLoader = ({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load the STL file
  const geometry = useLoader(ThreeSTLLoader, '/car_model.stl');

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    // Phase-based realistic animations
    if (phase === 0) {
      // Entry phase - car sliding in from left with studio reveal
      groupRef.current.position.x = -20 + Math.min(t * 8, 20);
      groupRef.current.rotation.y = Math.max(-0.3, -0.3 + t * 0.15);
    } else if (phase === 1) {
      // Studio reveal phase - subtle movements for close-ups
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.03;
    } else if (phase === 2) {
      // Hero rotation phase
      groupRef.current.position.x = 0;
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.1;
      groupRef.current.rotation.y = t * 0.2;
    } else if (phase >= 3) {
      // Final positioning - centered
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
      groupRef.current.rotation.y = 0;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#ff6b35"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.0}
        />
      </mesh>
      
      {/* Additional lighting for the STL model */}
      <pointLight position={[0, 2, 0]} color="#ff6b35" intensity={0.5} distance={10} />
      <pointLight position={[2, 0, 0]} color="#ffaa00" intensity={0.3} distance={8} />
    </group>
  );
};

