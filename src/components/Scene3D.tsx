
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text, PerspectiveCamera } from '@react-three/drei';
import { STLLoader } from './STLLoader';
import * as THREE from 'three';

const CinematicCamera = ({ phase, onPhaseComplete }: { phase: number; onPhaseComplete: (phase: number) => void }) => {
  const { camera } = useThree();
  const [startTime] = useState(Date.now());
  
  useFrame((state) => {
    const elapsed = (Date.now() - startTime) / 1000;
    
    if (phase === 0 && elapsed < 3) {
      // Phase 1: Dramatic entry
      const progress = elapsed / 3;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.x = -15 + easeOut * 12;
      camera.position.y = 4 + Math.sin(progress * Math.PI) * 1;
      camera.position.z = 10 - progress * 2;
      camera.lookAt(0, 1, 0);
      
    } else if (phase === 0 && elapsed >= 3) {
      onPhaseComplete(1);
      
    } else if (phase === 1 && elapsed < 6) {
      // Phase 2: Close-up details
      const progress = (elapsed - 3) / 3;
      
      if (progress < 0.5) {
        const p = progress * 2;
        camera.position.x = 3 + Math.cos(p * Math.PI) * 2;
        camera.position.z = 2 + Math.sin(p * Math.PI) * 2;
        camera.position.y = 1;
        camera.lookAt(0, 0, 0);
      } else {
        const p = (progress - 0.5) * 2;
        camera.position.x = -4 + Math.cos(p * Math.PI + Math.PI) * 3;
        camera.position.z = Math.sin(p * Math.PI + Math.PI) * 3;
        camera.position.y = 2 + p * 1;
        camera.lookAt(0, 0, 0);
      }
      
    } else if (phase === 1 && elapsed >= 6) {
      onPhaseComplete(2);
      
    } else if (phase === 2 && elapsed < 9) {
      // Phase 3: Sweeping hero shot
      const progress = (elapsed - 6) / 3;
      
      camera.position.x = Math.cos(progress * Math.PI * 2) * 10;
      camera.position.z = Math.sin(progress * Math.PI * 2) * 10;
      camera.position.y = 5 + Math.sin(progress * Math.PI * 2) * 2;
      camera.lookAt(0, 0, 0);
      
    } else if (phase === 2 && elapsed >= 9) {
      onPhaseComplete(3);
      
    } else if (phase === 3) {
      // Final position
      const progress = Math.min((elapsed - 9) / 2, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      
      camera.position.x = 8 * (1 - easeOut) + 6 * easeOut;
      camera.position.z = 8 * (1 - easeOut) + 8 * easeOut;
      camera.position.y = 5;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

const SimpleEnvironment = () => {
  return (
    <>
      {/* Simple ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Track lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, 0]}>
        <planeGeometry args={[2, 50]} />
        <meshStandardMaterial color="#ff6b35" />
      </mesh>
    </>
  );
};

const SimpleLighting = () => {
  return (
    <>
      <directionalLight 
        position={[10, 15, 5]} 
        intensity={1.5} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <directionalLight 
        position={[-8, 8, -10]} 
        intensity={1} 
        color="#ff6b35"
      />
      
      <ambientLight intensity={0.4} color="#ff8844" />
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
        antialias: false, 
        alpha: true,
        powerPreference: "default"
      }}
    >
      <color attach="background" args={['#0a0510']} />
      
      <SimpleLighting />
      
      <SimpleEnvironment />
      
      {/* STL Car Model */}
      <Suspense fallback={<LoadingFallback />}>
        <group position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
          <STLLoader phase={3} />
        </group>
      </Suspense>
      
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
      
      <CinematicCamera 
        phase={cinematicPhase} 
        onPhaseComplete={handlePhaseComplete}
      />
      
      <Environment preset="sunset" />
    </Canvas>
  );
};
