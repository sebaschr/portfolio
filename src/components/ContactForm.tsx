import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const t = strings[language].contact;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — this only confirms locally.
    // TODO: replace with a real submission (API call / email service).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form-success">
        <p>
          {t.successPrefix}
          {name ? `, ${name}` : ''}. {t.successSuffix}
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-field">
        {t.name}
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="contact-form-field">
        {t.email}
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="contact-form-field">
        {t.message}
        <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit" className="contact-form-submit">
        {t.send}
      </button>
    </form>
  );
};
