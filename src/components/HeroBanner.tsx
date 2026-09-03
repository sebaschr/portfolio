import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type VideoSettings = {
  pauseOnHover?: boolean;
  showControls?: boolean;
  muted?: boolean;
};

type HeroBannerProps = {
  title: string;
  subtitle?: string;
  description?: string;
  linkText?: string;
  linkURL?: string;
  backgroundImage?: string;
  heroVideo?: string;
  videoSettings?: VideoSettings;
  mode?: 'simple' | 'two-col';
  wave?: boolean;
  className?: string;
};

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  linkText = 'Read More',
  linkURL,
  backgroundImage,
  heroVideo,
  videoSettings,
  mode = 'simple',
  wave = false,
  className,
}) => {
  const { pauseOnHover = false, showControls = false, muted = true } = videoSettings ?? {};

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);

  // <video muted> only reliably sets the *initial* state in React — keep
  // the live DOM property in sync when the user toggles sound.
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setUserPaused(false);
    } else {
      video.pause();
      setIsPlaying(false);
      setUserPaused(true);
    }
  };

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false); // hover-pause only — don't mark as user-paused
    }
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover || userPaused) return; // respect an explicit user pause
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => setIsMuted((prev) => !prev);

  const hasMedia = Boolean(backgroundImage || heroVideo);
  const showMuteToggle = Boolean(heroVideo) && showControls && !muted;

  return (
    <section
      className={clsx('hero-banner', `hero-banner--${mode}`, className, {
        'hero-banner--no-media': !hasMedia,
      })}
      onMouseEnter={heroVideo ? handleMouseEnter : undefined}
      onMouseLeave={heroVideo ? handleMouseLeave : undefined}
    >
      {hasMedia && (
        <div className="hero-banner-media">
          {heroVideo ? (
            <video
              ref={videoRef}
              className="hero-banner-video"
              src={heroVideo}
              poster={backgroundImage}
              autoPlay
              loop
              muted={muted}
              playsInline
            />
          ) : (
            backgroundImage && <img src={backgroundImage} alt="" className="hero-banner-image" />
          )}
          <div className="hero-banner-overlay" />
        </div>
      )}

      {heroVideo && (
        <div className="hero-banner-controls">
          <button
            type="button"
            className="hero-banner-control-btn"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            onClick={handleTogglePlay}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          {showMuteToggle && (
            <button
              type="button"
              className="hero-banner-control-btn"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              onClick={handleToggleMute}
            >
              {isMuted ? <MutedIcon /> : <SoundIcon />}
            </button>
          )}
        </div>
      )}

      <div className="hero-banner-content">
        <div className="hero-banner-primary">
          {subtitle && <p className="hero-banner-subtitle">{subtitle}</p>}
          <h1 className="hero-banner-title">{title}</h1>
        </div>
        {(description || linkURL) && (
          <div className="hero-banner-secondary">
            {description && <p className="hero-banner-description">{description}</p>}
            {linkURL && (
              <a href={linkURL} className="hero-banner-cta">
                {linkText}
              </a>
            )}
          </div>
        )}
      </div>

      {wave && (
        <svg className="hero-banner-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z" />
        </svg>
      )}
    </section>
  );
};

const PlayIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M6 4l14 8-14 8V4z" fill="currentColor" />
  </svg>
);

const PauseIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <rect x="5" y="4" width="5" height="16" fill="currentColor" />
    <rect x="14" y="4" width="5" height="16" fill="currentColor" />
  </svg>
);

const SoundIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
    <path d="M16 9a4 4 0 010 6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const MutedIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
    <line x1="15" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="2" />
    <line x1="21" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
  </svg>
);
