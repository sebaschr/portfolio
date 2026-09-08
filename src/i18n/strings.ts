import type { Language } from './LanguageContext';

type Dict = {
  nav: {
    home: string;
    projects: string;
    experience: string;
    about: string;
    contact: string;
  };
  contact: {
    modalTitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    successPrefix: string;
    successSuffix: string;
  };
  fab: {
    open: string;
    close: string;
    contact: string;
    whatsapp: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    marquee: string;
  };
  pages: {
    projectsLabel: string;
    experienceLabel: string;
  };
  error: {
    title: string;
  };
};

export const strings: Record<Language, Dict> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    contact: {
      modalTitle: 'Hablemos',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar',
      successPrefix: 'Recibido',
      successSuffix: 'Te contactamos pronto.',
    },
    fab: {
      open: 'Contactar',
      close: 'Cerrar',
      contact: 'Formulario de contacto',
      whatsapp: 'WhatsApp',
    },
    home: {
      heroTitle: 'CÓDIGO ROJO.',
      heroSubtitle: 'rojomasrojo · Estudio de Diseño y Desarrollo Digital',
      heroCta: 'Hablemos',
      marquee: 'DISEÑO ✦ CÓDIGO ✦ LANZAMIENTO ✦ REPITE ✦',
    },
    pages: {
      projectsLabel: 'Proyectos',
      experienceLabel: 'Experiencia',
    },
    error: {
      title: 'no sé dónde estás',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
    },
    contact: {
      modalTitle: 'Talk To Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      successPrefix: 'Got it',
      successSuffix: "We'll be in touch soon.",
    },
    fab: {
      open: 'Contact',
      close: 'Close',
      contact: 'Contact form',
      whatsapp: 'WhatsApp',
    },
    home: {
      heroTitle: 'CODE RED.',
      heroSubtitle: 'rojomasrojo · Digital Design & Development Studio',
      heroCta: 'Talk To Us',
      marquee: 'DESIGN ✦ CODE ✦ LAUNCH ✦ REPEAT ✦',
    },
    pages: {
      projectsLabel: 'Projects',
      experienceLabel: 'Experience',
    },
    error: {
      title: "idk where you are man",
    },
  },
};
