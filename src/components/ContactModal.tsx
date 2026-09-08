import React from 'react';
import { Modal } from './Modal';
import { ContactForm } from './ContactForm';
import { useContactModal } from './ContactModalContext';
import { useLanguage } from '../i18n/LanguageContext';
import { strings } from '../i18n/strings';

export const ContactModal: React.FC = () => {
  const { isOpen, close } = useContactModal();
  const { language } = useLanguage();

  return (
    <Modal isOpen={isOpen} onClose={close} title={strings[language].contact.modalTitle}>
      <ContactForm />
    </Modal>
  );
};
