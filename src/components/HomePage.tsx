import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { PageWrapper, HeroBanner, Marquee, Banner, Reveal, ScrollZoomPanel, PixelCrowd } from './index';
import { useContactModal } from './ContactModalContext';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import { homeIntro, collectionTiles, redBanner, previewSection, closingStatement } from '../data/home';

export const HomePage = () => {
  const { open } = useContactModal();
  const { language } = useLanguage();
  const t = strings[language].home;

  return (
    <>
      <ScrollZoomPanel pinVh={50}>
        <HeroBanner
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          description={t.heroDescription}
          linkText={t.heroCta}
          onLinkClick={open}
          customBackground={<PixelCrowd />}
          overlay={false}
          wave
        />
      </ScrollZoomPanel>

      <Marquee text={t.marquee} />

      <PageWrapper>
        <Reveal>
          <p className="home-intro">{homeIntro[language]}</p>
        </Reveal>
      </PageWrapper>

      <PageWrapper>
        <div className="collection-grid">
          {collectionTiles.map((tile, i) => (
            <Reveal
              key={tile.id}
              delay={i * 90}
              className={clsx('collection-tile', `collection-tile--${tile.variant}`, {
                'grain-overlay': tile.variant === 'grain',
              })}
            >
              <span className="collection-tile-label">{tile.label[language]}</span>
              <p className="collection-tile-caption">{tile.caption[language]}</p>
            </Reveal>
          ))}
          <DoodleStar className="collection-doodle" />
        </div>
      </PageWrapper>

      <ScrollZoomPanel pinVh={30} className="red-banner-panel">
        <section className="red-banner grain-overlay">
          <div className="dot-field red-banner-dots" aria-hidden="true" />
          <div className="red-banner-content">
            <h2 className="mega-title red-banner-title">
              {redBanner.title[language].map((line, i) => (
                <span className="mega-title-line" key={i}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="red-banner-subtitle">{redBanner.subtitle[language]}</p>
          </div>
        </section>
      </ScrollZoomPanel>

      <section className="preview-section">
        <PageWrapper>
          <Reveal>
            <p className="page-eyebrow preview-eyebrow">{previewSection.eyebrow[language]}</p>
            <div className="blur-text-stack">
              <span className="blur-text-back" aria-hidden="true">
                {previewSection.word[language]}
              </span>
              <span className="blur-text-front">{previewSection.word[language]}</span>
            </div>
            <p className="preview-lead">{previewSection.lead[language]}</p>
          </Reveal>

          <div className="preview-items">
            {previewSection.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <Link className="preview-item" to={item.href}>
                  <span className="preview-item-name">{item.name}</span>
                  <span className="preview-item-blurb">{item.blurb[language]}</span>
                  <span className="preview-item-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="preview-ctas">
            <Link className="preview-cta" to="/projects">
              {previewSection.seeProjects[language]}
            </Link>
            <Link className="preview-cta" to="/experience">
              {previewSection.seeExperience[language]}
            </Link>
          </Reveal>
        </PageWrapper>
      </section>

      <PageWrapper>
        <Reveal>
          <div className="home-cta-decor">
            <div className="glow-streak" aria-hidden="true" />
            <section className="row">
              <Banner text={t.ctaTitle} subtext={t.ctaSubtext} className="section" onClick={open} />
            </section>
          </div>
        </Reveal>
      </PageWrapper>

      <section className="closing-statement grain-overlay">
        <p className="closing-statement-text">{closingStatement[language]}</p>
      </section>
    </>
  );
};

const DoodleStar = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
    <path
      d="M50 4 L58 40 L94 32 L62 52 L88 78 L52 62 L50 98 L48 62 L12 78 L38 52 L6 32 L42 40 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);
