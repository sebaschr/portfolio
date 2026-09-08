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
  en: "I'm Sebastian Chacon, a frontend engineer. rojomasrojo is the name for my independent work. Everything on this site, from the projects to the experience, is mine.",
  es: 'Soy Sebastian Chacon, ingeniero frontend. rojomasrojo es el nombre de mi trabajo independiente. Todo en este sitio, desde los proyectos hasta la experiencia, es mío.',
};

export const aboutSections: { title: Localized; text: Localized }[] = [
  {
    title: { en: 'What I Do', es: 'Qué Hago' },
    text: {
      en: 'I do frontend engineering, product design, and brand systems. I work directly with code, not just Figma files.',
      es: 'Hago ingeniería frontend, diseño de producto y sistemas de marca. Trabajo directamente con el código, no solo con diseños en Figma.',
    },
  },
  {
    title: { en: 'How I Work', es: 'Cómo Trabajo' },
    text: {
      en: 'Design and development happen together, not separately. I use AI tools for the repetitive work and focus my own time on the decisions that matter.',
      es: 'Diseño y desarrollo van juntos, no por separado. Uso herramientas de IA para el trabajo repetitivo y me enfoco en las decisiones importantes.',
    },
  },
  {
    title: { en: 'The Name', es: 'El Nombre' },
    text: {
      en: 'The name comes from the color: red on red. Simple and direct, the way I like to work.',
      es: 'El nombre viene del color: rojo sobre rojo. Simple y directo, como me gusta trabajar.',
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
