'use client';

import { useState, useEffect } from 'react';
import CursorGrid from './CursorGrid';

/**
 * Convert an HSL color (h: 0-360, s: 0-100, l: 0-100) to a hex string.
 * Needed because CursorGrid internally uses hexToRgb and expects a hex color.
 */
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };

  return `#${f(0)}${f(8)}${f(4)}`;
}

export default function DynamicCursorGrid() {
  const [color, setColor] = useState('#D946EF');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map the cursor's X position to a hue value (0–360)
      const hue = (e.clientX / window.innerWidth) * 360;
      setColor(hslToHex(hue, 70, 50));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <CursorGrid color={color} maxOpacity={0.4} fillOpacity={0.05} />
    </div>
  );
}
