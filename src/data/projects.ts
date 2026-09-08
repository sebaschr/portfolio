import type { Localized } from './types';
import { timeline, type TimelineEntry } from './experience';

const findEntry = (id: string): TimelineEntry => {
  const entry = timeline.find((item) => item.id === id);
  if (!entry) throw new Error(`Missing timeline entry: ${id}`);
  return entry;
};

// The lead entry. Gets the DRAGONFRUIT/LUMERA hero treatment.
export const featuredProject = findEntry('safety-mgmt');

export const featuredProjectHero = {
  wordmarkLines: ['SAFETY MGMT', 'PLATFORM'],
  tagline: {
    en: 'Multi-tenant SaaS. Built end to end.',
    es: 'SaaS multi-tenant. Construido de punta a punta.',
  } satisfies Localized,
};

export const projectsIntro: Localized = {
  en: 'No screenshots here. The work speaks in type, not in mockups.',
  es: 'Sin capturas de pantalla. El trabajo habla en tipografía, no en mockups.',
};

export const projectsLabels = {
  whatItDoes: { en: 'What It Does', es: 'Qué Hace' } satisfies Localized,
  whatItDoesIntro: {
    en: 'A safety and compliance platform built for consulting firms that manage multiple client companies, contractors, and job sites at once. One login, every workspace, permits tracked from request to sign-off.',
    es: 'Una plataforma de seguridad y cumplimiento para firmas de consultoría que gestionan varias empresas cliente, contratistas y sitios de trabajo a la vez. Un solo login, cada workspace, permisos rastreados desde la solicitud hasta el cierre.',
  } satisfies Localized,
  moreWork: {
    en: 'The rest of my work, at Granicus, viaPeople, Konrad, and Solasystem, is on the experience page.',
    es: 'El resto de mi trabajo, en Granicus, viaPeople, Konrad y Solasystem, está en la página de experiencia.',
  } satisfies Localized,
  seeExperience: { en: 'See Full Experience', es: 'Ver Experiencia Completa' } satisfies Localized,
  marqueeIntro: {
    en: 'TEXT ONLY ✦ NO SCREENSHOTS ✦ TYPE DOES THE WORK ✦',
    es: 'SOLO TEXTO ✦ SIN CAPTURAS ✦ LA TIPOGRAFÍA HABLA ✦',
  } satisfies Localized,
};
