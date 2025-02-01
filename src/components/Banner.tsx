import React from 'react';
import clsx from 'clsx';

type BannerProps = {
    text?: string;
    subtext?: string;
    backgroundImage?: string;
    backgroundImageHover?: string;
    className?: string;
    hideOverlay?: boolean;
    isCard?: boolean;
    onClick?: () => void;
};

export const Banner: React.FC<BannerProps> = ({
    text,
    subtext,
    backgroundImage,
    backgroundImageHover,
    className = '',
    hideOverlay = false,
    isCard = false,
    onClick
}) => {
    return (
        <div className={clsx('banner', className, { 'banner--card': isCard, 'hide-img-on-hover': backgroundImageHover })}
            onClick={onClick}>
            {backgroundImage && <img src={backgroundImage} alt="Banner background" className="banner-image" />}
            {backgroundImageHover && <img src={backgroundImageHover} alt="Banner hover background" className="banner-image-hover" />}

            {!hideOverlay && backgroundImage && <div className="banner-overlay" />}
            {text && <h2 className="banner-title">{text}</h2>}
            {subtext && <p className="banner-subtext">{subtext}</p>}
        </div>
    );
};
