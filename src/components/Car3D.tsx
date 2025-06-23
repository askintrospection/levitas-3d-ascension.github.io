
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Car3D = ({ introComplete }: { introComplete: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && introComplete) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
      {/* Main F1 car body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.5, 0.4, 1.8]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.0}
        />
      </mesh>
      
      {/* Cockpit */}
      <mesh position={[1.0, 0.25, 0]} castShadow>
        <boxGeometry args={[2.0, 0.6, 1.2]} />
        <meshStandardMaterial 
          color="#001122" 
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.7}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Front nose cone */}
      <mesh position={[3.0, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <coneGeometry args={[0.3, 1.2, 8]} />
        <meshStandardMaterial 
          color="#ff6b35" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Front wing */}
      <group position={[2.8, -0.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.08, 2.4]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.3, 0.03, 2.6]} />
          <meshStandardMaterial 
            color="#ffaa00" 
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
      
      {/* Rear wing */}
      <group position={[-2.8, 0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.8, 2.0]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </group>
      
      {/* Wheels */}
      {[
        [-2.2, -0.35, 1.1],
        [-2.2, -0.35, -1.1],
        [2.2, -0.35, 1.1],
        [2.2, -0.35, -1.1],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>
          <mesh>
            <cylinderGeometry args={[0.32, 0.32, 0.26, 24]} />
            <meshStandardMaterial 
              color="#c0c0c0"
              metalness={0.95}
              roughness={0.05}
            />
          </mesh>
        </group>
      ))}
      
      {/* Racing stripes */}
      <mesh position={[0, 0.21, 0]}>
        <boxGeometry args={[5.6, 0.01, 0.2]} />
        <meshStandardMaterial 
          color="#ffaa00" 
          metalness={0.8}
          roughness={0.2}
          emissive="#332200"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Lighting effects */}
      <pointLight position={[0, 0.5, 0]} color="#ff6b35" intensity={0.3} distance={8} />
      <pointLight position={[2, 0, 0]} color="#ffaa00" intensity={0.2} distance={5} />
    </group>
  );
};
