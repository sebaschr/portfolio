import React from 'react';

type MarqueeProps = {
  text: string;
};

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  const content = `${text} `.repeat(8);
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="marquee-text">{content}</span>
        <span className="marquee-text" aria-hidden="true">{content}</span>
      </div>
    </div>
  );
};
