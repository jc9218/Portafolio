# Graph Report - Portafolio  (2026-11-25)

## Corpus Check
- 52 files · ~23,551 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .example 1, .css 1)

## Summary
- 317 nodes · 573 edges · 21 communities (19 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `db23f762`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
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
- package.json
- dependencies
- eslint.config.mjs
- author
- repository
- @types/react-dom@^19.3.0

## God Nodes (most connected - your core abstractions)
1. `react` - 30 edges
2. `useLanguage()` - 26 edges
3. `lucide-react` - 17 edges
4. `TechIcon()` - 16 edges
5. `compilerOptions` - 16 edges
6. `Home()` - 12 edges
7. `PORTFOLIO_DATA` - 12 edges
8. `Language` - 11 edges
9. `next` - 10 edges
10. `with` - 9 edges

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

## Communities (21 total, 2 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.15
Nodes (13): devDependencies, tailwindcss@^4.3.5, @tailwindcss/postcss@^4.3.5, @types/canvas-confetti@^1.9.0, @types/node@^26.6.6, @types/react@^19.3.0, typescript@^6.0.3, tailwindcss (+5 more)

### Community 1 - "react"
Cohesion: 0.17
Nodes (26): react, NotFound(), Home(), ContactSection(), EducationSection(), ExperienceTimeline(), FeaturedProjects(), Footer() (+18 more)

### Community 2 - "projects/types.ts"
Cohesion: 0.16
Nodes (20): 🚩 Anti-Patterns (Smells), lucide-react, KomTrainerPreview(), MultimodalRagPreview(), PolyvaPreview(), PROJECT_PREVIEW_REGISTRY, ProjectPreview(), ProjectPreviewHostProps (+12 more)

### Community 3 - "layout.tsx"
Cohesion: 0.08
Nodes (18): contentSecurityPolicy, nextConfig, securityHeaders, next, contentType, size, geistMono, geistSans (+10 more)

### Community 4 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "TechIcon.tsx"
Cohesion: 0.27
Nodes (10): ExperienceCard(), ProjectExperienceItem(), ExperienceCardProps, ProjectExperienceItemProps, IconDefinition, TECH_ICONS, TechIcon(), TechIconProps (+2 more)

### Community 6 - "🏛️ The Five SOLID Principles in React & TypeScript"
Cohesion: 0.08
Nodes (23): 1. S — Single Responsibility Principle (SRP), 2. O — Open/Closed Principle (OCP), 3. L — Liskov Substitution Principle (LSP), 4. I — Interface Segregation Principle (ISP), 5. D — Dependency Inversion Principle (DIP), 🚩 Anti-Patterns (Smells), 🚩 Anti-Patterns (Smells), 🚩 Anti-Patterns (Smells) (+15 more)

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

### Community 15 - "package.json"
Cohesion: 0.20
Nodes (9): description, engines, node, homepage, keywords, license, name, packageManager (+1 more)

### Community 16 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, canvas-confetti@^1.9.4, lucide-react@^1.76.0, next@^16.4.6, react@^19.3.1, react-dom@^19.3.1, canvas-confetti, react-dom

### Community 17 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9.39.5, eslint-config-next@^16.4.6, eslint, eslint-config-next

### Community 18 - "author"
Cohesion: 0.50
Nodes (4): author, email, name, url

### Community 19 - "repository"
Cohesion: 0.67
Nodes (3): repository, type, url

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `projects/types.ts`, `layout.tsx`, `TechIcon.tsx`, `package.json`, `dependencies`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `layout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08235294117647059 - nodes in this community are weakly interconnected._
- **Why does `next` connect `layout.tsx` to `dependencies`, `react`, `package.json`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Why does `useLanguage()` connect `react` to `🏛️ The Five SOLID Principles in React & TypeScript`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `🏛️ The Five SOLID Principles in React & TypeScript` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `with` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._