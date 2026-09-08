import type { Localized, LocalizedList } from './types';

export type TimelineEntry = {
  id: string;
  company: string;
  client?: Localized;
  role: Localized;
  dates: Localized;
  location: Localized;
  stack: string[];
  bullets: LocalizedList;
  independent?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    id: 'safety-mgmt',
    company: 'Safety Management Platform',
    client: { en: 'Safety Consulting Firm', es: 'Firma de Consultoría en Seguridad' },
    role: { en: 'Lead Full-Stack Engineer', es: 'Ingeniero Full-Stack Líder' },
    dates: { en: '2026 – Present', es: '2026 – Presente' },
    location: { en: 'Remote', es: 'Remoto' },
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
    independent: true,
    bullets: {
      en: [
        'Multi-tenant SaaS. Companies, contractors, sites, workspaces.',
        'RBAC across five roles, super admin to worker.',
        'Work permits: create, approve, execute. Hierarchical, no shortcuts.',
        'QR badges. Public worker profiles.',
        '5-step batch registration wizard. CSV duplicate detection built in.',
        'Bilingual UI from day one. A centralized strings hook.',
        '1600-line component refactored into 8 modular units.',
        'Built with an AI-agent workflow (Cursor, Claude, subagents) for scaffolding, refactors, tests.',
      ],
      es: [
        'SaaS multi-tenant. Empresas, contratistas, sitios, workspaces.',
        'RBAC en cinco roles, de super admin a worker.',
        'Permisos de trabajo: creación, aprobación, ejecución. Jerárquico, sin atajos.',
        'Badges QR. Perfiles públicos de trabajadores.',
        'Wizard de registro batch en 5 pasos. Detección de duplicados por CSV integrada.',
        'UI bilingüe desde el día uno. Un hook centralizado de strings.',
        'Componente de 1600 líneas refactorizado en 8 unidades modulares.',
        'Construido con workflow de agentes IA (Cursor, Claude, subagentes) para scaffolding, refactors y tests.',
      ],
    },
  },
  {
    id: 'granicus',
    company: 'Granicus',
    role: { en: 'Web Developer', es: 'Desarrollador Web' },
    dates: { en: 'Mar 2025 – Present', es: 'Mar 2025 – Presente' },
    location: { en: 'Remote (Costa Rica)', es: 'Remoto (Costa Rica)' },
    stack: ['React', 'TypeScript', 'Jest', 'MongoDB'],
    bullets: {
      en: [
        'Pixel-perfect UIs from Figma. React, TypeScript, modular CSS.',
        'Production components built for WCAG accessibility and cross-browser support.',
        'Cursor and Claude, daily. Subagent workflows for delivery, tests, automation.',
        'Jest coverage on UI components and interaction flows.',
        'Peer review both ways. Feedback given, feedback taken.',
        "MongoDB backend support. Docs that don't rot.",
        'Recognized as a fast, reliable contributor in month one.',
      ],
      es: [
        'UIs pixel-perfect desde Figma. React, TypeScript, CSS modular.',
        'Componentes de producción construidos para accesibilidad WCAG y soporte cross-browser.',
        'Cursor y Claude, todos los días. Workflows con subagentes para entrega, tests y automatización.',
        'Cobertura Jest en componentes UI y flujos de interacción.',
        'Revisión de código en ambas direcciones. Feedback dado, feedback recibido.',
        'Soporte de backend en MongoDB. Documentación que no se pudre.',
        'Reconocido como contribuidor rápido y confiable desde el primer mes.',
      ],
    },
  },
  {
    id: 'viapeople',
    company: 'viaPeople, Inc.',
    role: { en: 'Frontend Engineer & Designer', es: 'Ingeniero Frontend y Diseñador' },
    dates: { en: 'Oct 2023 – Feb 2025', es: 'Oct 2023 – Feb 2025' },
    location: { en: 'Remote', es: 'Remoto' },
    stack: ['Vue.js', 'TypeScript', 'AWS', 'OpenAI API'],
    bullets: {
      en: [
        'Owned frontend, backend, databases, AWS pipelines, security. End to end.',
        'Pitched and led greenfield projects straight to production. Sold to enterprise clients.',
        'Led the Vue.js to TypeScript migration. Maintainability, type safety, structure.',
        'Designed the frontend architecture for an AI-powered analytics tool. OpenAI APIs integrated.',
        'Modernized mobile-first layouts. Built custom dark/light theming.',
        'Pushed accessibility and performance up, across multiple products.',
      ],
      es: [
        'A cargo de frontend, backend, bases de datos, pipelines de AWS y seguridad. De punta a punta.',
        'Propuse y lideré proyectos greenfield hasta producción. Vendidos a clientes enterprise.',
        'Lideré la migración de Vue.js a TypeScript. Mantenibilidad, type safety, estructura.',
        'Diseñé la arquitectura frontend de una herramienta de analítica con IA. APIs de OpenAI integradas.',
        'Modernicé layouts mobile-first. Theming custom dark/light.',
        'Subí accesibilidad y performance en múltiples productos.',
      ],
    },
  },
  {
    id: 'konrad',
    company: 'Konrad',
    role: { en: 'Software Developer', es: 'Desarrollador de Software' },
    dates: { en: 'Sep 2021 – May 2023', es: 'Sep 2021 – May 2023' },
    location: { en: 'San Jose, Costa Rica', es: 'San José, Costa Rica' },
    stack: ['React', 'AEM', 'Java'],
    bullets: {
      en: [
        'Banking and transportation web apps. React and AEM.',
        'Integrated Java backends with clean, user-focused frontends.',
        'Led UI bug fixes. Drove TypeScript adoption.',
      ],
      es: [
        'Apps web de banca y transporte. React y AEM.',
        'Integré backends en Java con frontends limpios y centrados en el usuario.',
        'Lideré fixes de UI. Impulsé la adopción de TypeScript.',
      ],
    },
  },
  {
    id: 'solasystem',
    company: 'Solasystem',
    role: { en: 'Frontend Developer (Contract)', es: 'Desarrollador Frontend (Contrato)' },
    dates: { en: 'Mar – Apr 2021', es: 'Mar – Abr 2021' },
    location: { en: 'Remote (Singapore)', es: 'Remoto (Singapur)' },
    stack: ['React', 'Chakra UI', 'Node.js', 'SQL'],
    bullets: {
      en: [
        'Reusable React and Chakra UI components for Solana blockchain projects.',
        'Frontend only. Blockchain logic stayed with the core team.',
        'JS, Node, SQL. Fast-paced remote team.',
      ],
      es: [
        'Componentes reutilizables en React y Chakra UI para proyectos blockchain en Solana.',
        'Solo frontend. La lógica blockchain quedó con el equipo core.',
        'JS, Node, SQL. Equipo remoto a toda velocidad.',
      ],
    },
  },
];

export const experienceIntro: Localized = {
  en: '5+ years building accessible, scalable React and TypeScript apps: banking, transportation, enterprise SaaS, government. Full-stack when it counts: Node.js, MongoDB, AWS. TypeScript migrations, greenfield builds, AI tools shipped to production. Cursor and Claude, every day.',
  es: '5+ años construyendo apps React y TypeScript accesibles y escalables: banca, transporte, SaaS enterprise, gobierno. Full-stack cuando importa: Node.js, MongoDB, AWS. Migraciones a TypeScript, productos greenfield, herramientas de IA en producción. Cursor y Claude, todos los días.',
};

export const skillGroups: { title: Localized; skills: string[] }[] = [
  {
    title: { en: 'Frontend', es: 'Frontend' },
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Vue.js', 'HTML', 'CSS', 'Chakra UI'],
  },
  {
    title: { en: 'Cloud & Backend', es: 'Cloud y Backend' },
    skills: ['AWS', 'Node.js', 'MongoDB', 'SQL', 'Java', 'Python'],
  },
  {
    title: { en: 'Testing', es: 'Testing' },
    skills: ['Jest', 'Automated UI Testing', 'AI-Assisted Test Generation'],
  },
  {
    title: { en: 'AI Tooling', es: 'Herramientas de IA' },
    skills: ['Cursor', 'Claude', 'Subagent Workflows', 'OpenAI APIs'],
  },
  {
    title: { en: 'UX & UI', es: 'UX y UI' },
    skills: ['Responsive / Mobile-First Design', 'Accessibility (WCAG)', 'Figma'],
  },
  {
    title: { en: 'Tools', es: 'Herramientas' },
    skills: ['Git', 'AEM', 'Chrome DevTools'],
  },
];

export const education: { school: string; program: Localized; period: Localized }[] = [
  {
    school: 'CENFOTEC',
    program: {
      en: 'B.S. Software Engineering (In Progress, GPA 91)',
      es: 'Ingeniería en Software (En Curso, GPA 91)',
    },
    period: { en: 'Current', es: 'Actual' },
  },
  {
    school: 'CENFOTEC',
    program: {
      en: 'Technical Degree, Web Development & Design, GPA 88',
      es: 'Técnico en Desarrollo y Diseño Web, GPA 88',
    },
    period: { en: 'Sept 2023', es: 'Sept 2023' },
  },
  {
    school: 'BrainStation',
    program: { en: 'Web Development Academy', es: 'Academia de Desarrollo Web' },
    period: { en: 'Jul 2021', es: 'Jul 2021' },
  },
];

export const languages: { name: Localized; level: Localized }[] = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  { name: { en: 'English', es: 'Inglés' }, level: { en: 'Professional Proficiency', es: 'Nivel Profesional' } },
];

export const experienceLabels = {
  work: { en: 'Work', es: 'Trabajo' } satisfies Localized,
  skills: { en: 'Skills', es: 'Habilidades' } satisfies Localized,
  educationAndLanguages: { en: 'Education & Languages', es: 'Educación e Idiomas' } satisfies Localized,
  marqueeIntro: {
    en: 'FIVE YEARS ✦ ZERO FLUFF ✦ SHIPPED IN PRODUCTION ✦',
    es: 'CINCO AÑOS ✦ CERO RELLENO ✦ EN PRODUCCIÓN ✦',
  } satisfies Localized,
};
