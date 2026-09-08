import React from 'react';
import clsx from 'clsx';
import { useScrollReveal } from '../hooks/useScrollReveal';

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={clsx('reveal', { 'reveal--visible': visible }, className)}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
