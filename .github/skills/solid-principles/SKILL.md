---
name: solid-principles
description: >-
  Guides the systematic auditing, refactoring, and implementation of SOLID architectural
  design principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface
  Segregation, Dependency Inversion) tailored for modern TypeScript, React 19, Next.js 16,
  and full-stack software architectures. Use when evaluating code craftsmanship, decoupling
  monolithic components, designing extensible registry patterns, or isolating interfaces.
---

# SOLID Principles for Modern Frontend & Full-Stack Architectures

This skill provides practical, production-tested architectural guidelines and refactoring patterns to apply the five **SOLID** principles to modern TypeScript, React (Server and Client Components), Next.js, and web application codebases.

---

## 🏛️ The Five SOLID Principles in React & TypeScript

### 1. S — Single Responsibility Principle (SRP)
> *"A module, class, or component should have one, and only one, reason to change."*

#### 🎯 Goal in Modern Web Apps
A component or module should focus on a single cohesive responsibility: layout orchestration, user interaction feedback, specialized rendering, or business logic.

#### 🚩 Anti-Patterns (Smells)
- A single component file (`>250 lines`) mixing section headers, card frames, action link buttons, checklist items, and project-specific widgets.
- Direct invocation of browser APIs (`navigator.clipboard`, `window.localStorage`, `Notification`, canvas animations) inside UI rendering functions.
- Mixing data fetching, state machine transitions, and complex SVG rendering in the same component.

#### 💡 Refactoring Recipe
1. **Extract Custom Hooks:** Move side-effects, browser API integrations, timers, and clipboard interactions into dedicated hooks (e.g., `useClipboard.ts`, `useWindowScroll.ts`).
2. **Decompose UI Hierarchies:**
   - **Section Orchestrator:** Manages section container, semantic tag (`<section id="...">`), headings, and grid layout.
   - **Entity Card:** Coordinates layout and delegates sub-parts to specialized atoms.
   - **Action Bar (`ProjectActions`):** Handles CTAs, links, and access badges.
   - **Feature Checklist (`ProjectFeatures`):** Renders bulleted capabilities.
   - **Tech Badge List (`ProjectTechStack`):** Maps technology tokens to brand icons.

---

### 2. O — Open/Closed Principle (OCP)
> *"Software entities (classes, modules, functions, components) should be open for extension, but closed for modification."*

#### 🎯 Goal in Modern Web Apps
You should be able to introduce new widgets, card variants, or domain features without modifying existing orchestrator components or chaining `if/else` / `switch` statements.

#### 🚩 Anti-Patterns (Smells)
- Hardcoded conditional blocks in parent components:
  ```tsx
  {project.id === "project-a" && <ProjectAPreview />}
  {project.id === "project-b" && <ProjectBPreview />}
  {project.id === "project-c" && <ProjectCPreview />}
  ```
  Every new project requires opening and editing the main component file.

#### 💡 Refactoring Recipe: The Component Registry Pattern
1. Define a shared contract interface for the plugin/preview components:
   ```typescript
   export interface ProjectPreviewProps {
     language: Language;
   }
   ```
2. Build an extensible registry map:
   ```typescript
   export const PREVIEW_REGISTRY: Record<string, React.ComponentType<ProjectPreviewProps>> = {
     "kom-trainer": KomTrainerPreview,
     "polyva": PolyvaPreview,
     "multimodal-rag": MultimodalRagPreview,
   };
   ```
3. Implement a dynamic host component:
   ```tsx
   export function ProjectPreview({ projectId, language }: { projectId: string; language: Language }) {
     const PreviewComponent = PREVIEW_REGISTRY[projectId];
     if (!PreviewComponent) return null;
     return <PreviewComponent language={language} />;
   }
   ```
Adding a 4th project with custom telemetry now only requires creating the new widget and adding 1 line to the registry. The parent card and section remain completely unmodified.

---

### 3. L — Liskov Substitution Principle (LSP)
> *"Subtypes or component implementations conforming to a common contract must be substitutable for one another without altering the correctness of the program."*

#### 🎯 Goal in Modern Web Apps
Any widget or sub-component that implements a common interface should be interchangeable without surprising side-effects, layout breakage, or missing required attributes.

#### 🚩 Anti-Patterns (Smells)
- Preview A expects `{ language: Language }`, Preview B expects `{ id: string, onSelect: () => void }`, and Preview C expects no props, forcing parent components to pass arbitrary, undocumented parameters.
- Substituting one component for another breaks visual alignment or causes unhandled exceptions.

#### 💡 Refactoring Recipe
1. Guarantee that all sibling components registered under a shared category conform strictly to the identical interface contract (`ProjectPreviewProps`).
2. Standardize container constraints (e.g. `lg:col-span-5 p-3.5 sm:p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 font-mono`) so any substituted preview widget renders reliably within the parent grid layout.

---

### 4. I — Interface Segregation Principle (ISP)
> *"Clients should not be forced to depend upon interfaces, types, or props they do not use."*

#### 🎯 Goal in Modern Web Apps
Prop interfaces should be atomic and fine-grained. Avoid "fat props" where an entire monolithic entity is passed down to a child that only needs one or two fields.

#### 🚩 Anti-Patterns (Smells)
- Passing an entire `PersonalProject` (including 50+ lines of descriptions, dates, utility narratives) to an action button bar that only needs `liveUrl`, `githubUrl`, and `isPrivateRepo`.
- Changes to an unrelated field on a database or data model force re-typing or unnecessary re-renders of unrelated subcomponents.

#### 💡 Refactoring Recipe
Define segregated, purpose-built interfaces in `types.ts`:
```typescript
// Fat / Violating Interface:
interface BadActionsProps {
  project: PersonalProject; // Contains 15 fields unused by actions!
}

// Segregated / Compliant Interfaces:
export interface ProjectActionsProps {
  githubUrl?: string;
  liveUrl?: string;
  isPrivateRepo?: boolean;
  language: Language;
}

export interface ProjectFeaturesProps {
  features: string[];
  language: Language;
}

export interface ProjectTechStackProps {
  technologies: string[];
  language: Language;
}
```

---

### 5. D — Dependency Inversion Principle (DIP)
> *"High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions."*

#### 🎯 Goal in Modern Web Apps
UI components should depend on abstractions (React Context, custom hooks, prop contracts, component registries) rather than concrete implementations (direct DOM API calls, hardcoded singleton clients, global browser objects).

#### 🚩 Anti-Patterns (Smells)
- Directly coupling a presentation button to `navigator.clipboard.writeText(...)` with inline `setTimeout`.
- Direct global coupling to `localStorage` or `fetch` inside deeply nested presentation components.

#### 💡 Refactoring Recipe
1. **Hook Abstraction for APIs:**
   ```tsx
   // Low-level detail encapsulated behind an abstraction:
   const { copied, copy } = useClipboard({ timeout: 2000, enableConfetti: true });
   
   // High-level presentation depends only on the interface:
   <button onClick={() => copy(personal.email)}>
     {copied ? <Check /> : <Copy />}
   </button>
   ```
2. **Context Provider for Global State:**
   Components consume `useLanguage()` (an abstraction over bilingual state and local persistence) without knowing or caring how `localStorage` is queried or synchronized.

---

## 📋 Senior-Level SOLID Audit Checklist

When reviewing or refactoring any component in the repository, evaluate:

- [ ] **SRP:** Does this file exceed 150–200 lines? If so, does it have multiple reasons to change (layout, state, actions, formatting)?
- [ ] **SRP:** Are browser APIs (clipboard, timers, scroll, storage) decoupled into custom hooks in `src/hooks/`?
- [ ] **OCP:** Does adding a new item/variant require editing an existing component's `switch` or ternary chain? Can a registry or composition pattern eliminate this?
- [ ] **LSP:** Do all components implementing a shared slot accept identical prop contracts and honor parent container layout boundaries?
- [ ] **ISP:** Are child components receiving only the exact slice of props they consume, or are they receiving monolithic parent models?
- [ ] **DIP:** Are high-level view components decoupled from low-level imperative browser logic via custom hooks or React contexts?

---

## 🛠️ Verification Commands

Always verify that refactored code passes strict static analysis and zero-warning compilation:

```bash
# 1. ESLint Check
yarn lint

# 2. TypeScript Strict Typecheck
yarn typecheck

# 3. Next.js Production Build
yarn build
```
