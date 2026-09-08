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
  en: "I'm Sebastian Chacon. rojomasrojo is the name I build under: not a separate company, not a team. Every case study on /projects and every job on /experience is my own work.",
  es: 'Soy Sebastian Chacon. rojomasrojo es el nombre bajo el que construyo: no es una empresa aparte, no es un equipo. Cada caso de estudio en /proyectos y cada trabajo en /experiencia es mío.',
};

export const aboutSections: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'What I Do', es: 'Qué Hago' },
    text: {
      en: "Frontend engineering, product design, brand systems. I work close to the code, not just the mockups. If it doesn't run in a browser, it isn't done.",
      es: 'Ingeniería frontend, diseño de producto, sistemas de marca. Trabajo cerca del código, no solo de los mockups. Si no corre en un navegador, no está terminado.',
    },
  },
  {
    title: { en: 'How I Work', es: 'Cómo Trabajo' },
    text: {
      en: 'Design and development happen together, not in sequence. Short loops, real feedback, fewer meetings. AI tools handle the repetitive work so I spend my time on the decisions that matter.',
      es: 'Diseño y desarrollo pasan juntos, no en secuencia. Loops cortos, feedback real, menos reuniones. Las herramientas de IA hacen el trabajo repetitivo para que yo me enfoque en las decisiones que importan.',
    },
  },
  {
    title: { en: 'The Name', es: 'El Nombre' },
    text: {
      en: 'Red on red. No dilution, no middle ground. It is the way I work: direct, or not at all.',
      es: 'Rojo sobre rojo. Sin dilución, sin punto medio. Así trabajo: directo, o nada.',
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
