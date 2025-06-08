
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import { CinematicCar } from './CinematicCar';
import * as THREE from 'three';

const CinematicCamera = ({ phase, onPhaseComplete }: { phase: number; onPhaseComplete: (phase: number) => void }) => {
  const { camera } = useThree();
  const [startTime] = useState(Date.now());
  
  useFrame((state) => {
    const elapsed = (Date.now() - startTime) / 1000;
    
    if (phase === 0 && elapsed < 4) {
      // Phase 1: Studio tracking shot
      const progress = elapsed / 4;
      camera.position.x = -12 + progress * 10;
      camera.position.y = 1.5 + Math.sin(progress * Math.PI) * 0.5;
      camera.position.z = 6 - progress * 2;
      camera.lookAt(-12 + progress * 12, 0, 0);
      
    } else if (phase === 0 && elapsed >= 4) {
      onPhaseComplete(1);
      
    } else if (phase === 1 && elapsed < 8) {
      // Phase 2: Detail shots with smooth camera movement
      const progress = (elapsed - 4) / 4;
      
      camera.position.x = Math.cos(progress * Math.PI) * 4;
      camera.position.z = Math.sin(progress * Math.PI) * 4;
      camera.position.y = 1 + Math.sin(progress * Math.PI * 2) * 0.5;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 1 && elapsed >= 8) {
      onPhaseComplete(2);
      
    } else if (phase === 2 && elapsed < 12) {
      // Phase 3: Final reveal
      const progress = (elapsed - 8) / 4;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.x = Math.cos(Math.PI) * 4 * (1 - easeOut);
      camera.position.z = Math.sin(Math.PI) * 4 * (1 - easeOut) + 12 * easeOut;
      camera.position.y = 1.5 + easeOut * 2;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 2 && elapsed >= 12) {
      onPhaseComplete(3);
    }
  });

  return null;
};

const StudioEnvironment = () => {
  return (
    <>
      {/* Studio floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#f8f8f8"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>
      
      {/* Studio backdrop */}
      <mesh position={[0, 5, -15]} receiveShadow>
        <planeGeometry args={[50, 20]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0.0}
          roughness={1.0}
        />
      </mesh>
    </>
  );
};

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#ff6b35" />
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
      camera={{ position: [-12, 1.5, 6], fov: 75 }}
      shadows
    >
      <color attach="background" args={['#ffffff']} />
      
      {/* Studio lighting setup */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Key light */}
      <directionalLight 
        position={[8, 10, 5]} 
        intensity={1.2} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill lights */}
      <pointLight position={[-8, 4, 8]} color="#ffffff" intensity={0.6} distance={15} />
      <pointLight position={[8, 2, -8]} color="#ffffff" intensity={0.4} distance={12} />
      
      {/* Environment */}
      <StudioEnvironment />
      
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
          minDistance={6}
          maxDistance={20}
          autoRotate={false}
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
      
      {/* Branding text */}
      {isComplete && (
        <Text
          position={[0, -2, 0]}
          fontSize={1.0}
          color="#ff6b35"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          CARS 404 RACING
        </Text>
      )}
    </Canvas>
  );
};
