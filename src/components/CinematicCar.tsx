
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CinematicCar = ({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const carRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    // Phase-based realistic animations
    if (phase === 0) {
      // Entry phase - car sliding in from left with studio reveal
      groupRef.current.position.x = -15 + Math.min(t * 6, 15);
      groupRef.current.rotation.y = Math.max(-0.2, -0.2 + t * 0.1);
    } else if (phase === 1) {
      // Studio reveal phase - subtle movements
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.02;
    } else if (phase === 2) {
      // Final positioning
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
      groupRef.current.rotation.y = 0;
    }
  });

  return (
    <group ref={groupRef} position={[-15, 0, 0]}>
      {/* Realistic F1 car body */}
      <mesh ref={carRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.4, 1.6]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0.8, 0.25, 0]} castShadow>
        <boxGeometry args={[1.6, 0.5, 1.0]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Front wing */}
      <group position={[2.4, -0.1, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.1, 2.0]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.2, 0.04, 2.2]} />
          <meshStandardMaterial 
            color="#000000" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
      
      {/* Rear wing */}
      <mesh position={[-2.3, 0.4, 0]} castShadow>
        <boxGeometry args={[0.3, 0.8, 1.8]} />
        <meshStandardMaterial 
          color="#ff6b35" 
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Wheels with realistic materials */}
      {[
        [-1.8, -0.3, 0.9],
        [-1.8, -0.3, -0.9],
        [1.8, -0.3, 0.9],
        [1.8, -0.3, -0.9],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>
          {/* Rim */}
          <mesh>
            <torusGeometry args={[0.3, 0.015, 8, 16]} />
            <meshStandardMaterial 
              color="#888888"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}
      
      {/* Side mirrors */}
      <mesh position={[0.5, 0.3, 0.6]} castShadow>
        <boxGeometry args={[0.1, 0.05, 0.15]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0.3, -0.6]} castShadow>
        <boxGeometry args={[0.1, 0.05, 0.15]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};
