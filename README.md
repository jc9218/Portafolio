# Juan Camilo López Espitia — Engineering Portfolio

[![Live Website](https://img.shields.io/badge/Live_Website-jclopezespitia.sytes.net-10b981?style=flat-square&logo=vercel&logoColor=white)](https://jclopezespitia.sytes.net/)
[![CI Quality Gate](https://img.shields.io/github/actions/workflow/status/jc9218/Portafolio/ci.yml?branch=main&style=flat-square&label=CI%20Quality%20Gate)](https://github.com/jc9218/Portafolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-149eca?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)](./LICENSE)

> **Fullstack Developer & Technical Lead** with **+10 years of experience** designing and delivering scalable web platforms, decoupled frontend architectures, and enterprise headless commerce ecosystems (**Ibexa DXP**, **Commerce Layer**, **Next.js**, **Node.js**, **PHP/Symfony**, **AWS**, **Docker**).

---

## ⚡ Key Highlights

- **Server-First Architecture:** Built on **Next.js 16 (App Router + Turbopack)** and **React 19 Server Components**, shipping minimal client-side JavaScript for near-instant First Contentful Paint (FCP) and optimal Core Web Vitals.
- **Enterprise Career Trajectory & Case Studies:** Detailed architectural breakdowns of leadership and senior engineering roles at **Aplyca**, **Asesoftware**, **Blaucast Media**, and **Universidad del Valle**.
- **Featured Product Showcase — [KOM Trainer](https://www.kom-trainer.tech):** Personal SaaS innovation — an AI-powered cycling coach integrating **Strava API v3** and **Intervals.icu** telemetry, Coggan power distribution analytics (Z1–Z7, NP, IF, TSS), Banister impulse-response physiological modeling (CTL, ATL, TSB), and automated workout publishing to Garmin, Wahoo, Hammerhead Karoo, and COROS head units.
- **Instant Bilingual Engine (`ES` / `EN`):** Zero-reload, type-safe internationalization powered by React Context with automatic `localStorage` persistence and 100% bilingual parity across all data structures.
- **Technical SEO & Semantic Web:** Dynamic OpenGraph (`1200x630`), Twitter Cards, localized `sitemap.xml`, `robots.txt`, and rich **Schema.org JSON-LD** (`ProfilePage`, `Person`, `WebSite`) structured graph.
- **Hardened Security Posture:** Production-grade OWASP HTTP security headers configured at the framework edge (`Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Server Components, routing, metadata API, and Turbopack bundler |
| **UI Library** | [React 19](https://react.dev/) | Declarative component architecture & client interactivity hooks |
| **Language** | [TypeScript 6 (Strict Mode)](https://www.typescriptlang.org/) | End-to-end static typing for content models and UI props |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first utility engine with editorial dark slate design tokens |
| **Iconography** | [Lucide React](https://lucide.dev/) + Custom Vector SVGs | Zero-overhead monochrome brand icons (`TechIcon.tsx`) and UI glyphs |
| **Package Manager** | [Yarn 4 (Berry)](https://yarnpkg.com/) | Deterministic dependency resolution via Corepack |
| **CI/CD & Hosting** | GitHub Actions + [Vercel Edge Network](https://vercel.com/) | Automated linting, typechecking, dependency updates, and global CDN |

---

## 📂 Repository Architecture

```text
Portafolio/
├── .github/
│   ├── dependabot.yml               # Grouped monthly dependency & GitHub Actions security updates
│   └── workflows/
│       ├── ci.yml                   # Quality Gate: ESLint, TypeScript check & production build
│       └── dependency-updates.yml   # Automated weekly dependency maintenance PR workflow
├── public/
│   ├── favicon.svg                  # Custom high-contrast monogram + chainring vector favicon
│   ├── icon.svg                     # App icon vector asset
│   └── og-image.svg                 # 1200x630 OpenGraph social preview card
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind CSS v4 imports and dark editorial theme tokens
│   │   ├── icon.svg                 # Next.js App Router dynamic icon metadata
│   │   ├── layout.tsx               # Root layout, Geist typography, OpenGraph & LanguageProvider
│   │   ├── page.tsx                 # Main portfolio page orchestrating all sections
│   │   ├── robots.ts                # Dynamic robots.txt generation
│   │   └── sitemap.ts               # Dynamic multilingual XML sitemap generation
│   ├── components/
│   │   ├── ContactSection.tsx       # Recruiter-focused contact hub (1-click email copy, LinkedIn, GitHub)
│   │   ├── EducationSection.tsx     # B.S. in Systems Engineering (Univalle) & language proficiencies
│   │   ├── ExperienceTimeline.tsx   # Chronological career milestones, leadership impact & tech tags
│   │   ├── FeaturedProjects.tsx     # Interactive KOM Trainer showcase & live telemetry preview
│   │   ├── Footer.tsx               # Location metadata, quick navigation & stack summary
│   │   ├── Hero.tsx                 # Value proposition, executive summary & primary CTAs
│   │   ├── Icons.tsx                # Dedicated vector SVGs for social/brand links
│   │   ├── JsonLd.tsx               # Schema.org JSON-LD structured data graph
│   │   ├── Logo.tsx                 # Custom SVG brand monogram (bicycle chainring + code brackets)
│   │   ├── Metrics.tsx              # Quantitative career impact indicators (+10 yrs, 99.9% uptime)
│   │   ├── Navbar.tsx               # Fixed glassmorphism navigation & segmented ES/EN switcher
│   │   ├── PortfolioTechStack.tsx   # Architectural overview of the technologies powering this site
│   │   ├── SkillsSection.tsx        # Categorized technical competencies matrix
│   │   └── TechIcon.tsx             # Inline SVG path registry for 45+ official technology brand logos
│   ├── config/
│   │   └── site.ts                  # Single source of truth for canonical domain & environment config
│   ├── context/
│   │   └── LanguageContext.tsx      # Reactive bilingual state provider with localStorage sync
│   └── data/
│       └── portfolio.ts             # Strongly-typed single source of truth for all ES/EN content
├── .env.example                     # Environment variable template (NEXT_PUBLIC_SITE_URL)
├── .yarnrc.yml                      # Yarn 4 configuration (nodeLinker: node-modules)
├── AGENTS.md                        # Engineering standards, git hygiene & AI agent rules
├── LICENSE                          # MIT License
├── next.config.ts                   # Next.js configuration & OWASP HTTP security headers
├── package.json                     # Project manifest, scripts & dependencies
└── tsconfig.json                    # Strict TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 22.0.0`
- **Yarn 4 (Berry)** (enabled via Corepack: `corepack enable`)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/jc9218/Portafolio.git
cd Portafolio

# 2. Install dependencies (immutable lockfile)
yarn install

# 3. Start the Next.js Turbopack development server
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Assurance & Production Build

```bash
# Run ESLint static code analysis
yarn lint

# Run TypeScript strict type verification
yarn typecheck

# Compile optimized production build
yarn build
```

---

## 📐 Engineering & Commit Standards

This repository follows strict software engineering hygiene:

- **Conventional Commits:** Every commit adheres to the `type(scope): description` specification (`feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `ci`, `build`, `chore`).
- **Linear & Atomic Git History:** Features, UI refinements, and infrastructure updates are structured in clean, self-contained, atomic commits without noisy merge chains or temporary debug artifacts.
- **Zero-Warning Policy:** Every commit on `main` must pass `yarn lint`, `yarn typecheck`, and `yarn build` with zero warnings or errors.

---

## 📬 Contact

**Juan Camilo López Espitia** — *Fullstack Developer & Technical Lead*

- **Portfolio:** [https://jclopezespitia.sytes.net/](https://jclopezespitia.sytes.net/)
- **LinkedIn:** [linkedin.com/in/juan-camilo-lopez-espitia](https://linkedin.com/in/juan-camilo-lopez-espitia)
- **GitHub:** [github.com/jc9218](https://github.com/jc9218)
- **Email:** [juancamilolopez10a@gmail.com](mailto:juancamilolopez10a@gmail.com)
- **Location:** Cali, Colombia

---

Licensed under the [MIT License](./LICENSE).
