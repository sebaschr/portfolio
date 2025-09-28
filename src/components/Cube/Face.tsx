
import React from 'react';

type Props = {
  id: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function Face({ id, children, className = '', ariaLabel }: Props) {
  return (
    <div className={`cube__face ${className}`} role="group" aria-label={ariaLabel ?? id} data-face={id}>
      {children}
    </div>
  );
}
