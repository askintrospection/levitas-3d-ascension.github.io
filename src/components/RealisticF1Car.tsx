
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const RealisticF1Car = ({ introComplete }: { introComplete: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && introComplete) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.8, 1.8, 1.8]}>
      {/* Main F1 car body - sleeker design */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.25, 1.4]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>
      
      {/* Tapered nose section */}
      <mesh position={[2.8, 0.1, 0]} castShadow>
        <coneGeometry args={[0.4, 1.8, 6]} />
        <meshStandardMaterial 
          color="#ff4400" 
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>
      
      {/* Cockpit with curved glass */}
      <mesh position={[0.5, 0.45, 0]} castShadow>
        <sphereGeometry args={[0.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color="#003366" 
          metalness={0.98}
          roughness={0.02}
          transparent
          opacity={0.6}
          envMapIntensity={2.0}
        />
      </mesh>
      
      {/* Advanced front wing with multiple elements */}
      <group position={[2.2, -0.1, 0]}>
        {/* Main wing element */}
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.04, 2.8]} />
          <meshStandardMaterial 
            color="#ff4400" 
            metalness={0.85}
            roughness={0.1}
          />
        </mesh>
        
        {/* Secondary wing element */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.5, 0.025, 3.0]} />
          <meshStandardMaterial 
            color="#ffaa00" 
            metalness={0.9}
            roughness={0.05}
          />
        </mesh>
        
        {/* Wing endplates */}
        <mesh position={[0, 0.06, 1.5]}>
          <boxGeometry args={[0.3, 0.2, 0.03]} />
          <meshStandardMaterial color="#000000" metalness={0.95} roughness={0.05} />
        </mesh>
        <mesh position={[0, 0.06, -1.5]}>
          <boxGeometry args={[0.3, 0.2, 0.03]} />
          <meshStandardMaterial color="#000000" metalness={0.95} roughness={0.05} />
        </mesh>
      </group>
      
      {/* Sophisticated rear wing */}
      <group position={[-2.2, 0.8, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.25, 0.6, 1.8]} />
          <meshStandardMaterial 
            color="#ff4400" 
            metalness={0.85}
            roughness={0.1}
          />
        </mesh>
        
        {/* Wing supports */}
        <mesh position={[0, -0.35, 0.7]}>
          <cylinderGeometry args={[0.015, 0.015, 0.7]} />
          <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.35, -0.7]}>
          <cylinderGeometry args={[0.015, 0.015, 0.7]} />
          <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      
      {/* Streamlined side pods */}
      <mesh position={[-0.5, 0.15, 0.9]} castShadow>
        <capsuleGeometry args={[0.3, 2.5]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-0.5, 0.15, -0.9]} castShadow>
        <capsuleGeometry args={[0.3, 2.5]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
      
      {/* Realistic F1 wheels with detailed design */}
      {[
        [-1.8, -0.2, 0.85],
        [-1.8, -0.2, -0.85],
        [1.8, -0.2, 0.85],
        [1.8, -0.2, -0.85],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          {/* Tire with realistic proportions */}
          <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.28, 0.12, 8, 24]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.1}
              roughness={0.95}
            />
          </mesh>
          
          {/* Detailed rim with spokes */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.15, 16]} />
            <meshStandardMaterial 
              color="#e0e0e0"
              metalness={0.98}
              roughness={0.02}
              envMapIntensity={1.5}
            />
          </mesh>
          
          {/* Rim spokes */}
          {Array.from({ length: 5 }).map((_, spokeIndex) => (
            <mesh 
              key={spokeIndex}
              position={[
                Math.cos(spokeIndex * Math.PI * 2 / 5) * 0.15,
                0,
                Math.sin(spokeIndex * Math.PI * 2 / 5) * 0.15
              ]}
              rotation={[Math.PI / 2, 0, spokeIndex * Math.PI * 2 / 5]}
            >
              <boxGeometry args={[0.02, 0.15, 0.2]} />
              <meshStandardMaterial 
                color="#cccccc"
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          ))}
          
          {/* Brake disc */}
          <mesh position={[0, 0, index % 2 === 0 ? 0.12 : -0.12]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.015, 24]} />
            <meshStandardMaterial 
              color="#555555"
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>
          
          {/* Brake caliper */}
          <mesh position={[0, 0.12, index % 2 === 0 ? 0.12 : -0.12]}>
            <boxGeometry args={[0.08, 0.12, 0.06]} />
            <meshStandardMaterial 
              color="#cc0000"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
        </group>
      ))}
      
      {/* Racing number */}
      <mesh position={[0, 0.25, 0]}>
        <planeGeometry args={[0.8, 0.4]} />
        <meshStandardMaterial 
          color="#ffffff" 
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Racing stripes with glow effect */}
      <mesh position={[0, 0.26, 0]}>
        <boxGeometry args={[4.6, 0.005, 0.15]} />
        <meshStandardMaterial 
          color="#ffdd00" 
          metalness={0.9}
          roughness={0.1}
          emissive="#ffaa00"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Enhanced lighting effects */}
      <pointLight position={[0, 0.8, 0]} color="#ff4400" intensity={0.4} distance={12} />
      <pointLight position={[2, 0.2, 0]} color="#ffaa00" intensity={0.3} distance={8} />
      <spotLight
        position={[0, 2, -2]}
        angle={Math.PI / 6}
        penumbra={0.3}
        intensity={0.5}
        color="#ffffff"
        target-position={[0, 0, 0]}
      />
    </group>
  );
};
