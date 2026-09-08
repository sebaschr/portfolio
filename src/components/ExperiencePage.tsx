import { PageWrapper, Marquee, Reveal, EntryCard } from './index';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';
import {
  timeline,
  experienceIntro,
  experienceLabels,
  skillGroups,
  education,
  languages,
} from '../data/experience';

export const ExperiencePage = () => {
  const { language } = useLanguage();
  const t = strings[language];

  return (
    <>
      <section className="page-hero page-hero--experience grain-overlay">
        <div className="glow-streak" aria-hidden="true" />
        <div className="dot-field page-hero-dots" aria-hidden="true" />
        <PageWrapper>
          <Reveal>
            <h1 className="mega-title">{t.pages.experienceLabel}</h1>
            <p className="page-hero-intro">{experienceIntro[language]}</p>
          </Reveal>
        </PageWrapper>
      </section>

      <Marquee text={experienceLabels.marqueeIntro[language]} />

      <PageWrapper>
        <Reveal>
          <h2 className="section-label">{experienceLabels.work[language]}</h2>
        </Reveal>

        <div className="timeline">
          {timeline.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 80} className="timeline-item">
              <EntryCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper>
        <Reveal>
          <h2 className="section-label">{experienceLabels.skills[language]}</h2>
        </Reveal>

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title.en} delay={i * 60} className="skill-group">
              <h3 className="skill-group-title">{group.title[language]}</h3>
              <ul className="chip-row">
                {group.skills.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="section-label">{experienceLabels.educationAndLanguages[language]}</h2>
        </Reveal>

        <div className="row">
          <Reveal className="education-list">
            {education.map((item) => (
              <div className="education-item" key={item.school + item.program.en}>
                <span className="education-school">{item.school}</span>
                <span className="education-program">{item.program[language]}</span>
                <span className="education-period">{item.period[language]}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="languages-list" delay={80}>
            {languages.map((item) => (
              <div className="language-item" key={item.name.en}>
                <span className="language-name">{item.name[language]}</span>
                <span className="language-level">{item.level[language]}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </PageWrapper>
    </>
  );
};
