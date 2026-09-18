export type Language = "es" | "en";

export interface ProjectExperience {
  id: string;
  title: {
    es: string;
    en: string;
  };
  subtitle: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  highlights: {
    es: string[];
    en: string[];
  };
  technologies: string[];
}

export interface JobExperience {
  id: string;
  company: string;
  role: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  location: string;
  summary: {
    es: string;
    en: string;
  };
  projects: ProjectExperience[];
  technologies: string[];
}

export interface PersonalProject {
  id: string;
  name: string;
  badge: {
    es: string;
    en: string;
  };
  tagline: {
    es: string;
    en: string;
  };
  utility: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  features: {
    es: string[];
    en: string[];
  };
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SiteTechItem {
  name: string;
  category: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  badge: string;
}

export interface SkillCategory {
  title: {
    es: string;
    en: string;
  };
  iconName: string;
  skills: string[];
}

export interface ArchitectureNode {
  id: string;
  name: string;
  role: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  techs: string[];
  category: "frontend" | "api" | "cms" | "payment" | "cloud";
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Juan Camilo López Espitia",
    title: {
      es: "Fullstack Developer & Technical Lead",
      en: "Fullstack Developer & Technical Lead",
    },
    location: "Cali, Colombia",
    phone: "+57 316 243 8345",
    email: "juancamilolopez10a@gmail.com",
    linkedin: "https://linkedin.com/in/juan-camilo-lopez-espitia",
    github: "https://github.com/jc9218",
    whatsapp: "https://wa.me/573162438345",
    summary: {
      es: "Ingeniero de Sistemas con más de 10 años de experiencia en ingeniería de software, arquitectura web empresarial y liderazgo técnico en iniciativas de transformación digital. Especializado en el diseño y construcción de complejos ecosistemas modernos de comercio headless, plataformas CMS empresariales y arquitecturas desacopladas con Next.js, Ibexa DXP y Commerce Layer. Capacidad probada para liderar equipos multifuncionales (4-6 ingenieros), mitigar deuda técnica, alinear objetivos de negocio con software de alto rendimiento y desplegar canales transaccionales de pago de misión crítica para sistemas de alta disponibilidad y tráfico masivo.",
      en: "Systems Engineer with over 10 years of experience in software engineering, enterprise web architecture, and technical leadership for digital transformation initiatives. Specialized in the design and construction of complex modern headless commerce ecosystems, enterprise-grade CMS platforms, and decoupled architectures using Next.js, Ibexa DXP, and Commerce Layer. Proven ability to lead cross-functional engineering teams (4-6 developers), mitigate technical debt, align complex business goals with high-performing software design, and deploy mission-critical transactional checkout and payment pipelines for highly available, high-traffic systems.",
    },
  },

  metrics: [
    {
      value: "10+",
      label: {
        es: "Años de Experiencia",
        en: "Years of Experience",
      },
      detail: {
        es: "Arquitectura web empresarial y desarrollo full-stack",
        en: "Enterprise web architecture & full-stack engineering",
      },
    },
    {
      value: "4 - 6",
      label: {
        es: "Ingenieros Liderados",
        en: "Engineers Mentored / Led",
      },
      detail: {
        es: "Liderazgo técnico ágil y revisión rigurosa de código",
        en: "Agile tech lead, mentoring & rigorous code reviews",
      },
    },
    {
      value: "99.9%",
      label: {
        es: "Disponibilidad y Resiliencia",
        en: "Uptime & High Availability",
      },
      detail: {
        es: "Sistemas tolerantes a fallos bajo picos intensos de tráfico",
        en: "Fault-tolerant architectures under intense traffic peaks",
      },
    },
    {
      value: {
        es: "Miles",
        en: "Thousands",
      },
      label: {
        es: "Transacciones Concurrentes",
        en: "Concurrent Purchases Handled",
      },
      detail: {
        es: "Pipelines de checkout y pago masivo de ticketing",
        en: "Mission-critical checkout & ticketing payment pipelines",
      },
    },
  ],

  architectureShowcase: {
    title: {
      es: "Blueprint de Arquitectura Desacoplada",
      en: "Decoupled Architecture Blueprint",
    },
    subtitle: {
      es: "Diseño de soluciones escalables, modulares y de alto rendimiento que integran frontend moderno, orquestación de APIs, headless commerce y pasarelas de pago.",
      en: "Scalable, modular, high-performing solution design bridging modern frontend, API orchestration, headless commerce, and mission-critical payments.",
    },
    nodes: [
      {
        id: "frontend",
        name: "Next.js Edge & App Router",
        role: {
          es: "Capa de Presentación Desacoplada",
          en: "Decoupled Presentation Layer",
        },
        description: {
          es: "Renderizado híbrido (SSR/SSG/ISR), optimización de Core Web Vitals, caching granular en el Edge y experiencia de usuario fluida con TypeScript y Tailwind CSS.",
          en: "Hybrid rendering (SSR/SSG/ISR), Core Web Vitals optimization, Edge caching, and ultra-fluid user experience powered by TypeScript and Tailwind CSS.",
        },
        techs: ["Next.js", "React", "TypeScript", "Vercel Edge", "Tailwind CSS"],
        category: "frontend",
      },
      {
        id: "api-layer",
        name: "GraphQL & API Gateway Mesh",
        role: {
          es: "Orquestación e Integración de Microservicios",
          en: "Microservices Integration & Orchestration",
        },
        description: {
          es: "Unificación de múltiples fuentes de datos, catálogos en tiempo real, microservicios de inventario y endpoints RESTful desacoplados sin sobrecarga en el cliente.",
          en: "Single contract unification for third-party catalogs, real-time inventory synchronizations, and RESTful microservices with zero over-fetching.",
        },
        techs: ["GraphQL", "REST APIs", "Node.js", "Symfony Microservices"],
        category: "api",
      },
      {
        id: "headless-cms",
        name: "Ibexa DXP & Contentful",
        role: {
          es: "Motor de Contenido Headless y Experiencias Digitales",
          en: "Headless Content & Experience Engine",
        },
        description: {
          es: "Gestión de contenido estructurado omnicanal, personalización de experiencias corporativas y publicación desacoplada para audiencias globales.",
          en: "Omnichannel structured content management, enterprise digital experience personalization, and decoupled publishing for global audiences.",
        },
        techs: ["Ibexa DXP", "Contentful", "Headless CMS", "Decoupled Schemas"],
        category: "cms",
      },
      {
        id: "commerce-payments",
        name: "Commerce Layer & Critical Payments",
        role: {
          es: "Motor Transaccional y Checkout Masivo",
          en: "Transactional Engine & Mass-Scale Checkout",
        },
        description: {
          es: "Orquestación de checkout seguro, cálculo multidivisa, validación anti-fraude, webhooks de conciliación y tolerancia a fallos en venta masiva de ticketing.",
          en: "Secure checkout orchestration, multi-currency engine, anti-fraud validations, webhook reconciliation, and extreme fault tolerance for peak ticketing.",
        },
        techs: ["Commerce Layer", "Stripe / Gateways", "Idempotency", "PCI-DSS Best Practices"],
        category: "payment",
      },
      {
        id: "cloud-devops",
        name: "AWS & Vercel Cloud Infrastructure",
        role: {
          es: "Infraestructura Cloud, Contenedores y CI/CD",
          en: "Cloud Infrastructure, Containers & CI/CD",
        },
        description: {
          es: "Automatización integral de despliegues con GitHub Actions y GitLab CI/CD, clústeres Docker en AWS, servidores Linux optimizados y balanceo Nginx.",
          en: "End-to-end deployment automation via GitHub Actions & GitLab CI/CD, Dockerized services in AWS, Linux kernel tuning, and Nginx edge routing.",
        },
        techs: ["AWS (EC2, S3, RDS)", "Vercel", "Docker", "GitHub Actions", "GitLab CI/CD", "Nginx"],
        category: "cloud",
      },
    ] as ArchitectureNode[],
  },

  personalProjects: [
    {
      id: "kom-trainer",
      name: "KOM Trainer — AI Cycling Coach",
      badge: {
        es: "Proyecto Destacado • AI & Sports Tech",
        en: "Featured Project • AI & Sports Tech",
      },
      tagline: {
        es: "Entrenador personal de ciclismo con IA que analiza rendimiento fisiológico y prescribe entrenamientos adaptativos en tiempo real.",
        en: "AI-powered personal cycling coach analyzing physiological telemetry and prescribing adaptive training plans in real time.",
      },
      utility: {
        es: "Plataforma integral para ciclistas de ruta, gravel y MTB. Sincroniza automáticamente telemetría con Strava e Intervals.icu para computar el modelo Banister (Fitness CTL, Fatiga ATL, Forma TSB) y distribución de potencia Coggan (Z1–Z7, NP, IF, TSS). El motor de IA diagnostica el estado del atleta y prescribe entrenamientos adaptativos y sesiones de fuerza con regla de recuperación de 48h, publicando directamente en ciclocomputadores Garmin, Wahoo, Karoo y COROS.",
        en: "Comprehensive platform for road, gravel, and MTB cyclists. Synchronizes telemetry with Strava and Intervals.icu to compute the Banister impulse-response model (Fitness CTL, Fatigue ATL, Form TSB) and Coggan 7-zone power metrics (NP, IF, TSS). The AI engine diagnoses athlete status and prescribes adaptive workouts and RPE strength sessions with a 48h recovery guardrail, publishing directly to Garmin, Wahoo, Karoo, and COROS devices.",
      },
      description: {
        es: "Desarrollada con arquitectura moderna full-stack sobre Next.js 16 y PostgreSQL serverless. Integra mapas de ruta GPS interactivos con Leaflet, capas de telemetría multi-métrica, curvas de potencia máxima y sincronización mediante cron jobs y webhooks.",
        en: "Built with a modern full-stack architecture on Next.js 16 and serverless PostgreSQL. Integrates interactive Leaflet GPS elevation profiles, multi-metric telemetry charts, peak power curves, and automated background sync via cron jobs and webhooks.",
      },
      features: {
        es: [
          "Prescripción de entrenamientos 100% generada por IA contra datos reales del atleta (sin rutinas predefinidas).",
          "Dashboard de rendimiento Banister: Fitness (CTL, 42d), Fatiga (ATL, 7d) y Forma (TSB) por día civil.",
          "Mapas interactivos de rutas GPS con Leaflet, perfiles de elevación con gradiente de pendientes y telemetría de potencia, FC y cadencia.",
          "Curvas de mejor potencia: 5s (sprint), 1min (ataque), 5min (Vo2 max) y 20min (FTP) en vatios y W/kg.",
          "Módulo de entrenamiento de fuerza con 25 ejercicios guiados por RPE y bloqueo preventivo de 48h antes de sesiones clave.",
          "Publicación directa a Intervals.icu para sincronización inalámbrica con Garmin, Wahoo, Hammerhead Karoo y COROS.",
        ],
        en: [
          "AI-driven training prescriptions generated against the athlete's real telemetry (zero pre-canned workouts).",
          "Banister impulse-response dashboard: Fitness (CTL, 42d), Fatigue (ATL, 7d), and Form (TSB) per civil day.",
          "Interactive GPS route maps with Leaflet, slope-graded elevation profiles, and synchronized multi-metric telemetry.",
          "Best power curves: 5s (sprint), 1min (attack), 5min (Vo2 max), and 20min (FTP) in Watts and W/kg.",
          "Strength training module featuring 25 RPE-guided exercises with a strict 48h recovery rule before key rides.",
          "Direct publishing to Intervals.icu pushing wirelessly to Garmin, Wahoo, Karoo, and COROS head units.",
        ],
      },
      technologies: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript",
        "Drizzle ORM",
        "Neon Serverless PostgreSQL",
        "NextAuth v5 (Auth.js)",
        "Leaflet GPS",
        "Strava API v3",
        "Intervals.icu API",
        "AI Coaching Engine",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/jc9218/KOM-Trainer",
    },
  ] as PersonalProject[],

  experiences: [
    {
      id: "aplyca",
      company: "Aplyca",
      role: {
        es: "Líder Técnico / Desarrollador Full Stack Senior",
        en: "Technical Lead / Senior Full Stack Developer",
      },
      period: {
        es: "Julio 2021 – Agosto 2026",
        en: "July 2021 – August 2026",
      },
      location: "Remoto / Colombia",
      summary: {
        es: "Responsable del diseño arquitectónico, liderazgo técnico y despliegue automatizado de plataformas digitales empresariales para organizaciones globales de escala intensiva.",
        en: "Accountable for architectural design, technical guidance, and automated deployment of enterprise digital platforms for scale-intensive global organizations.",
      },
      projects: [
        {
          id: "headless-marketplace",
          title: {
            es: "Ecosistema de Comercio Headless & Plataforma Marketplace",
            en: "Headless Commerce Ecosystem & Marketplace Platform",
          },
          subtitle: {
            es: "Arquitectura Next.js + Ibexa DXP + Contentful + Commerce Layer",
            en: "Next.js + Ibexa DXP + Contentful + Commerce Layer Decoupled Architecture",
          },
          description: {
            es: "Diseño e implementación de entornos web headless de alto rendimiento combinando Next.js, Ibexa DXP, Contentful y Commerce Layer, impulsando métricas Core Web Vitals y maximizando las tasas de conversión de checkout.",
            en: "Designed and engineered high-performance headless web environments merging Next.js, Ibexa DXP, Contentful, and Commerce Layer, driving core page-speed increases and optimizing checkout conversion rates.",
          },
          highlights: {
            es: [
              "Liderazgo técnico en plataforma de utilidad pública-privada de alto impacto, coordinando un equipo ágil de 4 a 6 ingenieros.",
              "Integración de microservicios de catálogos densos de terceros, sincronización de inventario en tiempo real y facturación multidivisa mediante GraphQL y REST.",
              "Optimización de tiempos de carga y respuesta de servidores bajo estrictos SLAs corporativos.",
            ],
            en: [
              "Served as Technical Lead for a high-impact, public-private digital transformation utility platform, orchestrating an agile team of 4 to 6 engineers to hit strict milestone deliverables.",
              "Integrated dense third-party catalog microservices, real-time inventory synchronizations, and multi-currency billing engines using GraphQL and RESTful patterns.",
              "Optimized core page-speed metrics and overall user journey resulting in measurable checkout conversion uplifts.",
            ],
          },
          technologies: ["Next.js", "React", "TypeScript", "Ibexa DXP", "Commerce Layer", "Contentful", "GraphQL", "REST APIs"],
        },
        {
          id: "ticketing-payments",
          title: {
            es: "Plataforma Transaccional de Ticketing & Pasarelas de Pago Críticas",
            en: "Transactional Ticketing Platform & Critical Payment Pipelines",
          },
          subtitle: {
            es: "Alta disponibilidad, resiliencia transaccional y pipelines CI/CD automatizados",
            en: "High-availability, transactional consistency & automated CI/CD pipelines",
          },
          description: {
            es: "Arquitectura y estabilización de mecanismos centrales de checkout e integraciones de pagos de terceros de máxima seguridad para un sistema web de ticketing masivo de alta disponibilidad.",
            en: "Architected and stabilized core checkout mechanisms and highly secure third-party payment integrations for a high-availability, mass-scale ticketing web system.",
          },
          highlights: {
            es: [
              "Garantía de consistencia transaccional absoluta y tolerancia a fallos ante picos masivos imprevistos, procesando miles de compras concurrentes sin interrupciones.",
              "Ingeniería de automatización DevOps extremo a extremo con GitHub Actions y GitLab CI/CD, reduciendo drásticamente los tiempos y costos de despliegue en AWS, Docker y Vercel.",
              "Auditoría y remediación de vulnerabilidades de seguridad en pasarelas bancarias y de pago electrónico.",
            ],
            en: [
              "Guaranteed flawless transactional consistency and fault tolerance under intense peak traffic anomalies, processing thousands of concurrent ticket purchases seamlessly.",
              "Engineered and scaled end-to-end DevOps automation using GitHub Actions and GitLab CI/CD pipelines, slashing release cycle overheads on production clouds like AWS, Docker, and Vercel.",
              "Continuous architecture reviews and technical debt elimination across high-stakes transactional workflows.",
            ],
          },
          technologies: ["Next.js", "PHP", "Symfony", "AWS", "Vercel", "Docker", "GitHub Actions", "GitLab CI/CD", "PostgreSQL", "MySQL"],
        },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PHP",
        "Symfony",
        "Ibexa DXP",
        "Commerce Layer",
        "Contentful",
        "AWS",
        "Vercel",
        "Docker",
        "GitHub Actions",
        "GitLab CI/CD",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      id: "asesoftware",
      company: "Asesoftware",
      role: {
        es: "Analista de Sistemas Intermedio",
        en: "Intermediate Systems Analyst",
      },
      period: {
        es: "Mayo 2021 – Junio 2021",
        en: "May 2021 – June 2021",
      },
      location: "Colombia",
      summary: {
        es: "Análisis de requerimientos de ingeniería y soporte de aplicaciones backend para la expansión y mantenimiento de infraestructura corporativa de misión crítica.",
        en: "Analyzed engineering requirements and delivered intermediate backend application support to maintain and expand mission-critical corporate infrastructure.",
      },
      projects: [],
      technologies: ["PHP", "Java", "SQL", "Git"],
    },
    {
      id: "blaucast",
      company: "Blaucast",
      role: {
        es: "Desarrollador Web Full Stack",
        en: "Full Stack Web Developer",
      },
      period: {
        es: "Enero 2018 – Mayo 2021",
        en: "January 2018 – May 2021",
      },
      location: "Colombia",
      summary: {
        es: "Diseño y desarrollo integral de aplicaciones web listas para producción desde cero, aprovisionamiento cloud en AWS y modelado de datos relacionales de alta complejidad.",
        en: "Designed and developed comprehensive, production-ready web applications from scratch using Laravel, Angular, and vanilla JavaScript, managing AWS infrastructure and SQL data pipelines.",
      },
      projects: [
        {
          id: "enterprise-apps",
          title: {
            es: "Desarrollo Full Stack & Gestión de Infraestructura Cloud",
            en: "Full Stack Development & Cloud Infrastructure Management",
          },
          subtitle: {
            es: "Aplicaciones con Laravel, Angular y Servicios AWS",
            en: "Production applications with Laravel, Angular, and AWS Services",
          },
          description: {
            es: "Construcción de soluciones empresariales completas, aseguramiento de alta disponibilidad en AWS y estandarización de flujos de trabajo de ingeniería.",
            en: "Built end-to-end enterprise web applications, guaranteed optimal uptime on AWS, and established team-wide Git and code review methodologies.",
          },
          highlights: {
            es: [
              "Aprovisionamiento y administración de servidores e infraestructura en la nube con Amazon Web Services (EC2, S3, RDS), asegurando estabilidad en cargas operativas críticas.",
              "Diseño, normalización y optimización de bases de datos SQL altamente relacionales para agilizar lógica de negocio densa y flujos transaccionales pesados.",
              "Implementación de estrictas metodologías de control de versiones con Git/GitFlow, estandarizando despliegues y fusiones de código.",
            ],
            en: [
              "Provisioned cloud servers and managed infrastructure within AWS (EC2, S3, RDS), assuring optimum uptime and system stability across operational workloads.",
              "Designed, normalized, and optimized highly relational SQL databases to expedite dense business logic execution and handle heavy data transaction streams.",
              "Enforced strict Git version control methodologies, streamlining code iteration merges and standardizing company deployment workflows.",
            ],
          },
          technologies: ["Laravel", "PHP", "Angular", "JavaScript", "AWS (EC2, S3, RDS)", "MySQL", "Git"],
        },
      ],
      technologies: ["Laravel", "PHP", "Angular", "JavaScript", "AWS (EC2, S3, RDS)", "MySQL", "Git"],
    },
    {
      id: "univalle",
      company: "Universidad del Valle",
      role: {
        es: "Desarrollador Web",
        en: "Web Developer",
      },
      period: {
        es: "Mayo 2015 – Diciembre 2017",
        en: "May 2015 – December 2017",
      },
      location: "Cali, Colombia",
      summary: {
        es: "Desarrollo y mantenimiento de software web institucional seguro de alta utilidad, administración de servidores Linux y optimización de bases de datos relacionales.",
        en: "Developed and maintained high-utility, highly secure institutional web software utilizing structured PHP and JavaScript architectures across Linux nodes.",
      },
      projects: [
        {
          id: "institutional-software",
          title: {
            es: "Sistemas Web Institucionales & Optimización de Rendimiento",
            en: "Institutional Web Systems & Database Tuning",
          },
          subtitle: {
            es: "Arquitecturas estructuradas PHP/JS y Administración de Nodos Linux",
            en: "Structured PHP/JS architectures and Linux Server Administration",
          },
          description: {
            es: "Construcción de herramientas institucionales para la comunidad universitaria con foco en seguridad, disponibilidad ininterrumpida e indexación estratégica en bases de datos.",
            en: "Built mission-critical university web software focusing on strict security, zero downtime, and strategic database index engineering.",
          },
          highlights: {
            es: [
              "Administración y optimización de configuraciones en nodos de servidores Linux para garantizar disponibilidad ininterrumpida.",
              "Gestión y ajuste fino de bases de datos relacionales PostgreSQL y MySQL mediante indexación estratégica y eliminación de cuellos de botella.",
            ],
            en: [
              "Administered and optimized production server configurations across Linux-based nodes to guarantee uninterrupted university system uptime.",
              "Managed and streamlined PostgreSQL and MySQL relational databases via strategic index engineering and query bottlenecks execution fine-tuning.",
            ],
          },
          technologies: ["PHP", "JavaScript", "Linux", "PostgreSQL", "MySQL", "Apache"],
        },
      ],
      technologies: ["PHP", "JavaScript", "Linux", "PostgreSQL", "MySQL", "Apache"],
    },
  ] as JobExperience[],

  skillCategories: [
    {
      title: {
        es: "Arquitectura Frontend",
        en: "Frontend Architecture",
      },
      iconName: "Layout",
      skills: ["Next.js (App Router)", "React", "TypeScript", "JavaScript (ES6+)", "Angular", "Vue.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: {
        es: "Backend & APIs",
        en: "Backend & APIs",
      },
      iconName: "Server",
      skills: ["PHP", "Symfony", "Laravel", "Node.js", "RESTful APIs", "GraphQL", "Microservicios", "API Orchestration"],
    },
    {
      title: {
        es: "Headless Commerce & CMS",
        en: "Headless Commerce & CMS",
      },
      iconName: "ShoppingBag",
      skills: ["Ibexa DXP", "Commerce Layer", "Contentful", "Decoupled Architecture", "Catálogos de Productos", "Payment Workflows", "Sistemas de Ticketing"],
    },
    {
      title: {
        es: "Cloud & Infraestructura DevOps",
        en: "Cloud & DevOps Infrastructure",
      },
      iconName: "Cloud",
      skills: ["Amazon Web Services (AWS)", "Vercel", "Docker", "GitHub Actions", "GitLab CI/CD", "Linux Servers", "Nginx"],
    },
    {
      title: {
        es: "Bases de Datos & Almacenamiento",
        en: "Databases & Storage",
      },
      iconName: "Database",
      skills: ["PostgreSQL", "MySQL", "Query Optimization", "Index Engineering", "Modelado Relacional Complejo"],
    },
    {
      title: {
        es: "Desarrollo Agéntico & IA",
        en: "Agentic Development & AI",
      },
      iconName: "Bot",
      skills: [
        "Agentic Software Development",
        "Antigravity Workflows & Skills",
        "Autonomous AI Coding Agents",
        "Prompt & Context Engineering",
        "Agentic Architecture & Tooling",
        "Automated CI/CD Workflows",
      ],
    },
    {
      title: {
        es: "Prácticas de Ingeniería & Liderazgo",
        en: "Engineering Practices & Leadership",
      },
      iconName: "Award",
      skills: ["System Design", "Technical Leadership (4-6 devs)", "Git & GitFlow", "Rigorous Code Reviews", "Scrum / Agile", "Mitigación de Deuda Técnica"],
    },
  ] as SkillCategory[],

  education: {
    degree: {
      es: "Ingeniero de Sistemas",
      en: "B.S. in Systems Engineering",
    },
    institution: "Universidad del Valle",
    year: "2017",
    location: "Cali, Colombia",
  },

  languages: [
    {
      name: {
        es: "Español",
        en: "Spanish",
      },
      level: {
        es: "Nativo",
        en: "Native",
      },
      detail: {
        es: "Lengua materna",
        en: "Native tongue",
      },
    },
    {
      name: {
        es: "Inglés",
        en: "English",
      },
      level: {
        es: "B1 Profesional (Working Proficiency)",
        en: "B1 Level (Professional Working Proficiency)",
      },
      detail: {
        es: "Capaz de liderar alineación técnica en vivo o asíncrona, redactar especificaciones técnicas complejas y diseñar arquitecturas de sistemas.",
        en: "Capable of leading live or async technical alignment, reading complex technical specification write-ups, and authoring system designs.",
      },
    },
  ],

  thisSiteTechStack: [
    {
      name: "Next.js 16 (App Router)",
      category: {
        es: "Framework & SSR",
        en: "Framework & SSR",
      },
      description: {
        es: "Arquitectura híbrida con Server Components y Turbopack para compilación y renderizado instantáneo.",
        en: "Hybrid architecture featuring React Server Components and Turbopack for sub-second speeds.",
      },
      badge: "Next.js 16",
    },
    {
      name: "React 19",
      category: {
        es: "Librería de UI",
        en: "UI Library",
      },
      description: {
        es: "Última generación de React con Server Components nativos y renderizado concurrente sin bloqueos.",
        en: "Latest React generation leveraging native Server Components and concurrent rendering.",
      },
      badge: "React 19",
    },
    {
      name: "TypeScript (Strict Mode)",
      category: {
        es: "Lenguaje & Tipado",
        en: "Language & Types",
      },
      description: {
        es: "Seguridad de tipos estricta en esquemas de datos, componentes e interfaces sin tipos 'any'.",
        en: "Strict end-to-end typing across data schemas, components, and interfaces with zero 'any' types.",
      },
      badge: "TypeScript",
    },
    {
      name: "Tailwind CSS v4",
      category: {
        es: "Motor de Estilos",
        en: "Styling Engine",
      },
      description: {
        es: "Motor CSS moderno v4 con @import 'tailwindcss' y variables de diseño para tema oscuro.",
        en: "Modern v4 engine utilizing @import 'tailwindcss' and design tokens for deep dark mode.",
      },
      badge: "Tailwind v4",
    },
    {
      name: "Yarn 4 (Berry)",
      category: {
        es: "Gestor de Paquetes",
        en: "Package Manager",
      },
      description: {
        es: "Gestión determinista de dependencias de alta velocidad con nodeLinker: node-modules.",
        en: "High-speed deterministic dependency management configured with nodeLinker: node-modules.",
      },
      badge: "Yarn Berry",
    },
    {
      name: "Lucide React & Custom SVG",
      category: {
        es: "Iconografía & Vectores",
        en: "Iconography & Vectors",
      },
      description: {
        es: "Iconos técnicos vectoriales y componentes SVG dedicados para marcas (GitHub, LinkedIn).",
        en: "Vector technical icons and dedicated brand SVG components with zero bundle overhead.",
      },
      badge: "Icons",
    },
    {
      name: "Geist Sans & Mono",
      category: {
        es: "Tipografía & Diseño",
        en: "Typography & Design",
      },
      description: {
        es: "Sistema tipográfico de precisión diseñado para interfaces técnicas de alto contraste.",
        en: "Precision typographic system engineered for high-contrast technical interfaces.",
      },
      badge: "Fonts",
    },
    {
      name: "Antigravity AI Platform",
      category: {
        es: "Ingeniería Agéntica",
        en: "Agentic Engineering",
      },
      description: {
        es: "Construido y mantenido mediante flujos avanzados de desarrollo agéntico con agentes de IA autónomos.",
        en: "Engineered and maintained leveraging advanced autonomous AI coding agent workflows.",
      },
      badge: "Agentic AI",
    },
    {
      name: "Vercel Edge Network",
      category: {
        es: "Cloud & Despliegue",
        en: "Cloud & Deployment",
      },
      description: {
        es: "Despliegue continuo con cada commit a GitHub, certificados SSL y distribución global en el Edge.",
        en: "Automated CI/CD with every commit, automated SSL, and global edge delivery.",
      },
      badge: "Vercel",
    },
  ] as SiteTechItem[],
};
