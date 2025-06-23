
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';

export const STLCar = ({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the STL model
  const geometry = useLoader(STLLoader, '/car_model.stl');

  useEffect(() => {
    if (meshRef.current && geometry) {
      // Center the geometry
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox?.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);
      
      // Scale the model appropriately
      const scale = 2; // Adjust as needed
      geometry.scale(scale, scale, scale);
    }
  }, [geometry]);

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
      // Final positioning
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
      groupRef.current.rotation.y = 0;
    }
  });

  return (
    <group ref={groupRef} position={[-20, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#ff6b35"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.0}
        />
      </mesh>
      
      {/* Lighting effects */}
      <pointLight position={[0, 0.5, 0]} color="#ff6b35" intensity={0.3} distance={8} />
      <pointLight position={[2, 0, 0]} color="#ffaa00" intensity={0.2} distance={5} />
    </group>
  );
};
