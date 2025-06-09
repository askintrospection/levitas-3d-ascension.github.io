
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text, PerspectiveCamera } from '@react-three/drei';
import { CinematicCar } from './CinematicCar';
import * as THREE from 'three';

const CinematicCamera = ({ phase, onPhaseComplete }: { phase: number; onPhaseComplete: (phase: number) => void }) => {
  const { camera } = useThree();
  const [startTime] = useState(Date.now());
  
  useFrame((state) => {
    const elapsed = (Date.now() - startTime) / 1000;
    
    if (phase === 0 && elapsed < 3) {
      // Phase 1: Dramatic entry - car sliding in
      const progress = elapsed / 3;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.x = -20 + easeOut * 15;
      camera.position.y = 2 + Math.sin(progress * Math.PI) * 1;
      camera.position.z = 8 - progress * 3;
      camera.lookAt(-5 + progress * 5, 0, 0);
      
    } else if (phase === 0 && elapsed >= 3) {
      onPhaseComplete(1);
      
    } else if (phase === 1 && elapsed < 6) {
      // Phase 2: Close-up details - tires, spoilers
      const progress = (elapsed - 3) / 3;
      
      if (progress < 0.5) {
        // Focus on front tire
        const p = progress * 2;
        camera.position.x = 2 + Math.cos(p * Math.PI) * 2;
        camera.position.z = 1 + Math.sin(p * Math.PI) * 2;
        camera.position.y = 0.5;
        camera.lookAt(2, -0.3, 1);
      } else {
        // Move to rear spoiler
        const p = (progress - 0.5) * 2;
        camera.position.x = -3 + Math.cos(p * Math.PI + Math.PI) * 3;
        camera.position.z = Math.sin(p * Math.PI + Math.PI) * 3;
        camera.position.y = 1 + p * 1;
        camera.lookAt(-2, 0.5, 0);
      }
      
    } else if (phase === 1 && elapsed >= 6) {
      onPhaseComplete(2);
      
    } else if (phase === 2 && elapsed < 9) {
      // Phase 3: Sweeping hero shot
      const progress = (elapsed - 6) / 3;
      const easeInOut = 0.5 * (1 + Math.sin(Math.PI * progress - Math.PI/2));
      
      camera.position.x = Math.cos(progress * Math.PI * 2) * 8;
      camera.position.z = Math.sin(progress * Math.PI * 2) * 8;
      camera.position.y = 3 + Math.sin(progress * Math.PI) * 2;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 2 && elapsed >= 9) {
      onPhaseComplete(3);
      
    } else if (phase === 3) {
      // Final position for transition
      const progress = Math.min((elapsed - 9) / 2, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      
      camera.position.x = 6 * (1 - easeOut);
      camera.position.z = 12 * easeOut + 6 * (1 - easeOut);
      camera.position.y = 4;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

const StudioEnvironment = () => {
  return (
    <>
      {/* Studio floor with reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.7}
          envMapIntensity={0.5}
        />
      </mesh>
      
      {/* Studio backdrop with gradient */}
      <mesh position={[0, 5, -20]} receiveShadow>
        <planeGeometry args={[60, 25]} />
        <meshStandardMaterial 
          color="#2a2a2a"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>

      {/* Side walls */}
      <mesh position={[-25, 5, 0]} rotation={[0, Math.PI/2, 0]} receiveShadow>
        <planeGeometry args={[40, 25]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
      
      <mesh position={[25, 5, 0]} rotation={[0, -Math.PI/2, 0]} receiveShadow>
        <planeGeometry args={[40, 25]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.9} />
      </mesh>
    </>
  );
};

const DramaticLighting = () => {
  return (
    <>
      {/* Key light with dramatic angle */}
      <directionalLight 
        position={[10, 15, 5]} 
        intensity={1.5} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      
      {/* Rim lighting */}
      <directionalLight 
        position={[-8, 8, -10]} 
        intensity={0.8} 
        color="#ff6b35"
      />
      
      {/* Fill lights */}
      <pointLight position={[5, 3, 10]} color="#ffffff" intensity={0.4} distance={20} />
      <pointLight position={[-5, 3, 10]} color="#ffaa00" intensity={0.3} distance={15} />
      
      {/* Ambient with slight warm tint */}
      <ambientLight intensity={0.2} color="#ffeedd" />
      
      {/* Spot lights for dramatic effect */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.8}
        color="#ffffff"
        target-position={[0, 0, 0]}
        castShadow
      />
    </>
  );
};

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[4, 1, 2]} />
    <meshStandardMaterial color="#ff6b35" />
  </mesh>
);

export const Scene3D = ({ phase }: { phase: number }) => {
  const [cinematicPhase, setCinematicPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handlePhaseComplete = (newPhase: number) => {
    setCinematicPhase(newPhase);
    if (newPhase === 3) {
      setIsComplete(true);
    }
  };

  return (
    <Canvas
      className="absolute inset-0 z-10"
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      <color attach="background" args={['#000000']} />
      
      {/* Dramatic studio lighting */}
      <DramaticLighting />
      
      {/* Studio environment */}
      <StudioEnvironment />
      
      {/* F1 Car */}
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
          autoRotate={false}
          target={[0, 0, 0]}
          dampingFactor={0.08}
          enableDamping
        />
      )}
      
      {/* Cinematic camera controller */}
      <CinematicCamera 
        phase={cinematicPhase} 
        onPhaseComplete={handlePhaseComplete}
      />
      
      {/* Environmental lighting */}
      <Environment preset="studio" />
    </Canvas>
  );
};
