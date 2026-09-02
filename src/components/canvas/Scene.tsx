'use client';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';
import { Preload } from '@react-three/drei';

interface SceneProps extends Omit<CanvasProps, 'children'> {
  children: ReactNode;
}

export default function Scene({ children, ...props }: SceneProps) {
  // Renders the Canvas only on the client
  return (
    <Canvas {...props}>
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
