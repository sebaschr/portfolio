import React from 'react';
import clsx from 'clsx';

type BannerProps = {
    title?: string;
    eyebrow?: string
    text?: string;
    image?: string;
    className?: string;
    textRight?: boolean
    uppercase?: boolean;

};

export const TextSection: React.FC<BannerProps> = ({
    title,
    eyebrow,
    text,
    image,
    className,
    textRight = false,
    uppercase = false
}) => {
    return (
        <div
            className={
                clsx('text-banner',
                    className,
                    { 'text-banner--right': textRight },
                    { 'text-banner--upper': uppercase })}>
            {image && <img src={image} alt="text-banner background" className="text-banner-image" />}

            <div className="text-container">
                {title && <h2 className="text-banner-title">{title}</h2>}
                {eyebrow && <h2 className="text-banner-eyebrow">{eyebrow}</h2>}
                {text && <h2 className="text-banner-text">{text}</h2>}

            </div>

        </div>
    );
};
