import type { Localized } from './types';

export const homeIntro: Localized = {
  en: 'rojomasrojo is a small studio. Frontend engineering, product design, brand systems. We build the thing, not the deck about the thing.',
  es: 'rojomasrojo es un estudio pequeño. Ingeniería frontend, diseño de producto, sistemas de marca. Construimos la cosa, no el deck sobre la cosa.',
};

export type CollectionTile = {
  id: string;
  label: Localized;
  caption: Localized;
  variant: 'dots' | 'gradient' | 'grain' | 'stripes';
};

export const collectionTiles: CollectionTile[] = [
  {
    id: 'design',
    label: { en: 'DESIGN', es: 'DISEÑO' },
    caption: { en: 'Interfaces people actually want to use.', es: 'Interfaces que la gente sí quiere usar.' },
    variant: 'dots',
  },
  {
    id: 'code',
    label: { en: 'CODE', es: 'CÓDIGO' },
    caption: { en: 'TypeScript, tested, built to last.', es: 'TypeScript, testeado, hecho para durar.' },
    variant: 'gradient',
  },
  {
    id: 'ship',
    label: { en: 'SHIP', es: 'LANZAR' },
    caption: { en: 'Production, not a prototype folder.', es: 'Producción, no una carpeta de prototipos.' },
    variant: 'grain',
  },
  {
    id: 'scale',
    label: { en: 'SCALE', es: 'ESCALAR' },
    caption: { en: 'Multi-tenant, multi-language, ready to grow.', es: 'Multi-tenant, multi-idioma, listo para crecer.' },
    variant: 'stripes',
  },
];

export const redBanner = {
  title: {
    en: ['IF IT', "DOESN'T SHIP,", "IT DOESN'T", 'EXIST.'],
    es: ['SI NO SE', 'LANZA,', 'NO', 'EXISTE.'],
  },
  subtitle: {
    en: 'Every project here is live. Not a Figma file. Not a pitch.',
    es: 'Cada proyecto aquí está en vivo. No es un archivo de Figma. No es un pitch.',
  } satisfies Localized,
};

export const previewSection = {
  eyebrow: { en: 'The Work', es: 'El Trabajo' } satisfies Localized,
  word: { en: 'WORK', es: 'TRABAJO' } satisfies Localized,
  lead: {
    en: 'Five years, four companies, projects that shipped.',
    es: 'Cinco años, cuatro empresas, proyectos que se lanzaron.',
  } satisfies Localized,
  items: [
    {
      id: 'safety-mgmt',
      name: 'Safety Mgmt Platform',
      blurb: { en: 'Multi-tenant safety SaaS.', es: 'SaaS de seguridad multi-tenant.' } satisfies Localized,
      href: '/projects',
    },
    {
      id: 'granicus',
      name: 'Granicus',
      blurb: { en: 'Government sector UI.', es: 'UI para el sector gobierno.' } satisfies Localized,
      href: '/experience',
    },
    {
      id: 'viapeople',
      name: 'viaPeople',
      blurb: { en: 'AI analytics, Vue to TypeScript.', es: 'Analítica con IA, de Vue a TypeScript.' } satisfies Localized,
      href: '/experience',
    },
    {
      id: 'konrad',
      name: 'Konrad',
      blurb: { en: 'Banking and transportation.', es: 'Banca y transporte.' } satisfies Localized,
      href: '/experience',
    },
    {
      id: 'solasystem',
      name: 'Solasystem',
      blurb: { en: 'Solana blockchain frontend.', es: 'Frontend blockchain en Solana.' } satisfies Localized,
      href: '/experience',
    },
  ],
  seeProjects: { en: 'See All Projects', es: 'Ver Todos Los Proyectos' } satisfies Localized,
  seeExperience: { en: 'See Full Experience', es: 'Ver Experiencia Completa' } satisfies Localized,
};

export const closingStatement: Localized = {
  en: 'Good work looks obvious once it ships. Getting there is the hard part. That\'s what we do.',
  es: 'El buen trabajo se ve obvio una vez que se lanza. Llegar ahí es la parte difícil. Eso es lo que hacemos.',
};
