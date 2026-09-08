import React, { useState } from 'react';
import clsx from 'clsx';
import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { TimelineEntry } from '../data/experience';

type FolderTabsProps = { entries: TimelineEntry[] };

export const FolderTabs: React.FC<FolderTabsProps> = ({ entries }) => {
  const [active, setActive] = useState(0);
  const { language } = useLanguage();
  const entry = entries[active];

  return (
    <div className="folder">
      <div className="folder-tabs" role="tablist">
        {entries.map((e, i) => (
          <button
            key={e.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={clsx('folder-tab', { 'folder-tab--active': i === active })}
            onClick={() => setActive(i)}
          >
            {e.company}
          </button>
        ))}
      </div>

      <div className="folder-panel" role="tabpanel">
        <div className="folder-panel-text">
          <span className="folder-panel-date">{entry.dates[language]}</span>
          <h3 className="folder-panel-company">{entry.company}</h3>
          <p className="folder-panel-role">
            {entry.role[language]}
            {entry.client && <>, {entry.client[language]}</>}
            <span className="entry-card-location"> · {entry.location[language]}</span>
          </p>

          <ul className="chip-row" aria-label="Stack">
            {entry.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <ul className="folder-panel-bullets">
            {entry.bullets[language].map((bullet, i) => (
              <li key={i}>
                <Reveal delay={i * 60}>{bullet}</Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div className="folder-panel-graphic dot-field" aria-hidden="true" />
      </div>
    </div>
  );
};
