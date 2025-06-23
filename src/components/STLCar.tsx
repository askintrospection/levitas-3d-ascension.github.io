
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const STLCar = ({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null);

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
      {/* Main F1 car body - more realistic proportions */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.5, 0.4, 1.8]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.0}
        />
      </mesh>
      
      {/* Cockpit with realistic glass effect */}
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
      
      {/* Front wing - more detailed */}
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
        {/* Wing endplates */}
        <mesh position={[0, 0.04, 1.3]}>
          <boxGeometry args={[0.2, 0.15, 0.05]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.04, -1.3]}>
          <boxGeometry args={[0.2, 0.15, 0.05]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      
      {/* Rear wing assembly */}
      <group position={[-2.8, 0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.8, 2.0]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        {/* Wing supports */}
        <mesh position={[0, -0.4, 0.8]}>
          <cylinderGeometry args={[0.02, 0.02, 0.8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.4, -0.8]}>
          <cylinderGeometry args={[0.02, 0.02, 0.8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Side pods */}
      <mesh position={[0, 0.1, 1.0]} castShadow>
        <boxGeometry args={[3.0, 0.6, 0.4]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0.1, -1.0]} castShadow>
        <boxGeometry args={[3.0, 0.6, 0.4]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>
      
      {/* Realistic F1 wheels with detailed rims */}
      {[
        [-2.2, -0.35, 1.1],
        [-2.2, -0.35, -1.1],
        [2.2, -0.35, 1.1],
        [2.2, -0.35, -1.1],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          {/* Tire */}
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 24]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>
          {/* Rim */}
          <mesh>
            <cylinderGeometry args={[0.32, 0.32, 0.26, 24]} />
            <meshStandardMaterial 
              color="#c0c0c0"
              metalness={0.95}
              roughness={0.05}
              envMapIntensity={1.2}
            />
          </mesh>
          {/* Brake disc */}
          <mesh position={[0, 0, index % 2 === 0 ? 0.15 : -0.15]}>
            <cylinderGeometry args={[0.25, 0.25, 0.02, 24]} />
            <meshStandardMaterial 
              color="#666666"
              metalness={0.7}
              roughness={0.4}
            />
          </mesh>
          {/* Brake caliper */}
          <mesh position={[0, 0.15, index % 2 === 0 ? 0.15 : -0.15]}>
            <boxGeometry args={[0.1, 0.15, 0.08]} />
            <meshStandardMaterial 
              color="#ff0000"
              metalness={0.6}
              roughness={0.4}
            />
          </mesh>
        </group>
      ))}
      
      {/* Side mirrors */}
      <mesh position={[0.8, 0.35, 0.7]} castShadow>
        <boxGeometry args={[0.12, 0.06, 0.18]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, 0.35, -0.7]} castShadow>
        <boxGeometry args={[0.12, 0.06, 0.18]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Engine air intake */}
      <mesh position={[-0.5, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.3, 0.8]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
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
