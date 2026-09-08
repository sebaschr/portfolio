import React from 'react';
import clsx from 'clsx';
import { useLanguage } from '../i18n/LanguageContext';
import type { TimelineEntry } from '../data/experience';

type EntryCardProps = {
  entry: TimelineEntry;
  className?: string;
  maxBullets?: number;
};

export const EntryCard: React.FC<EntryCardProps> = ({ entry, className, maxBullets }) => {
  const { language } = useLanguage();
  const bullets = entry.bullets[language];
  const shown = maxBullets ? bullets.slice(0, maxBullets) : bullets;

  return (
    <article className={clsx('entry-card', className)}>
      <header className="entry-card-header">
        <h3 className="entry-card-company">{entry.company}</h3>
        <span className="entry-card-dates">{entry.dates[language]}</span>
      </header>

      <p className="entry-card-meta">
        {entry.role[language]}
        {entry.client && <>, {entry.client[language]}</>}
        <span className="entry-card-location"> · {entry.location[language]}</span>
      </p>

      {entry.stack.length > 0 && (
        <ul className="chip-row" aria-label="Stack">
          {entry.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      )}

      <ul className="entry-card-bullets">
        {shown.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
};
