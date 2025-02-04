import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type BannerProps = {
    text?: string;
    subtext?: string;
    backgroundImage?: string;
    backgroundImageHover?: string;
    backgroundVideoLocalSrc?: string;
    className?: string;
    hideOverlay?: boolean;
    isCard?: boolean;
    redirectToPage?: string
};

export const Banner: React.FC<BannerProps> = ({
    text,
    subtext,
    backgroundImage,
    backgroundImageHover,
    className = '',
    hideOverlay = false,
    isCard = false,
    redirectToPage,
    backgroundVideoLocalSrc
}) => {

    const navigate = useNavigate();
    return (
        <div className={clsx('banner', className, { 'banner--card': isCard, 'hide-img-on-hover': backgroundImageHover })}
            onClick={() => {
                redirectToPage ? navigate(redirectToPage) : null
            }}>
            {backgroundImage && <img src={backgroundImage} alt="Banner background" className="banner-image" />}
            {backgroundImageHover && <img src={backgroundImageHover} alt="Banner hover background" className="banner-image-hover" />}
            {backgroundVideoLocalSrc && <video className="banner-video" src={backgroundVideoLocalSrc} controls={false} autoPlay loop muted playsInline id="video-background" poster="images/poster.jpg" />}
            {!hideOverlay && (backgroundImage || backgroundVideoLocalSrc) && <div className="banner-overlay" />}
            {text && <h2 className="banner-title">{text}</h2>}
            {subtext && <p className="banner-subtext">{subtext}</p>}
        </div>
    );
};
