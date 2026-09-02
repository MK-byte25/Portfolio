import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

// Using dynamic import with ssr: false ensures that the three.js context
// is never instantiated on the server, avoiding hydration mismatch errors.
const DynamicScene = dynamic(() => import('./Scene'), { 
  ssr: false,
});

export function ClientCanvas(props: ComponentProps<typeof DynamicScene>) {
  return <DynamicScene {...props} />;
}
