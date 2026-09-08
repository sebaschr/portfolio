import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { reservationLabels } from '../data/restaurant';

export const RestaurantReservations = () => {
  const { language } = useLanguage();
  const t = reservationLabels;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only mockup, same as the main site's contact form: no backend here.
    setSubmitted(true);
  };

  return (
    <section className="rest-section">
      <Reveal>
        <h1 className="rest-section-title">{t.title[language]}</h1>
      </Reveal>

      <Reveal delay={80}>
        {submitted ? (
          <p className="rest-reservation-success">{t.success[language]}</p>
        ) : (
          <form className="rest-reservation-form" onSubmit={handleSubmit}>
            <label>
              {t.name[language]}
              <input type="text" required />
            </label>
            <label>
              {t.email[language]}
              <input type="email" required />
            </label>
            <div className="rest-reservation-row">
              <label>
                {t.date[language]}
                <input type="date" required />
              </label>
              <label>
                {t.time[language]}
                <input type="time" required />
              </label>
              <label>
                {t.guests[language]}
                <input type="number" min={1} max={20} defaultValue={2} required />
              </label>
            </div>
            <button type="submit" className="rest-btn rest-btn--primary">
              {t.submit[language]}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
};
