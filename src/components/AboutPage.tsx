import { PageWrapper, Marquee, Reveal } from './index';
import { useLanguage } from '../i18n/LanguageContext';
import { aboutLabels, aboutLead, aboutSections, aboutValues } from '../data/about';

export const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className="page-hero page-hero--about grain-overlay">
        <div className="glow-streak" aria-hidden="true" />
        <div className="dot-field page-hero-dots" aria-hidden="true" />
        <PageWrapper>
          <Reveal>
            <p className="page-eyebrow">{aboutLabels.eyebrow[language]}</p>
            <h1 className="mega-title">{aboutLabels.wordmark}</h1>
            <p className="page-hero-intro">{aboutLead[language]}</p>
          </Reveal>
        </PageWrapper>
      </section>

      <Marquee text={aboutLabels.marquee[language]} />

      <PageWrapper>
        <div className="about-sections">
          {aboutSections.map((section, i) => (
            <Reveal key={section.title.en} delay={i * 80} className="about-section">
              <h2 className="section-label">{section.title[language]}</h2>
              <p className="about-section-text">{section.text[language]}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="chip-row chip-row--large about-values">
            {aboutValues.map((value) => (
              <li key={value.en} className="chip">
                {value[language]}
              </li>
            ))}
          </ul>
        </Reveal>
      </PageWrapper>
    </>
  );
};
