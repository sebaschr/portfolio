import React, { useMemo } from 'react';

// 8x11 pixel-grid person: round head, distinct arms, torso, legs. Built cell
// by cell so the whole scene stays a few SVGs and CSS keyframes instead of
// drawn frames or an animation library.
const PERSON_ROWS = [
  '..XXXX..',
  '.XXXXXX.',
  '.XXXXXX.',
  '..XXXX..',
  'X.XXXX.X',
  'X.XXXX.X',
  'X.XXXX.X',
  '..XXXX..',
  '..XXXX..',
  '.XXX.XXX',
  '.XXX.XXX',
];

export const PERSON_CELLS: [number, number][] = PERSON_ROWS.flatMap((row, y) =>
  row.split('').flatMap((cell, x) => (cell === 'X' ? [[x, y] as [number, number]] : []))
);

type Walker = {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  bobDuration: number;
  reverse: boolean;
  accent: boolean;
};

const randomWalkers = (count: number): Walker[] =>
  Array.from({ length: count }, (_, id) => {
    const size = 16 + Math.random() * 36;
    return {
      id,
      top: 12 + Math.random() * 82,
      size,
      duration: 34 - size / 3 + Math.random() * 10,
      delay: -Math.random() * 40,
      bobDuration: 0.4 + Math.random() * 0.3,
      reverse: Math.random() < 0.5,
      accent: Math.random() < 0.18,
    };
  });

type PixelCrowdProps = { count?: number };

export const PixelCrowd: React.FC<PixelCrowdProps> = ({ count = 22 + Math.floor(Math.random() * 8) }) => {
  const walkers = useMemo(() => randomWalkers(count), [count]);

  return (
    <div className="pixel-crowd" aria-hidden="true">
      <div className="pixel-crowd-backdrop dot-field" />
      {walkers.map((w) => (
        <div
          key={w.id}
          className="pixel-walker"
          style={
            {
              top: `${w.top}%`,
              '--duration': `${w.duration}s`,
              '--delay': `${w.delay}s`,
              '--direction': w.reverse ? 'reverse' : 'normal',
            } as React.CSSProperties
          }
        >
          <div className="pixel-walker-bob" style={{ '--bob-duration': `${w.bobDuration}s` } as React.CSSProperties}>
            <svg
              className="pixel-person"
              style={{
                width: w.size,
                height: (w.size * 11) / 8,
                transform: w.reverse ? 'scaleX(-1)' : undefined,
              }}
              viewBox="0 0 8 11"
            >
              <g className={w.accent ? 'pixel-person-accent' : undefined}>
                {PERSON_CELLS.map(([x, y]) => (
                  <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
                ))}
              </g>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
