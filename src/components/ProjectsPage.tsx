import { PageWrapper, Marquee, Reveal, EntryCard } from './index';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import {
  featuredProject,
  featuredProjectHero,
  employerProjects,
  minorProjects,
  projectsIntro,
  projectsLabels,
} from '../data/projects';

export const ProjectsPage = () => {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <>
      <section className="page-hero page-hero--projects grain-overlay">
        <div className="glow-streak" aria-hidden="true" />
        <div className="dot-field page-hero-dots" aria-hidden="true" />
        <PageWrapper>
          <Reveal>
            <p className="page-eyebrow">{t.pages.projectsLabel}</p>
            <p className="page-hero-intro">{projectsIntro[language]}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mega-title mega-title--wordmark">
              {featuredProjectHero.wordmarkLines.map((line) => (
                <span className="mega-title-line" key={line}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="featured-tagline">{featuredProjectHero.tagline[language]}</p>
            <p className="entry-card-meta featured-meta">
              {featuredProject.role[language]}
              {featuredProject.client && <>, {featuredProject.client[language]}</>}
              <span className="entry-card-location"> · {featuredProject.dates[language]}</span>
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="chip-row chip-row--large" aria-label="Stack">
              {featuredProject.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="section-label">{projectsLabels.whatItDoes[language]}</h2>
            <p className="page-hero-intro">{projectsLabels.whatItDoesIntro[language]}</p>
            <ul className="feature-grid">
              {featuredProject.bullets[language].map((bullet, i) => (
                <li key={i} className="feature-grid-item">
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        </PageWrapper>
      </section>

      <Marquee text={projectsLabels.marqueeIntro[language]} />

      <PageWrapper>
        <Reveal>
          <h2 className="section-label">{projectsLabels.employerWork[language]}</h2>
        </Reveal>

        <div className="entry-card-grid">
          {employerProjects.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 80}>
              <EntryCard entry={entry} maxBullets={3} />
            </Reveal>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper>
        <Reveal>
          <h2 className="section-label">{projectsLabels.alsoWorked[language]}</h2>
        </Reveal>

        <div className="entry-card-grid">
          {minorProjects.map((entry) => (
            <Reveal key={entry.id}>
              <EntryCard entry={entry} maxBullets={2} className="entry-card--minor" />
            </Reveal>
          ))}
        </div>
      </PageWrapper>
    </>
  );
};
