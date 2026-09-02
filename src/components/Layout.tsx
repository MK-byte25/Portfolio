import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* HTML Overlay Layer (z-index 10) */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        <main className="min-h-screen w-full pointer-events-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
