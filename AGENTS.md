<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Agent Guidelines (AGENTS.md)

This document is the **technical single source of truth** for any AI agent or developer interacting with, maintaining, or extending this project.

---

## 1. Primary Execution Environment & Workflow Rules

- **Primary & Active Working Directory (WSL Debian):**
  - Path: `/home/jc9218/Portafolio` (located at the same level as `/home/jc9218/KOM-Trainer`).
  - **MANDATORY RULE:** **Always work inside the WSL repository.** All code modifications, dependency installations, tests, builds (`yarn build`), and Git commits/pushes **MUST be executed natively inside WSL Debian** (`/home/jc9218/Portafolio`).
  - Package Manager: **Yarn 4 (Berry)** with `nodeLinker: node-modules`.

- **Windows Project Directory (Mirror Only):**
  - Path: `C:\Users\juanc\Documentos\Proyectos\Portafolio` (`/mnt/c/Users/juanc/Documentos/Proyectos/Portafolio`).
  - **Purpose:** This folder is **strictly an offline copy/mirror** for the user. Do **not** run development servers, builds, or package installations in Windows.
  - After pushing changes from WSL Debian to GitHub, simply run `git pull origin main` in the Windows folder to keep the mirror up to date.

### 🔄 Standard Workflow for Changes:
1. **Work in WSL Debian:** Apply all code edits, styles, and configurations in `/home/jc9218/Portafolio`.
2. **Validate production build in WSL:**
   ```bash
   cd /home/jc9218/Portafolio
   yarn build
   ```
   Ensure 0 errors and 0 lint failures.
3. **Commit & Push from WSL Debian to GitHub:**
   ```bash
   cd /home/jc9218/Portafolio
   git add .
   git commit -m "feat/fix: descriptive commit message"
   git push origin main
   ```
4. **Update Windows Mirror:**
   ```powershell
   cd C:\Users\juanc\Documentos\Proyectos\Portafolio
   git pull origin main
   ```
5. **Automated Production Deployment:**
   Pushing to `main` triggers Vercel's automatic production edge build.

---

## 2. Technology Stack & Project Architecture

- **Framework:** Next.js 16 (App Router with Turbopack).
- **UI Library:** React 19 with Server Components by default, using Client Components (`"use client"`) strictly for interactivity.
- **Typing:** TypeScript in strict mode.
- **Styling:** Tailwind CSS v4 using modern `@import "tailwindcss";` in `globals.css`.
- **Package Manager:** Yarn 4 (Berry v4.18.0) via Corepack with `.yarnrc.yml` (`nodeLinker: node-modules`).
- **Security:** HTTP Security Headers configured in `next.config.ts` (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection).
- **Icons:** Lucide React for general iconography and custom optimized SVGs in `@/components/Icons.tsx` for brands (GitHub, LinkedIn).
- **Interactive Effects:** Canvas Confetti for user interaction feedback (copying email, submitting messages).
- **Internationalization (i18n):** Native React Context (`LanguageProvider`) supporting dynamic English (`en`) and Spanish (`es`) switching with `localStorage` persistence.
- **Agentic Engineering:** Developed and maintained using Antigravity AI agentic workflows.

---

## 3. Directory Structure & Responsibilities

```text
Portafolio/
├── .agent/
│   └── skills/
│       └── portfolio-ops/        # Operational and deployment agent skill
├── public/                       # Static assets, icons, and downloadable documents
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css           # Base Tailwind CSS v4 styling & dark theme tokens
│   │   ├── layout.tsx            # SEO metadata, Geist fonts, OpenGraph, and LanguageProvider
│   │   └── page.tsx              # Main orchestrator page composing all sections
│   ├── components/
│   │   ├── ContactSection.tsx    # Direct WhatsApp, Mailto email, LinkedIn, and GitHub cards
│   │   ├── EducationSection.tsx  # University degree and language proficiencies
│   │   ├── ExperienceTimeline.tsx # Career trajectory, achievements, and enterprise projects
│   │   ├── FeaturedProjects.tsx  # Personal projects showcase (KOM Trainer AI Cycling Coach)
│   │   ├── Footer.tsx            # Footer, Antigravity badge, and portfolio tech stack specs
│   │   ├── Hero.tsx              # High-impact summary, agentic badge, and CTAs
│   │   ├── Icons.tsx             # Dedicated vector SVGs (GitHub, LinkedIn)
│   │   ├── Metrics.tsx           # Quantitative impact cards (+10 yrs, 4-6 devs, 99.9% uptime)
│   │   ├── Navbar.tsx            # Fixed glassmorphism navbar with segmented ES/EN switcher
│   │   ├── PortfolioTechStack.tsx # Dedicated showcase of the technologies powering this website
│   │   └── SkillsSection.tsx     # Categorized interactive technical competencies
│   ├── config/
│   │   └── site.ts               # Single source of truth for site URL & env configuration
│   ├── context/
│   │   └── LanguageContext.tsx   # Global bilingual state with localStorage persistence
│   └── data/
│       └── portfolio.ts          # Single source of truth for all content and bilingual texts
├── .env.example                  # Template for environment variables (NEXT_PUBLIC_SITE_URL)
├── .yarnrc.yml                   # Yarn Berry configuration (nodeLinker: node-modules)
├── AGENTS.md                     # Master guidelines and operational rules for AI agents
├── CLAUDE.md                     # Reference redirect link pointing to AGENTS.md
├── package.json
├── yarn.lock
└── README.md                     # Comprehensive technical documentation
```

---

## 4. Common Modification Guides

### A. Updating Experience, Projects, or Skills
- **Do not modify UI components directly.** All information is centralized in `src/data/portfolio.ts`.
- Always maintain complete bilingual parity (`es` and `en`) for every text field.

### B. Adding a New Section
1. Define data structures and contents in `src/data/portfolio.ts`.
2. Create the presentation component in `src/components/SectionName.tsx`.
3. Import and render within `src/app/page.tsx`.
4. Add the corresponding navigation anchor in `src/components/Navbar.tsx`.

---

## 5. Mandatory Verification Commands

Before creating a commit or deploying to production, execute in WSL Debian:

```bash
cd /home/jc9218/Portafolio

# Validate production build and TypeScript types
yarn build

# Validate ESLint
yarn lint
```

---

## 6. Production Domain & Environment Variables

- **Single Source of Truth:** `src/config/site.ts` resolves the canonical domain via `NEXT_PUBLIC_SITE_URL`.
  - Default / Fallback: `https://jclopezespitia.sytes.net/`
  - Overridable via: `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel Project Settings.
- **Deployment Pipeline:**
  1. The GitHub repository `https://github.com/jc9218/Portafolio` is integrated with Vercel.
  2. Every `git push` to `main` automatically triggers an optimized edge deployment.
  3. Canonical metadata, OpenGraph, sitemap (`/sitemap.xml`), robots (`/robots.txt`), and portfolio data dynamically read from `SITE_URL`.
