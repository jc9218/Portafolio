# Portafolio Profesional — Juan Camilo López Espitia
### Solutions Architect | Technical Lead | Senior Full Stack Engineer

Sitio web de portafolio profesional desarrollado con **Next.js 16 (App Router con Turbopack)**, **React 19**, **TypeScript** y **Tailwind CSS v4**, diseñado bajo una estética moderna y minimalista de alto impacto visual inspirada en Linear y Vercel.

---

## 🚀 Características Principales

- **Arquitectura de Alto Rendimiento:** Construido sobre Next.js 16 con Server Components y optimización automática en el Edge.
- **Enfoque Solutions Architect & Tech Lead:**
  - **Blueprint Interactivo de Arquitectura:** Diagrama visual interactivo que detalla la orquestación de arquitecturas desacopladas (*Next.js Edge ↔ GraphQL / REST Mesh ↔ Ibexa DXP / Headless CMS ↔ Commerce Layer / Checkout masivo ↔ AWS / Vercel Cloud*).
  - **Métricas de Impacto:** Más de 10 años de experiencia, liderazgo de equipos ágiles (4 a 6 ingenieros), SLAs 99.9% y procesamiento de miles de transacciones concurrentes en plataformas masivas de ticketing.
  - **Trayectoria Profesional Detallada:** Casos de estudio e hitos en **Aplyca**, **Blaucast**, **Asesoftware** y **Universidad del Valle**.
- **Soporte Bilingüe Instantáneo (ES / EN):** Alternancia fluida entre español e inglés con persistencia local en `localStorage`.
- **Canales de Contacto Directo:** Enlace directo a WhatsApp, botón de copia de correo con feedback interactivo (confetti), enlace a LinkedIn y formulario de contacto.
- **Listo para Despliegue Continuo:** Configurado para integración con GitHub y despliegue automático en Vercel.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Librería UI** | [React 19](https://react.dev/) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Iconografía** | [Lucide React](https://lucide.dev/) + SVGs optimizados |
| **Interactividad** | Canvas Confetti |
| **Entorno de Desarrollo** | WSL2 (Debian) |
| **Alojamiento & Edge** | [Vercel](https://vercel.com/) |

---

## 📂 Estructura del Repositorio

```text
├── .agent/
│   └── skills/
│       └── portfolio-ops/       # Skill con guías operativas para agentes
├── public/                      # Activos estáticos y favicons
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y tokens de tema oscuro
│   │   ├── layout.tsx           # SEO, OpenGraph y Metadata
│   │   └── page.tsx             # Orquestación de secciones del portafolio
│   ├── components/
│   │   ├── ArchitectureShowcase.tsx # Blueprint interactivo de arquitectura
│   │   ├── ContactSection.tsx   # Canales de comunicación y formulario directo
│   │   ├── EducationSection.tsx # Formación académica e idiomas
│   │   ├── ExperienceTimeline.tsx # Timeline de carrera profesional y proyectos
│   │   ├── Footer.tsx           # Pie de página y accesos rápidos
│   │   ├── Hero.tsx             # Presentación, badges y CTAs
│   │   ├── Icons.tsx            # Iconos SVG de alta fidelidad
│   │   ├── Metrics.tsx          # Tarjetas de impacto cuantitativo
│   │   ├── Navbar.tsx           # Navegación fija con blur y switch de idioma
│   │   └── SkillsSection.tsx    # Matriz interactiva de competencias
│   ├── context/
│   │   └── LanguageContext.tsx  # Proveedor de estado bilingüe
│   └── data/
│       └── portfolio.ts         # Fuente única de datos y traducciones
├── AGENTS.md                    # Reglas operativas para Agentes de IA
├── CLAUDE.md                    # Enlace de referencia a AGENTS.md
├── package.json
└── README.md
```

---

## 💻 Desarrollo Local (en WSL Debian)

El proyecto está configurado para ejecutarse dentro del Debian de WSL en `/home/jc9218/Portafolio`:

```bash
# 1. Acceder al directorio en WSL
cd /home/jc9218/Portafolio

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizar el resultado.

---

## 🚢 Compilación y Despliegue en Vercel

Para verificar que la compilación pase sin errores:

```bash
cd /home/jc9218/Portafolio
npm run build
```

El proyecto está listo para ser importado directamente en **Vercel** vinculándolo con el repositorio de GitHub. Cualquier `push` a la rama `main` generará un despliegue automático en producción.

---

## 📬 Contacto Profesional

- **Juan Camilo López Espitia**
- **Email:** [juancamilolopez10a@gmail.com](mailto:juancamilolopez10a@gmail.com)
- **LinkedIn:** [linkedin.com/in/juan-camilo-lopez-espitia](https://linkedin.com/in/juan-camilo-lopez-espitia)
- **GitHub:** [github.com/jc9218](https://github.com/jc9218)
- **Ubicación:** Cali, Colombia
