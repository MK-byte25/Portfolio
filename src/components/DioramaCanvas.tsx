'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import { Float, OrthographicCamera } from '@react-three/drei';

const DioramaBase = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
      <Canvas shadows>
        <OrthographicCamera
          makeDefault
          position={[10, 10, 10]}
          zoom={50}
          near={-100}
          far={100}
          onUpdate={(c) => c.lookAt(0, 0, 0)}
        />

        {/* Night-mode Lighting */}
        <ambientLight intensity={0.15} />
        
        {/* Monitor Glow */}
        <pointLight position={[0, 1.5, -0.5]} intensity={1.5} color="#3b82f6" distance={8} />
        
        {/* Desk Lamp Glow (Warm Orange) */}
        <pointLight position={[-0.7, 1.4, -0.3]} intensity={1.2} color="#f97316" distance={6} />
        
        {/* Subtle moonlight fill */}
        <directionalLight position={[5, 10, 5]} intensity={0.2} color="#445588" />

        <Float floatIntensity={1.2} rotationIntensity={0.5} speed={2}>
          <group position={[0, -0.4, 0]}>
            
            {/* Floating Room Base / Floor Tile */}
            <mesh position={[0, -0.2, 0]} receiveShadow>
              <boxGeometry args={[4, 0.2, 4]} />
              <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Desk Top */}
            <mesh position={[0, 0.6, -0.5]} castShadow receiveShadow>
              <boxGeometry args={[2.8, 0.1, 1.4]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
            
            {/* Desk Legs */}
            <mesh position={[-1.3, 0.2, -1.1]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.8]} />
              <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[1.3, 0.2, -1.1]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.8]} />
              <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[-1.3, 0.2, 0.1]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.8]} />
              <meshStandardMaterial color="#555" />
            </mesh>
            <mesh position={[1.3, 0.2, 0.1]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.8]} />
              <meshStandardMaterial color="#555" />
            </mesh>

            {/* Monitor Stand */}
            <mesh position={[0, 0.8, -0.8]} castShadow>
              <boxGeometry args={[0.3, 0.4, 0.2]} />
              <meshStandardMaterial color="#111" />
            </mesh>
            
            {/* Monitor Screen Frame */}
            <mesh position={[0, 1.2, -0.8]} castShadow>
              <boxGeometry args={[1.8, 1.1, 0.1]} />
              <meshStandardMaterial color="#111" />
            </mesh>
            
            {/* Glowing Screen */}
            <mesh position={[0, 1.2, -0.74]}>
              <planeGeometry args={[1.7, 1]} />
              <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.5} toneMapped={false} />
            </mesh>

            {/* Keyboard */}
            <mesh position={[0, 0.67, -0.2]} castShadow>
              <boxGeometry args={[0.9, 0.04, 0.35]} />
              <meshStandardMaterial color="#111" />
            </mesh>

            {/* Desk Lamp */}
            {/* Lamp Base */}
            <mesh position={[-0.9, 0.67, -0.9]} castShadow>
              <cylinderGeometry args={[0.15, 0.15, 0.04]} />
              <meshStandardMaterial color="#222" />
            </mesh>
            {/* Lamp Pole */}
            <mesh position={[-0.9, 0.95, -0.9]} rotation={[0, 0, -0.2]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.6]} />
              <meshStandardMaterial color="#333" />
            </mesh>
            {/* Lamp Shade/Head */}
            <mesh position={[-0.75, 1.2, -0.85]} rotation={[0, 0.5, 0.5]} castShadow>
              <coneGeometry args={[0.15, 0.3]} />
              <meshStandardMaterial color="#222" />
            </mesh>
            {/* Glowing Bulb */}
            <mesh position={[-0.68, 1.12, -0.8]}>
              <sphereGeometry args={[0.04]} />
              <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={3} toneMapped={false} />
            </mesh>

            {/* Office Chair */}
            {/* Base */}
            <mesh position={[0, 0.05, 0.8]} castShadow>
              <cylinderGeometry args={[0.35, 0.35, 0.05]} />
              <meshStandardMaterial color="#111" />
            </mesh>
            {/* Pole */}
            <mesh position={[0, 0.25, 0.8]} castShadow>
              <cylinderGeometry args={[0.04, 0.04, 0.4]} />
              <meshStandardMaterial color="#333" />
            </mesh>
            {/* Seat */}
            <mesh position={[0, 0.45, 0.8]} castShadow>
              <boxGeometry args={[0.7, 0.1, 0.7]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
            {/* Backrest Support */}
            <mesh position={[0, 0.7, 1.1]} castShadow>
              <boxGeometry args={[0.1, 0.5, 0.05]} />
              <meshStandardMaterial color="#111" />
            </mesh>
            {/* Backrest */}
            <mesh position={[0, 0.85, 1.1]} castShadow>
              <boxGeometry args={[0.7, 0.4, 0.1]} />
              <meshStandardMaterial color="#2d2d2d" />
            </mesh>
            
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

// Export dynamically to prevent Next.js SSR hydration errors with WebGL
export default dynamic(() => Promise.resolve(DioramaBase), { ssr: false });
