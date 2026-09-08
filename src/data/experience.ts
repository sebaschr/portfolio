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
        'A multi-tenant SaaS that keeps companies, contractors, and job sites in one place.',
        'Role-based access across five levels, from super admin down to individual workers.',
        'Work permits move through a hierarchical approval flow, from request to sign-off.',
        'QR badges give each worker a public profile they can scan on site.',
        'A 5-step batch registration wizard catches duplicate entries against a CSV automatically.',
        'Bilingual from day one, built around a centralized strings hook.',
        'A 1600-line component that used to do everything is now 8 focused modules.',
        'Built with Cursor, Claude, and subagents handling scaffolding, refactors, and test generation.',
      ],
      es: [
        'Un SaaS multi-tenant que mantiene empresas, contratistas y sitios de trabajo en un solo lugar.',
        'Control de acceso por rol en cinco niveles, desde super admin hasta cada trabajador.',
        'Los permisos de trabajo pasan por un flujo de aprobación jerárquico, de la solicitud al cierre.',
        'Los badges QR le dan a cada trabajador un perfil público que se puede escanear en sitio.',
        'Un wizard de registro batch en 5 pasos detecta duplicados contra un CSV automáticamente.',
        'Bilingüe desde el día uno, construido alrededor de un hook centralizado de strings.',
        'Un componente de 1600 líneas que antes hacía de todo ahora son 8 módulos enfocados.',
        'Construido con Cursor, Claude y subagentes a cargo del scaffolding, los refactors y la generación de tests.',
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
        'Pixel-perfect UIs built from Figma, in React and TypeScript with modular CSS.',
        'Production components built with WCAG accessibility and cross-browser support in mind.',
        'Cursor and Claude are part of the daily workflow, from delivery to test coverage to automation.',
        'Jest coverage across UI components and interaction flows.',
        'Peer review runs both ways: giving feedback and taking it.',
        "Support on the MongoDB backend, plus documentation that actually gets updated.",
        'Recognized as a fast, reliable contributor within the first few months.',
      ],
      es: [
        'UIs pixel-perfect construidas desde Figma, en React y TypeScript con CSS modular.',
        'Componentes de producción construidos pensando en accesibilidad WCAG y soporte cross-browser.',
        'Cursor y Claude son parte del flujo diario, desde la entrega hasta la cobertura de tests y la automatización.',
        'Cobertura de Jest en componentes de UI y flujos de interacción.',
        'La revisión de código va en ambas direcciones: dar feedback y recibirlo.',
        'Soporte en el backend de MongoDB, además de documentación que sí se mantiene actualizada.',
        'Reconocido como un contribuidor rápido y confiable desde los primeros meses.',
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
        'Owned frontend, backend, databases, AWS pipelines, and security, end to end.',
        'Pitched and led greenfield projects all the way to production, sold to enterprise clients.',
        'Led the migration from Vue.js to TypeScript for better maintainability, type safety, and structure.',
        "Designed the frontend architecture for an AI-powered analytics tool, integrating OpenAI's APIs.",
        'Modernized mobile-first layouts and built custom dark and light theming.',
        'Pushed accessibility and performance improvements across multiple products.',
      ],
      es: [
        'A cargo de frontend, backend, bases de datos, pipelines de AWS y seguridad, de punta a punta.',
        'Propuse y lideré proyectos greenfield hasta producción, vendidos a clientes enterprise.',
        'Lideré la migración de Vue.js a TypeScript para mejorar mantenibilidad, type safety y estructura.',
        'Diseñé la arquitectura frontend de una herramienta de analítica con IA, integrando las APIs de OpenAI.',
        'Modernicé layouts mobile-first y construí theming a la medida para modo claro y oscuro.',
        'Impulsé mejoras de accesibilidad y performance en varios productos.',
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
        'Built banking and transportation web apps with React and AEM.',
        'Integrated Java backends with clean, user-focused frontends.',
        "Led UI bug fixes and drove the team's adoption of TypeScript.",
      ],
      es: [
        'Construí apps web de banca y transporte con React y AEM.',
        'Integré backends en Java con frontends limpios y centrados en el usuario.',
        'Lideré fixes de UI e impulsé la adopción de TypeScript en el equipo.',
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
        'Built reusable React and Chakra UI components for Solana blockchain projects.',
        'Frontend only; the blockchain logic stayed with the core team.',
        'JS, Node, SQL, on a fast-paced remote team.',
      ],
      es: [
        'Construí componentes reutilizables en React y Chakra UI para proyectos blockchain en Solana.',
        'Solo frontend; la lógica blockchain se quedó con el equipo core.',
        'JS, Node, SQL, en un equipo remoto a toda velocidad.',
      ],
    },
  },
];

export const experienceIntro: Localized = {
  en: "I'm Sebastian Chacon. For the past five years I've been building accessible, scalable React and TypeScript apps for banking, transportation, government, and enterprise SaaS teams. When it counts, I go full-stack too, with Node.js, MongoDB, and AWS. I've led TypeScript migrations, built greenfield products from scratch, and shipped AI-powered tools to production. Cursor and Claude are part of how I work, every day.",
  es: 'Soy Sebastian Chacon. En los últimos cinco años he construido apps React y TypeScript accesibles y escalables para equipos de banca, transporte, gobierno y SaaS enterprise. Cuando hace falta, también voy full-stack, con Node.js, MongoDB y AWS. He liderado migraciones a TypeScript, construido productos greenfield desde cero y lanzado herramientas con IA a producción. Cursor y Claude son parte de cómo trabajo, todos los días.',
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
