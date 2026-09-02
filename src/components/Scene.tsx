'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrthographicCamera } from '@react-three/drei';
import { useScroll, useTransform } from 'framer-motion';

function CameraRig() {
  const { scrollYProgress } = useScroll();
  
  // Shift the camera Y position gently from 10 down to -2 as the user scrolls
  const yShift = useTransform(scrollYProgress, [0, 1], [10, -2]);
  
  // Slowly rotate the camera around the Y axis
  const rotShift = useTransform(scrollYProgress, [0, 1], [0, Math.PI / 2]);

  useFrame((state) => {
    // Apply Y shift directly
    state.camera.position.y = yShift.get();
    
    // Maintain standard isometric distance but orbit around
    const radius = Math.sqrt(200); // ~14.14
    const currentAngle = (Math.PI / 4) + rotShift.get();
    
    state.camera.position.x = radius * Math.sin(currentAngle);
    state.camera.position.z = radius * Math.cos(currentAngle);
    
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return null;
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas shadows>
        <OrthographicCamera
          makeDefault
          position={[10, 10, 10]}
          zoom={50}
          near={-100}
          far={100}
        />
        
        {/* Intercepts scroll and drives camera */}
        <CameraRig />

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Floating Developer Desk Diorama */}
        <Float speed={2} floatIntensity={1.5}>
          <group position={[0, -0.5, 0]}>
            {/* Desk Top */}
            <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
              <boxGeometry args={[4, 0.4, 2.5]} />
              <meshStandardMaterial color="#f97316" /> {/* Brand Orange */}
            </mesh>

            {/* Desk Legs */}
            <mesh castShadow receiveShadow position={[-1.8, -0.6, -1.05]}>
              <boxGeometry args={[0.2, 1.8, 0.2]} />
              <meshStandardMaterial color="#555555" />
            </mesh>
            <mesh castShadow receiveShadow position={[1.8, -0.6, -1.05]}>
              <boxGeometry args={[0.2, 1.8, 0.2]} />
              <meshStandardMaterial color="#555555" />
            </mesh>
            <mesh castShadow receiveShadow position={[-1.8, -0.6, 1.05]}>
              <boxGeometry args={[0.2, 1.8, 0.2]} />
              <meshStandardMaterial color="#555555" />
            </mesh>
            <mesh castShadow receiveShadow position={[1.8, -0.6, 1.05]}>
              <boxGeometry args={[0.2, 1.8, 0.2]} />
              <meshStandardMaterial color="#555555" />
            </mesh>

            {/* Monitor Base */}
            <mesh castShadow receiveShadow position={[0, 0.8, -0.5]}>
              <boxGeometry args={[0.4, 0.6, 0.2]} />
              <meshStandardMaterial color="#333333" />
            </mesh>

            {/* Monitor Screen Frame */}
            <mesh castShadow receiveShadow position={[0, 1.4, -0.4]}>
              <boxGeometry args={[2.2, 1.4, 0.1]} />
              <meshStandardMaterial color="#222222" />
            </mesh>

            {/* Glowing Monitor Screen */}
            <mesh position={[0, 1.4, -0.34]}>
              <planeGeometry args={[2.0, 1.2]} />
              <meshStandardMaterial
                color="#3b82f6" // Brand Blue
                emissive="#3b82f6"
                emissiveIntensity={2}
                toneMapped={false}
              />
            </mesh>
          </group>
        </Float>
      </Canvas>
    </div>
  );
}
