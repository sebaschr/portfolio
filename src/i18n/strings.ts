import type { Language } from './LanguageContext';

type Dict = {
  nav: {
    home: string;
    projects: string;
    experience: string;
    about: string;
    contact: string;
  };
  footer: {
    upTop: string;
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
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    heroCta: string;
    marquee: string;
    whatWeDoEyebrow: string;
    whatWeDoTitle: string;
    whatWeDoText: string;
    cardWebDesign: string;
    cardDevelopment: string;
    cardBranding: string;
    ctaTitle: string;
    ctaSubtext: string;
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
    footer: {
      upTop: 'Arriba',
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
    home: {
      heroTitle: 'CONSTRUIMOS. LANZAMOS.',
      heroSubtitle: 'rojomasrojo · Estudio de Diseño y Desarrollo Digital',
      heroDescription:
        'Sin pitch decks. Sin relleno. Diseñamos, construimos, lanzamos. Ese es todo el proceso.',
      heroCta: 'Hablemos',
      marquee: 'SIN RELLENO ✦ SIN EXCUSAS ✦ LANZAMOS ✦ CONSTRUIMOS ✦',
      whatWeDoEyebrow: 'Qué Hacemos',
      whatWeDoTitle: 'Diseñar. Construir. Lanzar.',
      whatWeDoText:
        'De identidad de marca a producto full-stack. Un solo equipo, de principio a fin. Sin traspasos, sin excusas.',
      cardWebDesign: 'Diseño Web',
      cardDevelopment: 'Desarrollo',
      cardBranding: 'Branding',
      ctaTitle: 'Hagamos Algo Que Grite.',
      ctaSubtext: 'Hablemos',
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
    footer: {
      upTop: 'Up Top',
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
    home: {
      heroTitle: 'WE BUILD. WE SHIP.',
      heroSubtitle: 'rojomasrojo · Digital Design & Development Studio',
      heroDescription:
        "No pitch decks. No fluff. We design it, we build it, we ship it. That's the whole process.",
      heroCta: 'Talk To Us',
      marquee: 'NO FLUFF ✦ NO FILLER ✦ WE SHIP ✦ WE BUILD ✦',
      whatWeDoEyebrow: 'What We Do',
      whatWeDoTitle: 'Design. Build. Launch.',
      whatWeDoText:
        'Brand identity to full-stack builds. One team, start to finish. No handoffs, no excuses.',
      cardWebDesign: 'Web Design',
      cardDevelopment: 'Development',
      cardBranding: 'Branding',
      ctaTitle: "Let's Build Something Loud.",
      ctaSubtext: 'Talk to us',
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
