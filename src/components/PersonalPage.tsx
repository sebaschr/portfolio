import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useContactModal } from './ContactModalContext';
import {
  timeline,
  experienceIntro,
  skillGroups,
  education,
  languages,
} from '../data/experience';

const copy = {
  role: { en: 'Senior Front End Engineer', es: 'Ingeniero Frontend Senior' },
  location: { en: 'Costa Rica', es: 'Costa Rica' },
  sectionExperience: { en: 'Experience', es: 'Experiencia' },
  sectionSkills: { en: 'Skills', es: 'Habilidades' },
  sectionEducation: { en: 'Education', es: 'Educación' },
  sectionLanguages: { en: 'Languages', es: 'Idiomas' },
  contact: { en: 'Get in touch', es: 'Contactar' },
};

export const PersonalPage = () => {
  const { language, toggleLanguage } = useLanguage();
  const { open } = useContactModal();
  const [expanded, setExpanded] = useState<string | null>(timeline[0]?.id ?? null);

  return (
    <div className="personal-page">
    <div className="personal-page-inner">
      <header className="personal-header">
        <div>
          <h1 className="personal-name">Sebastian Chacon</h1>
          <p className="personal-role">
            {copy.role[language]} · {copy.location[language]}
          </p>
        </div>
        <div className="personal-header-actions">
          <button type="button" className="personal-lang" onClick={toggleLanguage}>
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button type="button" className="personal-contact-btn" onClick={open}>
            {copy.contact[language]}
          </button>
        </div>
      </header>

      <p className="personal-intro">{experienceIntro[language]}</p>

      <section className="personal-section">
        <h2 className="personal-section-title">{copy.sectionExperience[language]}</h2>
        <div className="personal-timeline">
          {timeline.map((entry) => {
            const isOpen = expanded === entry.id;
            return (
              <div key={entry.id} className="personal-entry">
                <button
                  type="button"
                  className="personal-entry-header"
                  onClick={() => setExpanded(isOpen ? null : entry.id)}
                  aria-expanded={isOpen}
                >
                  <span className="personal-entry-company">{entry.company}</span>
                  <span className="personal-entry-dates">{entry.dates[language]}</span>
                </button>
                <p className="personal-entry-role">
                  {entry.role[language]}
                  {entry.client && <>, {entry.client[language]}</>} · {entry.location[language]}
                </p>
                {isOpen && (
                  <ul className="personal-entry-bullets">
                    {entry.bullets[language].map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="personal-section">
        <h2 className="personal-section-title">{copy.sectionSkills[language]}</h2>
        <div className="personal-skills">
          {skillGroups.map((group) => (
            <div key={group.title.en} className="personal-skill-group">
              <h3>{group.title[language]}</h3>
              <p>{group.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="personal-section personal-section--split">
        <div>
          <h2 className="personal-section-title">{copy.sectionEducation[language]}</h2>
          <ul className="personal-list">
            {education.map((item) => (
              <li key={item.school + item.program.en}>
                <strong>{item.school}</strong> · {item.program[language]} ({item.period[language]})
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="personal-section-title">{copy.sectionLanguages[language]}</h2>
          <ul className="personal-list">
            {languages.map((item) => (
              <li key={item.name.en}>
                <strong>{item.name[language]}</strong> · {item.level[language]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="personal-footer">
        <button type="button" className="personal-contact-btn" onClick={open}>
          {copy.contact[language]}
        </button>
      </footer>
    </div>
    </div>
  );
};
