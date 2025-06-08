
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Text } from '@react-three/drei';
import * as THREE from 'three';

export const CinematicCar = ({ phase }: { phase: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const carRef = useRef<THREE.Mesh>(null);
  const engineGlowRef = useRef<THREE.PointLight>(null);
  const exhaustRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    // Phase-based animations
    if (phase === 0) {
      // Entry phase - car sliding in from left
      groupRef.current.position.x = -15 + Math.min(t * 8, 15);
      groupRef.current.rotation.y = Math.max(-0.3, -0.3 + t * 0.15);
    } else if (phase === 1) {
      // Reveal phase - slow rotation and hover
      groupRef.current.position.x = 0;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.05;
    } else if (phase === 2) {
      // Orbiting phase
      const radius = 6;
      const angle = t * 0.5;
      groupRef.current.position.x = Math.cos(angle) * radius;
      groupRef.current.position.z = Math.sin(angle) * radius;
      groupRef.current.lookAt(0, 0, 0);
    }

    // Engine glow pulsing
    if (engineGlowRef.current) {
      engineGlowRef.current.intensity = 0.8 + Math.sin(t * 4) * 0.3;
    }

    // Exhaust particle effect
    if (exhaustRef.current && phase >= 1) {
      exhaustRef.current.children.forEach((particle, index) => {
        const mesh = particle as THREE.Mesh;
        mesh.position.z -= 0.1;
        mesh.scale.setScalar(Math.max(0, mesh.scale.x - 0.01));
        
        if (mesh.position.z < -3) {
          mesh.position.z = 0.5;
          mesh.scale.setScalar(0.1);
        }
      });
    }
  });

  useEffect(() => {
    // Create exhaust particles
    if (exhaustRef.current) {
      for (let i = 0; i < 10; i++) {
        const particle = new THREE.Mesh(
          new THREE.SphereGeometry(0.02, 8, 8),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(0.6, 0.8, 0.5),
            transparent: true,
            opacity: 0.6
          })
        );
        particle.position.set(
          -2 + Math.random() * 0.2,
          0 + Math.random() * 0.1,
          0.5 + i * 0.3
        );
        particle.scale.setScalar(0.1);
        exhaustRef.current.add(particle);
      }
    }
  }, []);

  return (
    <group ref={groupRef} position={[-15, 0, 0]}>
      {/* Main car body with metallic finish */}
      <mesh ref={carRef} position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.6, 1.8]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#0f0f1a"
          emissiveIntensity={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Cockpit with imperial styling */}
      <mesh position={[0.8, 0.35, 0]} castShadow>
        <boxGeometry args={[1.8, 0.7, 1.2]} />
        <meshStandardMaterial 
          color="#0a0a15" 
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.9}
          emissive="#1e40af"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Front wing with TIE fighter inspiration */}
      <group position={[2.3, -0.1, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.3, 0.15, 2.2]} />
          <meshStandardMaterial 
            color="#1e40af" 
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </mesh>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.2, 0.05, 2.4]} />
          <meshStandardMaterial 
            color="#dc2626" 
            metalness={0.7}
            roughness={0.3}
            emissive="#dc2626"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
      
      {/* Rear wing */}
      <mesh position={[-2.2, 0.6, 0]} castShadow>
        <boxGeometry args={[0.4, 1, 2]} />
        <meshStandardMaterial 
          color="#1e40af" 
          metalness={0.8}
          roughness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Wheels with glowing rims */}
      {[
        [-1.6, -0.35, 1],
        [-1.6, -0.35, -1],
        [1.6, -0.35, 1],
        [1.6, -0.35, -1],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
            <meshStandardMaterial 
              color="#0a0a0a" 
              metalness={0.3}
              roughness={0.9}
            />
          </mesh>
          {/* Glowing rim */}
          <mesh>
            <torusGeometry args={[0.35, 0.02, 8, 16]} />
            <meshStandardMaterial 
              color="#1e40af"
              emissive="#1e40af"
              emissiveIntensity={0.5}
              metalness={1}
              roughness={0}
            />
          </mesh>
        </group>
      ))}
      
      {/* Engine glow */}
      <pointLight 
        ref={engineGlowRef}
        position={[-2.5, 0, 0]} 
        color="#1e40af" 
        intensity={0.8} 
        distance={8}
        decay={2}
      />
      
      {/* Side accent lights */}
      <pointLight position={[0, 0, 1.2]} color="#dc2626" intensity={0.3} distance={3} />
      <pointLight position={[0, 0, -1.2]} color="#dc2626" intensity={0.3} distance={3} />
      
      {/* Exhaust particles */}
      <group ref={exhaustRef} position={[-2.3, -0.1, 0]} />
      
      {/* Lens flares */}
      <mesh position={[2.5, 0, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};
