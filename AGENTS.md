<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Directrices para Agentes de IA (AGENTS.md)

Este documento es la **fuente de verdad técnica** para cualquier agente de IA o desarrollador que interactúe, mantenga o extienda este proyecto.

---

## 1. Entorno de Ejecución y Filosofía de Sincronización

- **Repositorio de Desarrollo Activo (WSL Debian):**
  - Ubicación en Linux: `/home/jc9218/Portafolio` (al mismo nivel que `/home/jc9218/KOM-Trainer`).
- **Repositorio del Proyecto Mapeado (Windows):**
  - Ubicación en Windows: `C:\Users\juanc\Documentos\Proyectos\Portafolio` (`/mnt/c/Users/juanc/Documentos/Proyectos/Portafolio`).

### 🔄 Flujo de Trabajo Obligatorio para Cambios:
1. **Aplicar cambios en WSL Debian:** Toda modificación de archivos, dependencias y configuración se realiza en `/home/jc9218/Portafolio`.
2. **Validar compilación:** Ejecutar `npm run build` en WSL Debian asegurando 0 errores.
3. **Commit y Push desde WSL Debian:** Subir los cambios directamente al repositorio remoto en GitHub desde `/home/jc9218/Portafolio` (`git add .`, `git commit`, `git push origin main`).
4. **Pull en el repositorio de Windows:** Ejecutar inmediatamente `git pull origin main` en el repositorio de Windows (`C:\Users\juanc\Documentos\Proyectos\Portafolio`) para que ambos repositorios compartan exactamente los mismos commits y estado.

---

## 2. Stack Tecnológico & Arquitectura del Proyecto

- **Framework:** Next.js 16 (App Router con Turbopack).
- **Librería de UI:** React 19 con Server Components por defecto y Client Components (`"use client"`) únicamente para interactividad.
- **Tipado:** TypeScript en modo estricto.
- **Estilos:** Tailwind CSS v4 con directiva moderna `@import "tailwindcss";` en `globals.css`.
- **Iconografía:** Lucide React para iconografía general y componentes SVG dedicados en `@/components/Icons.tsx` para marcas (GitHub, LinkedIn).
- **Animaciones & Efectos:** Canvas Confetti para feedback de interacción al copiar correos o enviar formularios.
- **Internacionalización (i18n):** Contexto React nativo (`LanguageProvider`) con soporte dinámico e instantáneo para Español (`es`) e Inglés (`en`).

---

## 3. Estructura de Archivos y Responsabilidades

```text
Portafolio/
├── .agent/
│   └── skills/
│       └── portfolio-ops/        # Skill con instrucciones operativas y de despliegue
├── public/                       # Activos estáticos, favicons y documentos descargables
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css           # Configuración base de Tailwind CSS v4 y tema oscuro
│   │   ├── layout.tsx            # Metadata SEO, fuentes Geist, OpenGraph y LanguageProvider
│   │   └── page.tsx              # Página principal que orquesta todas las secciones
│   ├── components/
│   │   ├── ArchitectureShowcase.tsx # Showcase interactivo de Solutions Architecture desacoplada
│   │   ├── ContactSection.tsx    # Tarjetas de WhatsApp, Email (copia + mailto), LinkedIn y GitHub
│   │   ├── EducationSection.tsx  # Titulación universitaria e idiomas con nivel de dominio
│   │   ├── ExperienceTimeline.tsx # Línea de tiempo profesional, proyectos y logros
│   │   ├── Footer.tsx            # Pie de página y enlaces directos
│   │   ├── Hero.tsx              # Resumen de impacto, badge de disponibilidad y CTAs
│   │   ├── Icons.tsx             # Componentes SVG optimizados para marcas (GitHub, LinkedIn)
│   │   ├── Metrics.tsx           # Métricas de impacto (+10 años, 4-6 devs, 99.9% uptime, transacciones)
│   │   ├── Navbar.tsx            # Barra fija glassmorphism, selector ES/EN y menú responsive
│   │   └── SkillsSection.tsx     # Competencias categorizadas e interactivas
│   ├── context/
│   │   └── LanguageContext.tsx   # Estado global bilingüe con persistencia en localStorage
│   └── data/
│       └── portfolio.ts          # ÚNICA fuente de datos para contenidos, textos y traducciones
├── AGENTS.md                     # Guía maestra y reglas operativas del proyecto
├── CLAUDE.md                     # Enlace de referencia hacia AGENTS.md
├── package.json
└── README.md                     # Documentación general para humanos y reclutadores
```

---

## 4. Guía para Modificaciones Comunes

### A. Modificar Experiencia, Proyectos o Habilidades
- **No modificar directamente los componentes UI.** Toda la información está centralizada en `src/data/portfolio.ts`.
- Mantener siempre la paridad bilingüe (`es` y `en`) en cada campo de texto.

### B. Añadir una Nueva Sección
1. Definir los datos en `src/data/portfolio.ts`.
2. Crear el componente en `src/components/NombreSeccion.tsx`.
3. Importar y renderizar en `src/app/page.tsx`.
4. Añadir el ancla de navegación en `src/components/Navbar.tsx`.

---

## 5. Comandos de Verificación Obligatorios

Antes de hacer commit o desplegar a producción en Vercel, ejecutar en WSL Debian:

```bash
cd /home/jc9218/Portafolio

# Validar compilación de producción y tipos TypeScript
npm run build

# Validar linter
npm run lint
```

---

## 6. Despliegue en Vercel

1. El repositorio en GitHub está conectado con Vercel.
2. Cada `push` a la rama `main` dispara automáticamente un despliegue optimizado en Edge Network de Vercel.
3. El proyecto no requiere variables de entorno obligatorias para funcionar en su versión pública.
