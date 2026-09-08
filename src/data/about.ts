import type { Localized } from './types';

export const aboutLabels = {
  eyebrow: { en: 'About', es: 'Nosotros' } satisfies Localized,
  wordmark: 'ROJOMASROJO',
  marquee: {
    en: 'NO ACCOUNT MANAGERS ✦ NO DECKS ✦ JUST WORK ✦',
    es: 'SIN ACCOUNT MANAGERS ✦ SIN DECKS ✦ SOLO TRABAJO ✦',
  } satisfies Localized,
};

export const aboutLead: Localized = {
  en: 'A small studio that designs and builds digital products. No account managers. No decks. Code and design, from one desk to your screen.',
  es: 'Un estudio pequeño que diseña y construye productos digitales. Sin account managers. Sin decks. Código y diseño, de un escritorio a tu pantalla.',
};

export const aboutSections: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'What We Are', es: 'Qué Somos' },
    text: {
      en: "Frontend engineering, product design, brand systems. We work close to the code, not just the mockups. If it doesn't run in a browser, it isn't done.",
      es: 'Ingeniería frontend, diseño de producto, sistemas de marca. Trabajamos cerca del código, no solo de los mockups. Si no corre en un navegador, no está terminado.',
    },
  },
  {
    title: { en: 'How We Work', es: 'Cómo Trabajamos' },
    text: {
      en: 'Design and development happen together, not in sequence. Short loops, real feedback, fewer meetings. AI tools handle the repetitive work so we spend our time on the decisions that matter.',
      es: 'Diseño y desarrollo pasan juntos, no en secuencia. Loops cortos, feedback real, menos reuniones. Las herramientas de IA hacen el trabajo repetitivo para que nosotros nos enfoquemos en las decisiones que importan.',
    },
  },
  {
    title: { en: 'The Name', es: 'El Nombre' },
    text: {
      en: 'Red on red. No dilution, no middle ground. It is the way we work: direct, or not at all.',
      es: 'Rojo sobre rojo. Sin dilución, sin punto medio. Así trabajamos: directo, o nada.',
    },
  },
];

export const aboutValues: Localized[] = [
  { en: 'Direct', es: 'Directo' },
  { en: 'Fast', es: 'Rápido' },
  { en: 'No Fluff', es: 'Sin Relleno' },
  { en: 'Built To Ship', es: 'Hecho Para Lanzar' },
  { en: 'Accessible By Default', es: 'Accesible Por Defecto' },
];
