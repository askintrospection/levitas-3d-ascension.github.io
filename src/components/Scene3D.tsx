
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Text } from '@react-three/drei';
import { CinematicCar } from './CinematicCar';
import * as THREE from 'three';

const CinematicCamera = ({ phase, onPhaseComplete }: { phase: number; onPhaseComplete: (phase: number) => void }) => {
  const { camera } = useThree();
  const [startTime] = useState(Date.now());
  
  useFrame((state) => {
    const elapsed = (Date.now() - startTime) / 1000;
    
    if (phase === 0 && elapsed < 4) {
      // Phase 1: Dramatic tracking shot following the car
      const progress = elapsed / 4;
      camera.position.x = -15 + progress * 12; // Follow car movement
      camera.position.y = 2 + Math.sin(progress * Math.PI) * 1;
      camera.position.z = 8 - progress * 3;
      camera.lookAt(-15 + progress * 15, 0, 0);
      
      // Add camera shake for intensity
      camera.position.x += (Math.random() - 0.5) * 0.05;
      camera.position.y += (Math.random() - 0.5) * 0.03;
      
    } else if (phase === 0 && elapsed >= 4) {
      onPhaseComplete(1);
      
    } else if (phase === 1 && elapsed < 8) {
      // Phase 2: Close-up detail shots with smooth transitions
      const progress = (elapsed - 4) / 4;
      const cycle = Math.sin(progress * Math.PI * 2) * 0.5 + 0.5;
      
      // Orbit around the car for dramatic reveals
      camera.position.x = Math.cos(progress * Math.PI * 1.5) * 6;
      camera.position.z = Math.sin(progress * Math.PI * 1.5) * 6;
      camera.position.y = 1 + cycle * 2;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 1 && elapsed >= 8) {
      onPhaseComplete(2);
      
    } else if (phase === 2 && elapsed < 12) {
      // Phase 3: Pull back to reveal the full scene
      const progress = (elapsed - 8) / 4;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.x = Math.cos(Math.PI * 1.5) * 6 * (1 - easeOut) + 0 * easeOut;
      camera.position.z = Math.sin(Math.PI * 1.5) * 6 * (1 - easeOut) + 15 * easeOut;
      camera.position.y = 3 + easeOut * 4;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 2 && elapsed >= 12) {
      onPhaseComplete(3);
    }
  });

  return null;
};

const HangarEnvironment = () => {
  return (
    <>
      <fog attach="fog" args={['#0f0f1a', 10, 50]} />
      
      {/* Hangar floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.3}
          envMapIntensity={0.5}
        />
      </mesh>
      
      {/* Hangar walls */}
      <mesh position={[0, 5, -25]} receiveShadow>
        <planeGeometry args={[100, 20]} />
        <meshStandardMaterial 
          color="#16213e"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      
      {/* Atmospheric particles */}
      {Array.from({ length: 200 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 50,
          Math.random() * 10,
          (Math.random() - 0.5) * 50
        ]}>
          <sphereGeometry args={[0.005, 4, 4]} />
          <meshBasicMaterial 
            color="#888888"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </>
  );
};

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#1e40af" wireframe />
  </mesh>
);

export const Scene3D = () => {
  const [cinematicPhase, setCinematicPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handlePhaseComplete = (phase: number) => {
    setCinematicPhase(phase);
    if (phase === 3) {
      setIsComplete(true);
    }
  };

  return (
    <Canvas
      className="absolute inset-0 z-10"
      camera={{ position: [-15, 2, 8], fov: 75 }}
      shadows
    >
      <color attach="background" args={['#0a0a15']} />
      
      {/* Cinematic lighting setup */}
      <ambientLight intensity={0.1} color="#1a1a2e" />
      
      {/* Key light */}
      <directionalLight 
        position={[10, 15, 5]} 
        intensity={1.5} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Fill lights */}
      <pointLight position={[-10, 5, 10]} color="#1e40af" intensity={0.8} distance={20} />
      <pointLight position={[10, 3, -10]} color="#dc2626" intensity={0.6} distance={15} />
      
      {/* Rim light */}
      <directionalLight 
        position={[-10, 8, -10]} 
        intensity={1} 
        color="#888888"
      />

      {/* Environment */}
      <HangarEnvironment />
      <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} fade />
      
      {/* Cinematic car */}
      <Suspense fallback={<LoadingFallback />}>
        <CinematicCar phase={cinematicPhase} />
      </Suspense>
      
      {/* Interactive controls after cinematic */}
      {isComplete && (
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          autoRotate={true}
          autoRotateSpeed={0.5}
          target={[0, 0, 0]}
          dampingFactor={0.05}
          enableDamping
        />
      )}
      
      {/* Camera animation controller */}
      <CinematicCamera 
        phase={cinematicPhase} 
        onPhaseComplete={handlePhaseComplete}
      />
      
      {/* Floating branding text */}
      {isComplete && (
        <Text
          position={[0, -2.5, 0]}
          fontSize={1.2}
          color="#1e40af"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          LEVITAS STEM RACING
        </Text>
      )}
    </Canvas>
  );
};
