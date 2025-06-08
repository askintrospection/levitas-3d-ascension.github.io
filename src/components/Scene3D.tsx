
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Text } from '@react-three/drei';
import { Car3D } from './Car3D';
import * as THREE from 'three';

const CameraController = ({ introComplete }: { introComplete: boolean }) => {
  const { camera } = useThree();
  const [phase, setPhase] = useState(0);
  
  useFrame((state) => {
    if (!introComplete) {
      const t = state.clock.elapsedTime;
      
      if (t < 2) {
        // Phase 1: Zoom in dramatically
        camera.position.x = 20 - t * 10;
        camera.position.y = 5 - t * 2;
        camera.position.z = 10 - t * 4;
        camera.lookAt(0, 0, 0);
      } else if (t < 4) {
        // Phase 2: Circle around the car
        const angle = (t - 2) * Math.PI;
        camera.position.x = Math.cos(angle) * 8;
        camera.position.z = Math.sin(angle) * 8;
        camera.position.y = 2;
        camera.lookAt(0, 0, 0);
      } else if (t < 6) {
        // Phase 3: Pull back to reveal the scene
        const progress = (t - 4) / 2;
        camera.position.x = Math.cos(Math.PI) * 8 * (1 - progress) + 0 * progress;
        camera.position.z = Math.sin(Math.PI) * 8 * (1 - progress) + 12 * progress;
        camera.position.y = 2 + progress * 3;
        camera.lookAt(0, 0, 0);
      }
    }
  });

  return null;
};

const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#3b82f6" wireframe />
  </mesh>
);

export const Scene3D = () => {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Canvas
      className="absolute inset-0 z-10"
      camera={{ position: [20, 5, 10], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['transparent']} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      
      {/* Environment */}
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      
      {/* Car */}
      <Suspense fallback={<LoadingFallback />}>
        <Car3D introComplete={introComplete} />
      </Suspense>
      
      {/* Controls */}
      {introComplete && (
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
          autoRotate={false}
          target={[0, 0, 0]}
        />
      )}
      
      {/* Camera animation controller */}
      <CameraController introComplete={introComplete} />
      
      {/* Floating text */}
      {introComplete && (
        <Text
          position={[0, -3, 0]}
          fontSize={0.8}
          color="#3b82f6"
          anchorX="center"
          anchorY="middle"
          font="/fonts/helvetiker_regular.typeface.json"
        >
          LEVITAS F1 TEAM
        </Text>
      )}
    </Canvas>
  );
};
