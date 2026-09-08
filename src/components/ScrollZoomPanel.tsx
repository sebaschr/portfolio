import React from 'react';
import clsx from 'clsx';
import { useScrollZoom } from '../hooks/useScrollZoom';

type ScrollZoomPanelProps = React.PropsWithChildren<{
  className?: string;
  /** Extra scroll distance (in vh) the panel stays pinned for, beyond 100vh. */
  pinVh?: number;
}>;

// Full-height panel that stays pinned while the user scrolls through it,
// zooming in a little, then zooming back out and fading as it releases.
export const ScrollZoomPanel: React.FC<ScrollZoomPanelProps> = ({ children, className, pinVh = 60 }) => {
  const { ref, progress } = useScrollZoom<HTMLDivElement>();
  const scale = 1 + 0.15 * Math.sin(Math.min(progress, 1) * Math.PI);
  const fadeStart = 0.85;
  const opacity = progress > fadeStart ? Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart)) : 1;

  return (
    <div
      ref={ref}
      className={clsx('scroll-zoom-panel', className)}
      style={{ '--pin-extra': `${pinVh}vh` } as React.CSSProperties}
    >
      <div className="scroll-zoom-panel-sticky" style={{ transform: `scale(${scale})`, opacity }}>
        {children}
      </div>
    </div>
  );
};
