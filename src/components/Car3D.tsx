
import { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';

export const Car3D = ({ introComplete }: { introComplete: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // Load the STL model
  const geometry = useLoader(STLLoader, '/car_model.stl');

  useEffect(() => {
    if (meshRef.current && geometry) {
      // Center the geometry
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox?.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);
      
      // Scale the model appropriately
      const scale = 1.5; // Adjust as needed for the car page
      geometry.scale(scale, scale, scale);
    }
  }, [geometry]);

  useFrame((state) => {
    if (groupRef.current && introComplete) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial 
          color="#ff6b35" 
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.0}
        />
      </mesh>
      
      {/* Lighting effects */}
      <pointLight position={[0, 0, 0]} color="#ff6b35" intensity={0.5} distance={10} />
      <pointLight position={[2, 0, 0]} color="#ffaa00" intensity={0.3} distance={5} />
    </group>
  );
};
