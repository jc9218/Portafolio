---
name: portfolio-ops
description: Operations, maintenance, and deployment workflows for Juan Camilo López Espitia's web portfolio in WSL Debian (/home/jc9218/Portafolio) and Vercel.
---

# Portfolio Operations & Maintenance Skill

This skill provides standard operating procedures to maintain, update, and deploy the portfolio website.

## Mandatory Execution Environment

- **Primary & Active Working Directory (WSL Debian):**
  - Path: `/home/jc9218/Portafolio` (at the same level as `/home/jc9218/KOM-Trainer`).
  - **MANDATORY RULE:** **Always work inside the WSL repository.** All code edits, dependencies (`yarn`), builds (`yarn build`), and Git operations (`git commit`, `git push`) must be executed inside WSL Debian.
- **Windows Project Directory (Mirror Only):**
  - Path: `C:\Users\juanc\Documentos\Proyectos\Portafolio`
  - This folder is strictly a mirror. Do **not** install dependencies, mount, or build in Windows.
  - Simply keep it synchronized with `git pull origin main`.

## Key Procedures

### 1. Standard Development & Deployment Workflow
1. **Apply Edits in WSL Debian:**
   Modify files directly in `/home/jc9218/Portafolio`.
2. **Build Validation:**
   ```bash
   cd /home/jc9218/Portafolio
   yarn build
   ```
3. **Commit & Push to GitHub from WSL Debian:**
   ```bash
   cd /home/jc9218/Portafolio
   git add .
   git commit -m "feat/fix: descriptive summary"
   git push origin main
   ```
4. **Update Windows Mirror:**
   ```powershell
   cd C:\Users\juanc\Documentos\Proyectos\Portafolio
   git pull origin main
   ```
5. **Automated Vercel Deployment:**
   Vercel automatically detects the push to `main` and deploys to production edge.

### 2. Bilingual Content Modifications
- All editable text and profile data resides exclusively in `src/data/portfolio.ts`.
- Maintain complete bilingual parity (`es` and `en`) for every field.
