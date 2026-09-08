import type { Localized } from './types';

export const homeIntro: Localized = {
  en: 'Digital design and development, start to finish. Clear interfaces, solid code, products that work.',
  es: 'Diseño y desarrollo digital, de principio a fin. Interfaces claras, código sólido, productos que funcionan.',
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
    id: 'seo',
    label: { en: 'SEO', es: 'SEO' },
    caption: {
      en: 'Meta tags, structured data, sites Google actually finds.',
      es: 'Meta tags, datos estructurados, sitios que Google sí encuentra.',
    },
    variant: 'grain',
  },
  {
    id: 'maintenance',
    label: { en: 'MAINTENANCE', es: 'MANTENIMIENTO' },
    caption: {
      en: 'Updates, fixes, a site that keeps working.',
      es: 'Actualizaciones, fixes, un sitio que sigue funcionando.',
    },
    variant: 'stripes',
  },
];

export const manifesto = {
  line1: { en: "The details aren't decoration,", es: 'Los detalles no son decoración,' } satisfies Localized,
  line2: { en: "they're the product.", es: 'son el producto.' } satisfies Localized,
};

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
    en: "Before founding rojomasrojo, I spent five years as an employee at Granicus, viaPeople, and Konrad: banking, transportation, government, enterprise SaaS. Today I'm building my own project: a multi-tenant safety platform, end to end.",
    es: 'Antes de fundar rojomasrojo, trabajé cinco años como empleado en Granicus, viaPeople y Konrad: banca, transporte, gobierno, SaaS enterprise. Hoy construyo mi propio proyecto: una plataforma de seguridad multi-tenant, de punta a punta.',
  } satisfies Localized,
  featured: {
    id: 'safety-mgmt',
    name: 'Safety Management Platform',
    blurb: {
      en: 'Multi-tenant safety and compliance SaaS. RBAC, work-permit workflows, QR worker badges, bilingual UI. Built solo, end to end.',
      es: 'SaaS de seguridad y cumplimiento multi-tenant. RBAC, workflows de permisos de trabajo, badges QR, UI bilingüe. Construido en solitario, de punta a punta.',
    } satisfies Localized,
    href: '/projects',
  },
  items: [
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
