import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
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
        <p>Thanks{name ? `, ${name}` : ''} — we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-field">
        Name
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="contact-form-field">
        Email
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="contact-form-field">
        Message
        <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit" className="contact-form-submit">
        Send Message
      </button>
    </form>
  );
};
