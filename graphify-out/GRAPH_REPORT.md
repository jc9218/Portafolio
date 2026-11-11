# Graph Report - Portafolio  (2026-11-11)

## Corpus Check
- 46 files · ~23,083 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .example 1, .css 1)

## Summary
- 301 nodes · 537 edges · 15 communities (14 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `90f42d8b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- react
- projects/types.ts
- layout.tsx
- compilerOptions
- TechIcon.tsx
- 🏛️ The Five SOLID Principles in React & TypeScript
- with
- scripts
- updates
- postcss.config.mjs
- steps
- Engineering Guidelines & AI Agent Rules (`AGENTS.md`)
- Juan Camilo López Espitia — Engineering Portfolio
- .yarnrc.yml

## God Nodes (most connected - your core abstractions)
1. `react` - 28 edges
2. `useLanguage()` - 22 edges
3. `TechIcon()` - 17 edges
4. `lucide-react` - 16 edges
5. `compilerOptions` - 16 edges
6. `Language` - 12 edges
7. `PORTFOLIO_DATA` - 12 edges
8. `Home()` - 11 edges
9. `with` - 9 edges
10. `GithubIcon()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `💡 Refactoring Recipe` --references--> `ProjectPreviewProps`  [INFERRED]
  .github/skills/solid-principles/SKILL.md → src/components/projects/types.ts
- `💡 Refactoring Recipe` --references--> `useLanguage()`  [INFERRED]
  .github/skills/solid-principles/SKILL.md → src/context/LanguageContext.tsx
- `🚩 Anti-Patterns (Smells)` --references--> `PersonalProject`  [INFERRED]
  .github/skills/solid-principles/SKILL.md → src/data/portfolio.ts
- `ExperienceTimeline()` --calls--> `ExperienceCard()`  [EXTRACTED]
  src/components/ExperienceTimeline.tsx → src/components/experience/ExperienceCard.tsx
- `FeaturedProjects()` --calls--> `ProjectCard()`  [EXTRACTED]
  src/components/FeaturedProjects.tsx → src/components/projects/ProjectCard.tsx

## Import Cycles
- None detected.

## Communities (15 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (46): eslintConfig, author, email, name, url, dependencies, canvas-confetti@^1.9.4, lucide-react@^1.68.0 (+38 more)

### Community 1 - "react"
Cohesion: 0.22
Nodes (21): react, Home(), ContactSection(), EducationSection(), ExperienceTimeline(), FeaturedProjects(), Footer(), Hero() (+13 more)

### Community 2 - "projects/types.ts"
Cohesion: 0.17
Nodes (19): lucide-react, KomTrainerPreview(), MultimodalRagPreview(), PolyvaPreview(), PROJECT_PREVIEW_REGISTRY, ProjectPreview(), ProjectPreviewHostProps, ProjectActions() (+11 more)

### Community 3 - "layout.tsx"
Cohesion: 0.14
Nodes (11): nextConfig, securityHeaders, next, geistMono, geistSans, metadata, RootLayout(), viewport (+3 more)

### Community 4 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "TechIcon.tsx"
Cohesion: 0.22
Nodes (13): ExperienceCard(), ProjectExperienceItem(), ExperienceCardProps, ProjectExperienceItemProps, getTechIconKey(), IconDefinition, TECH_ICONS, TechBadge() (+5 more)

### Community 6 - "🏛️ The Five SOLID Principles in React & TypeScript"
Cohesion: 0.08
Nodes (24): 1. S — Single Responsibility Principle (SRP), 2. O — Open/Closed Principle (OCP), 3. L — Liskov Substitution Principle (LSP), 4. I — Interface Segregation Principle (ISP), 5. D — Dependency Inversion Principle (DIP), 🚩 Anti-Patterns (Smells), 🚩 Anti-Patterns (Smells), 🚩 Anti-Patterns (Smells) (+16 more)

### Community 7 - "with"
Cohesion: 0.08
Nodes (24): jobs, update-dependencies, name, on, schedule, workflow_dispatch, permissions, contents (+16 more)

### Community 8 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, start, typecheck, update:deps

### Community 9 - "updates"
Cohesion: 0.10
Nodes (20): patterns, prefix, patterns, all-dependencies, github-actions, dependency-name, versions, day (+12 more)

### Community 11 - "steps"
Cohesion: 0.11
Nodes (18): jobs, quality, name, on, pull_request, push, permissions, contents (+10 more)

### Community 12 - "Engineering Guidelines & AI Agent Rules (`AGENTS.md`)"
Cohesion: 0.13
Nodes (14): 1.1 Conventional Commits Specification, 1.2 Linear, Atomic & Curated Git History, 1. Repository Hygiene & Commit Standards (MANDATORY), 2. Primary Execution Environment & Workflow, 3. Technology Stack & Architecture, 4. Directory Structure & Responsibilities, 5. Common Modification Guides, 6. Production Domain & Environment Variables (+6 more)

### Community 13 - "Juan Camilo López Espitia — Engineering Portfolio"
Cohesion: 0.17
Nodes (11): 📬 Contact, 📐 Engineering & Commit Standards, 🚀 Getting Started, Juan Camilo López Espitia — Engineering Portfolio, ⚡ Key Highlights, Local Development, Prerequisites, Project Knowledge Graph (+3 more)

### Community 14 - ".yarnrc.yml"
Cohesion: 0.40
Nodes (4): approvedGitRepositories, enableScripts, nodeLinker, npmMinimalAgeGate

## Knowledge Gaps
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `projects/types.ts`, `layout.tsx`, `TechIcon.tsx`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05102040816326531 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `react` to `🏛️ The Five SOLID Principles in React & TypeScript`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `🏛️ The Five SOLID Principles in React & TypeScript` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `with` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._