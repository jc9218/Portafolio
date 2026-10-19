<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Engineering Guidelines & AI Agent Rules (`AGENTS.md`)

This document is the **technical single source of truth** for any developer or AI agent maintaining or extending this repository.

> **Core Project Premise — Recruiter-First Repository Excellence:**
> Because this repository is a public engineering showcase reviewed by technical recruiters, hiring managers, and staff engineers, **every file in the working tree and every commit in the Git history must reflect senior-level engineering craftsmanship, structural organization, and clean commit discipline.**

---

## 1. Repository Hygiene & Commit Standards (MANDATORY)

### 1.1 Conventional Commits Specification
Every commit message **MUST** strictly follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```text
<type>(<scope>): <concise, imperative summary in English>
```

- **Allowed `<type>` values:**
  - `feat`: A new feature, section, or user-facing capability.
  - `fix`: A bug fix, layout fix, or data correction.
  - `refactor`: Code restructuring that neither fixes a bug nor adds a feature.
  - `perf`: Performance or Core Web Vitals optimization.
  - `style`: Visual design, typography, or Tailwind CSS refinements.
  - `docs`: Documentation updates (`README.md`, `AGENTS.md`, `LICENSE`).
  - `ci`: GitHub Actions workflows or Dependabot configuration changes.
  - `build`: Build system, Next.js config, security headers, or Corepack/Yarn config.
  - `chore`: Routine maintenance or grouped dependency updates (`chore(deps)`).
- **Recommended `<scope>` values:**
  - `ui`, `data`, `i18n`, `seo`, `branding`, `projects`, `config`, `security`, `deps`, `ci`, `repo`.
- **Formatting Rules:**
  - Write all commit messages in **English** using the **imperative mood** (e.g., `feat(seo): add Schema.org JSON-LD graph`, **not** `added json-ld` or `actualizando seo`).
  - Keep the subject line under **72 characters**, lowercase after the colon, and with no trailing period.

### 1.2 Linear, Atomic & Curated Git History
- **Atomic Commits:** Each commit must represent a single, cohesive logical unit of work that compiles and passes all checks on its own. Never bundle unrelated changes into a "misc fixes" or "wip" commit.
- **Linear History (`main`):** Prefer **Squash and Merge** or **Rebase** for Pull Requests (including automated dependency PRs) to avoid noisy merge commits (`Merge pull request #...`) cluttering `git log`.
- **Clean Working Tree:**
  - Never commit scratch files, editor backups, local AI agent folders (`.agent/`, `.agents/`, `CLAUDE.md`, `graphify-out/`), or unused boilerplate assets.
  - Keep file permissions normalized (`644` for source/config files; never `755` unless executing a shell script).
  - Always keep `README.md` and `AGENTS.md` 100% synchronized with the actual directory structure whenever components are added, renamed, or removed.

---

## 2. Primary Execution Environment & Workflow

- **Primary & Active Working Directory (WSL Debian):**
  - Path: `/home/jc9218/Portafolio` (located alongside `/home/jc9218/KOM-Trainer`).
  - **MANDATORY RULE:** **Always work inside the WSL repository.** All code edits, dependency updates, quality checks (`yarn lint`, `yarn typecheck`, `yarn build`), and Git operations (`git commit`, `git push`) **MUST be executed natively inside WSL Debian** (`/home/jc9218/Portafolio`).
  - Package Manager: **Yarn 4 (Berry)** via Corepack with `nodeLinker: node-modules`.

- **Windows Project Directory (Offline Mirror Only):**
  - Path: `C:\Users\juanc\Documentos\Proyectos\Portafolio` (`/mnt/c/Users/juanc/Documentos/Proyectos/Portafolio`).
  - **Purpose:** Strictly a read-only/offline mirror. Do **not** run development servers, builds, or package installations in Windows.
  - After pushing changes from WSL Debian to GitHub, synchronize the Windows mirror with `git pull origin main` (or `git fetch origin && git reset --hard origin/main` if history was rewritten).

### 🔄 Standard Workflow for Changes
1. **Apply Changes in WSL Debian:** Edit files inside `/home/jc9218/Portafolio`.
2. **Run Mandatory Quality Gate in WSL:**
   ```bash
   cd /home/jc9218/Portafolio
   yarn lint
   yarn typecheck
   yarn build
   ```
   Ensure **0 errors** and **0 warnings** across all three checks.
3. **Stage & Create Atomic Conventional Commit(s):**
   ```bash
   cd /home/jc9218/Portafolio
   git add <files>
   git commit -m "type(scope): clear imperative description"
   git push origin main
   ```
4. **Synchronize Windows Mirror:**
   ```powershell
   cd C:\Users\juanc\Documentos\Proyectos\Portafolio
   git pull origin main
   ```
5. **Automated Production Deployment:**
   Pushing to `main` triggers GitHub Actions CI (`ci.yml`) and Vercel's automatic production edge deployment.

---

## 3. Technology Stack & Architecture

- **Framework:** Next.js 16 (App Router with Turbopack).
- **UI Library:** React 19 with Server Components by default, using Client Components (`"use client"`) strictly where browser interactivity is required.
- **Typing:** TypeScript 6 in strict mode (`tsc --noEmit`).
- **Styling:** Tailwind CSS v4 using `@import "tailwindcss";` in `src/app/globals.css`.
- **Package Manager:** Yarn 4 (Berry) via Corepack with `.yarnrc.yml` (`nodeLinker: node-modules`).
- **Security:** OWASP HTTP Security Headers configured in `next.config.ts` (`Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-XSS-Protection`).
- **Iconography:** Lucide React for general UI icons, `src/components/Icons.tsx` for social vectors, and `src/components/TechIcon.tsx` for 45+ official monochrome technology brand SVGs.
- **Interactive Feedback:** Canvas Confetti for recruiter interaction feedback (1-click email copy).
- **Internationalization (i18n):** React Context (`LanguageProvider`) supporting instant English (`en`) and Spanish (`es`) switching with `localStorage` persistence.

---

## 4. Directory Structure & Responsibilities

```text
Portafolio/
├── .github/
│   ├── dependabot.yml               # Grouped monthly dependency & GitHub Actions updates
│   └── workflows/
│       ├── ci.yml                   # Quality Gate on push/PR (lint, typecheck, build)
│       └── dependency-updates.yml   # Scheduled weekly dependency update PR automation
├── public/
│   ├── favicon.svg                  # High-contrast vector favicon
│   ├── icon.svg                     # Vector app icon
│   └── og-image.svg                 # 1200x630 OpenGraph preview card
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind CSS v4 setup & dark theme tokens
│   │   ├── icon.svg                 # Next.js App Router icon metadata asset
│   │   ├── layout.tsx               # SEO metadata, Geist fonts, OpenGraph & LanguageProvider
│   │   ├── page.tsx                 # Main orchestrator page composing all sections
│   │   ├── robots.ts                # Dynamic robots.txt route
│   │   └── sitemap.ts               # Dynamic XML sitemap route
│   ├── components/
│   │   ├── ContactSection.tsx       # Direct email, 1-click copy, LinkedIn & GitHub cards
│   │   ├── EducationSection.tsx     # Systems Engineering degree (Univalle) & languages
│   │   ├── ExperienceTimeline.tsx   # Career trajectory, achievements & enterprise projects
│   │   ├── FeaturedProjects.tsx     # Personal projects showcase (KOM Trainer AI Cycling Coach)
│   │   ├── Footer.tsx               # Footer, Antigravity badge & stack summary
│   │   ├── Hero.tsx                 # High-impact summary, agentic badge & CTAs
│   │   ├── Icons.tsx                # Dedicated social vector SVGs (GitHub, LinkedIn)
│   │   ├── JsonLd.tsx               # Schema.org JSON-LD structured data graph
│   │   ├── Logo.tsx                 # Custom bicycle-chainring & code monogram SVG component
│   │   ├── Metrics.tsx              # Quantitative impact cards (+10 yrs, 4-6 devs, 99.9% uptime)
│   │   ├── Navbar.tsx               # Fixed glassmorphism navbar with segmented ES/EN switcher
│   │   ├── PortfolioTechStack.tsx   # Showcase of the technologies powering this website
│   │   ├── SkillsSection.tsx        # Categorized technical competencies matrix
│   │   └── TechIcon.tsx             # Inline SVG registry for official technology brand logos
│   ├── config/
│   │   └── site.ts                  # Single source of truth for canonical site URL
│   ├── context/
│   │   └── LanguageContext.tsx      # Global bilingual state with localStorage persistence
│   └── data/
│       └── portfolio.ts             # Single source of truth for all bilingual content (ES/EN)
├── .env.example                     # Template for environment variables (NEXT_PUBLIC_SITE_URL)
├── .yarnrc.yml                      # Yarn Berry configuration (nodeLinker: node-modules)
├── AGENTS.md                        # Engineering standards, git hygiene & AI agent rules
├── LICENSE                          # MIT License
├── next.config.ts                   # Next.js config & HTTP security headers
├── package.json                     # Project manifest & scripts
├── tsconfig.json                    # TypeScript strict configuration
└── README.md                        # Public recruiter-facing technical documentation
```

---

## 5. Common Modification Guides

### A. Updating Experience, Projects, or Skills
- **Do not hardcode profile text inside UI components.** All content is centralized in `src/data/portfolio.ts`.
- Always maintain **100% bilingual parity (`es` and `en`)** for every text field.

### B. Adding or Removing a Section
1. Define data structures and bilingual content in `src/data/portfolio.ts`.
2. Create or update the presentation component in `src/components/SectionName.tsx`.
3. Import and render within `src/app/page.tsx`.
4. Update navigation anchors in `src/components/Navbar.tsx`.
5. Update the directory tree in both `README.md` and `AGENTS.md`.

---

## 6. Production Domain & Environment Variables

- **Single Source of Truth:** `src/config/site.ts` resolves the canonical domain via `NEXT_PUBLIC_SITE_URL`.
  - Default / Fallback: `https://jclopezespitia.sytes.net/`
  - Overridable via: `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel Project Settings.
- **Deployment Pipeline:**
  1. The GitHub repository `https://github.com/jc9218/Portafolio` is integrated with Vercel.
  2. Every `git push` to `main` triggers GitHub Actions verification (`ci.yml`) and Vercel's production edge build.
  3. Canonical metadata, OpenGraph, JSON-LD, `/sitemap.xml`, and `/robots.txt` dynamically read from `SITE_URL`.
