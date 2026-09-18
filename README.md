# Juan Camilo López Espitia — Portfolio
### Solutions Architect | Technical Lead | Senior Full Stack Engineer

A high-performance, modern professional portfolio engineered with **Next.js 16 (App Router with Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Built with a minimalist, high-impact dark engineering aesthetic inspired by Vercel and Linear, featuring real-time bilingual switching (English / Spanish).

---

## ⚡ Core Features

- **Architectural Excellence:** Built on Next.js 16 Server Components and edge-ready optimizations with sub-second page loads.
- **Interactive Solutions Architecture Blueprint:** A 5-tier interactive system diagram demonstrating decoupled enterprise ecosystems:
  - *Next.js Edge & App Router* (Decoupled presentation layer, Core Web Vitals, SSR/SSG/ISR)
  - *GraphQL & API Gateway Mesh* (Microservices orchestration, real-time inventory, third-party catalogs)
  - *Ibexa DXP & Contentful* (Enterprise headless CMS and omnichannel experience engines)
  - *Commerce Layer & Critical Payments* (High-concurrency checkout pipelines, multi-currency engines, idempotency & fault tolerance)
  - *AWS & Vercel Cloud* (Docker containers, Linux tuning, and automated CI/CD pipelines via GitHub Actions & GitLab)
- **Featured Innovation — [KOM Trainer](https://github.com/jc9218/KOM-Trainer):** An AI-powered cycling coach integrating Strava v3 & Intervals.icu telemetry, Coggan power distributions (Z1–Z7, NP, IF, TSS), Banister impulse-response modeling (CTL, ATL, TSB), and automated device synchronization to Garmin, Wahoo, Karoo, and COROS.
- **Quantitative Impact Metrics:** +10 years of experience, mentoring 4-6 engineers, 99.9% uptime, and thousands of concurrent ticketing purchases.
- **Career Milestones:** Deep-dive case studies covering leadership roles at **Aplyca**, **Blaucast**, **Asesoftware**, and **Universidad del Valle**.
- **Instant Bilingual Support (EN / ES):** Frictionless switching between English and Spanish with persistent local preferences.
- **Direct Communication Channels:** Instant WhatsApp connection (+57 316 243 8345), 1-click email copying with confetti feedback, LinkedIn, and inquiry contact form.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript (Strict Mode)](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Optimized Brand SVGs |
| **Feedback & FX** | Canvas Confetti |
| **Primary Environment** | WSL2 (Debian Linux) |
| **Cloud & Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
Portafolio/
├── .agent/
│   └── skills/
│       └── portfolio-ops/       # Operational workflows and automation skill
├── public/                      # Static assets, icons, and documents
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS v4 setup and theme definitions
│   │   ├── layout.tsx           # SEO metadata, Geist fonts, and LanguageProvider
│   │   └── page.tsx             # Root page composing all portfolio sections
│   ├── components/
│   │   ├── ArchitectureShowcase.tsx # Interactive 5-tier decoupled architecture diagram
│   │   ├── ContactSection.tsx   # WhatsApp, Email copy, LinkedIn, and direct form
│   │   ├── EducationSection.tsx # Systems Engineering degree and language proficiency
│   │   ├── ExperienceTimeline.tsx # Career milestones, achievements, and tech stacks
│   │   ├── Footer.tsx           # Branding, back-to-top, and social links
│   │   ├── Hero.tsx             # Introduction, availability badge, and quick CTAs
│   │   ├── Icons.tsx            # Optimized vector graphics (GitHub, LinkedIn)
│   │   ├── Metrics.tsx          # Key impact metrics
│   │   ├── Navbar.tsx           # Fixed glassmorphism bar with segmented ES/EN toggle
│   │   └── SkillsSection.tsx    # Categorized competencies matrix
│   ├── context/
│   │   └── LanguageContext.tsx  # Bilingual context provider with localStorage sync
│   └── data/
│       └── portfolio.ts         # Single source of truth for bilingual content
├── AGENTS.md                    # AI agent guidelines and execution rules
├── CLAUDE.md                    # Reference redirect to AGENTS.md
├── package.json
└── README.md                    # This document
```

---

## 🚀 Local Development (WSL Debian)

The active development environment runs natively in WSL Debian at `/home/jc9218/Portafolio`:

```bash
# 1. Navigate to the project directory in WSL
cd /home/jc9218/Portafolio

# 2. Install dependencies
npm install

# 3. Start the Turbopack development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🔄 Strict Repository Synchronization Workflow

Both repositories are unified as the exact same Git repository linked to [github.com/jc9218/Portafolio](https://github.com/jc9218/Portafolio):

1. **Apply and verify changes in WSL Debian (`/home/jc9218/Portafolio`):**
   ```bash
   cd /home/jc9218/Portafolio
   npm run build
   ```
2. **Commit and Push to GitHub from WSL Debian:**
   ```bash
   git add .
   git commit -m "feat/fix: descriptive message"
   git push origin main
   ```
3. **Pull in the Windows repository (`C:\Users\juanc\Documentos\Proyectos\Portafolio`):**
   ```bash
   git pull origin main
   ```

Both repositories remain perfectly synchronized with identical commit hashes.

---

## 🚢 Production Deployment to Vercel

1. Connect your GitHub account (`jc9218`) at [vercel.com](https://vercel.com).
2. Click **"Add New..."** → **"Project"** and select **`Portafolio`**.
3. Vercel automatically detects Next.js:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. Click **"Deploy"**.
5. Every push to the `main` branch automatically triggers an optimized production deployment to Vercel's global edge network.

---

## 📬 Contact Information

- **Juan Camilo López Espitia**
- **Email:** [juancamilolopez10a@gmail.com](mailto:juancamilolopez10a@gmail.com)
- **LinkedIn:** [linkedin.com/in/juan-camilo-lopez-espitia](https://linkedin.com/in/juan-camilo-lopez-espitia)
- **GitHub:** [github.com/jc9218](https://github.com/jc9218)
- **Location:** Cali, Colombia
