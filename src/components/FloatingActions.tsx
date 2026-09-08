import React, { useState } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { useContactModal } from './ContactModalContext';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

const WHATSAPP_URL = 'https://wa.me/50686784592';

export const FloatingActions: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const t = strings[language].fab;

  const handleContact = () => {
    openContact();
    setOpen(false);
  };

  // The nested restaurant demo has its own header nav (which this fixed
  // top-right button was overlapping) and its own AI concierge widget as
  // the contact-equivalent, so skip rendering rojomasrojo's own FAB there.
  if (pathname.startsWith('/lab/restaurant')) return null;

  return (
    <div className={clsx('fab', { 'fab--open': open })}>
      <div className="fab-actions">
        <button type="button" className="fab-action" onClick={handleContact} aria-label={t.contact}>
          <MailIcon />
        </button>
        <a
          className="fab-action"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.whatsapp}
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon />
        </a>
      </div>

      <button
        type="button"
        className="fab-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

const PlusIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const MailIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20z"
    />
    <path
      fill="currentColor"
      d="M9 7.5c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3l-2-1c-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.4.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.8-1.4-1.7-1.5-2-.1-.3 0-.4.2-.6l.5-.6c.1-.2.2-.4.1-.6L9 7.5z"
    />
  </svg>
);
