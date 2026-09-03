import React from 'react';
import { Modal } from './Modal';
import { ContactForm } from './ContactForm';
import { useContactModal } from './ContactModalContext';

export const ContactModal: React.FC = () => {
  const { isOpen, close } = useContactModal();

  return (
    <Modal isOpen={isOpen} onClose={close} title="Get In Touch">
      <ContactForm />
    </Modal>
  );
};
