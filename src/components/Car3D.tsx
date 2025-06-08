
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import * as THREE from 'three';

export const Car3D = ({ introComplete }: { introComplete: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const carRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current && introComplete) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  // Create a simple F1 car using basic geometries
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Car body */}
      <mesh ref={carRef} position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.5, 1.5]} />
        <meshStandardMaterial 
          color="#0066ff" 
          metalness={0.8}
          roughness={0.2}
          emissive="#001166"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[0.5, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.6, 1]} />
        <meshStandardMaterial 
          color="#003399" 
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Front wing */}
      <mesh position={[2.2, -0.1, 0]}>
        <boxGeometry args={[0.2, 0.1, 2]} />
        <meshStandardMaterial 
          color="#0088ff" 
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Rear wing */}
      <mesh position={[-2, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.8, 1.8]} />
        <meshStandardMaterial 
          color="#0088ff" 
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Wheels */}
      {[
        [-1.5, -0.3, 0.8],
        [-1.5, -0.3, -0.8],
        [1.5, -0.3, 0.8],
        [1.5, -0.3, -0.8],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial 
            color="#111111" 
            metalness={0.5}
            roughness={0.8}
          />
        </mesh>
      ))}
      
      {/* Glowing effects */}
      <pointLight position={[0, 0, 0]} color="#0066ff" intensity={0.5} distance={10} />
      <pointLight position={[2, 0, 0]} color="#00aaff" intensity={0.3} distance={5} />
    </group>
  );
};
