import React from 'react';
import clsx from 'clsx';

type PageWrapperProps = React.PropsWithChildren<{ className?: string }> &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>;

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className, ...rest }) => (
  <div className={clsx('wrapper', className)} {...rest}>
    {children}
  </div>
);
