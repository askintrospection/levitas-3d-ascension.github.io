import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text, PerspectiveCamera } from '@react-three/drei';
import { RealisticF1Car } from './RealisticF1Car';
import * as THREE from 'three';

const CinematicCamera = ({ phase, onPhaseComplete }: { phase: number; onPhaseComplete: (phase: number) => void }) => {
  const { camera } = useThree();
  const [startTime] = useState(Date.now());
  
  useFrame((state) => {
    const elapsed = (Date.now() - startTime) / 1000;
    
    if (phase === 0 && elapsed < 3) {
      // Phase 1: Dramatic entry - better angle to see car shape
      const progress = elapsed / 3;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      camera.position.x = -15 + easeOut * 12;
      camera.position.y = 4 + Math.sin(progress * Math.PI) * 1;
      camera.position.z = 10 - progress * 2;
      camera.lookAt(-3 + progress * 3, 1, 0);
      
    } else if (phase === 0 && elapsed >= 3) {
      onPhaseComplete(1);
      
    } else if (phase === 1 && elapsed < 6) {
      // Phase 2: Close-up details - better angles to showcase details
      const progress = (elapsed - 3) / 3;
      
      if (progress < 0.5) {
        // Focus on front wing and nose - better angle
        const p = progress * 2;
        camera.position.x = 3 + Math.cos(p * Math.PI) * 2;
        camera.position.z = 2 + Math.sin(p * Math.PI) * 2;
        camera.position.y = 1;
        camera.lookAt(2, 0, 0);
      } else {
        // Move to rear wing - improved visibility
        const p = (progress - 0.5) * 2;
        camera.position.x = -4 + Math.cos(p * Math.PI + Math.PI) * 3;
        camera.position.z = Math.sin(p * Math.PI + Math.PI) * 3;
        camera.position.y = 2 + p * 1;
        camera.lookAt(-2, 0.8, 0);
      }
      
    } else if (phase === 1 && elapsed >= 6) {
      onPhaseComplete(2);
      
    } else if (phase === 2 && elapsed < 9) {
      // Phase 3: Sweeping hero shot - higher and more dynamic
      const progress = (elapsed - 6) / 3;
      const easeInOut = 0.5 * (1 + Math.sin(Math.PI * progress - Math.PI/2));
      
      camera.position.x = Math.cos(progress * Math.PI * 2) * 10;
      camera.position.z = Math.sin(progress * Math.PI * 2) * 10;
      camera.position.y = 5 + Math.sin(progress * Math.PI * 2) * 2;
      camera.lookAt(0, 1, 0);
      
    } else if (phase === 2 && elapsed >= 9) {
      onPhaseComplete(3);
      
    } else if (phase === 3) {
      // Final position for transition - optimal viewing angle
      const progress = Math.min((elapsed - 9) / 2, 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      
      camera.position.x = 8 * (1 - easeOut) + 6 * easeOut;
      camera.position.z = 8 * (1 - easeOut) + 8 * easeOut;
      camera.position.y = 5;
      camera.lookAt(0, 1, 0);
    }
  });

  return null;
};

const F1Environment = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={0.5}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.99, 0]}>
        <planeGeometry args={[2, 100]} />
        <meshStandardMaterial 
          color="#ff6b35"
          emissive="#ff6b35"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[4, -0.99, 0]}>
        <planeGeometry args={[0.5, 100]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4, -0.99, 0]}>
        <planeGeometry args={[0.5, 100]} />
        <meshStandardMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh position={[0, 15, -40]} receiveShadow>
        <planeGeometry args={[120, 40]} />
        <meshStandardMaterial 
          color="#ff6b35"
          emissive="#ff3300"
          emissiveIntensity={0.3}
        />
      </mesh>

      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i}
          ref={i === 0 ? meshRef : undefined}
          position={[
            Math.cos(i * Math.PI / 4) * 20,
            5 + Math.sin(i * 0.7) * 3,
            Math.sin(i * Math.PI / 4) * 20
          ]}
          rotation={[Math.PI / 2, 0, i * Math.PI / 4]}
        >
          <torusGeometry args={[3, 0.1, 16, 100]} />
          <meshStandardMaterial 
            color="#ffaa00"
            emissive="#ffaa00"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {Array.from({ length: 50 }).map((_, i) => (
        <mesh 
          key={i}
          position={[
            (Math.random() - 0.5) * 80,
            Math.random() * 20,
            (Math.random() - 0.5) * 80
          ]}
        >
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial 
            color={Math.random() > 0.5 ? "#ff6b35" : "#ffaa00"}
            emissive={Math.random() > 0.5 ? "#ff6b35" : "#ffaa00"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {Array.from({ length: 12 }).map((_, i) => (
        <group key={i} position={[0, 0, -15 + i * 5]}>
          <mesh position={[15, 0.5, 0]}>
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial 
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={0.2}
            />
          </mesh>
          <mesh position={[-15, 0.5, 0]}>
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial 
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}
    </>
  );
};

const DynamicF1Lighting = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 15;
      lightRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 15;
    }
  });

  return (
    <>
      <directionalLight 
        ref={lightRef}
        position={[10, 15, 5]} 
        intensity={2} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={50}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
      />
      
      <directionalLight 
        position={[-8, 8, -10]} 
        intensity={1.5} 
        color="#ff6b35"
      />
      
      <spotLight
        position={[0, 20, 15]}
        angle={0.4}
        penumbra={0.3}
        intensity={1.2}
        color="#ffaa00"
        target-position={[0, 0, 0]}
        castShadow
      />
      <spotLight
        position={[15, 20, 0]}
        angle={0.4}
        penumbra={0.3}
        intensity={1.2}
        color="#ff6b35"
        target-position={[0, 0, 0]}
        castShadow
      />
      <spotLight
        position={[-15, 20, 0]}
        angle={0.4}
        penumbra={0.3}
        intensity={1.2}
        color="#ffff00"
        target-position={[0, 0, 0]}
        castShadow
      />
      
      <ambientLight intensity={0.3} color="#ff8844" />
      
      <pointLight position={[10, 5, 10]} color="#ff6b35" intensity={0.8} distance={30} />
      <pointLight position={[-10, 5, 10]} color="#ffaa00" intensity={0.8} distance={30} />
      <pointLight position={[10, 5, -10]} color="#ffff00" intensity={0.6} distance={25} />
      <pointLight position={[-10, 5, -10]} color="#ff3300" intensity={0.6} distance={25} />
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
      <color attach="background" args={['#0a0510']} />
      
      <DynamicF1Lighting />
      
      <F1Environment />
      
      {/* Using RealisticF1Car instead of STLCar */}
      <Suspense fallback={<LoadingFallback />}>
        <group position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
          <RealisticF1Car introComplete={true} />
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
          target={[0, 1, 0]}
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
