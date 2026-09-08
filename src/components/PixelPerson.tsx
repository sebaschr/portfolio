import React from 'react';
import clsx from 'clsx';
import { PERSON_CELLS } from './PixelCrowd';

type PixelPersonProps = { className?: string; size?: number };

// A single static pixel-person, reusing the same shape as the walking
// PixelCrowd, for a decorative "here's a pixel-you" avatar moment.
export const PixelPerson: React.FC<PixelPersonProps> = ({ className, size = 110 }) => (
  <svg
    className={clsx('pixel-person-solo', className)}
    viewBox="0 0 8 11"
    style={{ width: size, height: (size * 11) / 8 }}
    aria-hidden="true"
  >
    {PERSON_CELLS.map(([x, y]) => (
      <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
    ))}
  </svg>
);
