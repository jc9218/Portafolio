---
name: portfolio-ops
description: Operations, maintenance, and deployment workflows for Juan Camilo López Espitia's web portfolio in Windows (C:\Users\juanc\Documentos\Proyectos\Portafolio) and Vercel.
---

# Portfolio Operations & Maintenance Skill

This skill provides standard operating procedures to maintain, update, and deploy the professional web portfolio.

## Official Working Environment

- **Project Path:** `C:\Users\juanc\Documentos\Proyectos\Portafolio`
- **Remote GitHub Repository:** `https://github.com/jc9218/Portafolio.git`
- All development, package management, compilation, and Git operations are executed directly within this folder.
- **Package Manager:** Yarn 4 (Berry) with `nodeLinker: node-modules`.

## Key Procedures

### 1. Standard Development & Deployment Workflow
1. **File Modifications:**
   Apply changes directly inside `C:\Users\juanc\Documentos\Proyectos\Portafolio`.
2. **Build Validation:**
   ```powershell
   yarn build
   ```
3. **Commit & Push to GitHub:**
   ```powershell
   git add .
   git commit -m "feat/fix: clear change summary"
   git push origin main
   ```
4. **Automated Vercel Deployment:**
   Vercel automatically detects the push to the `main` branch and deploys the production build across its global Edge Network.

### 2. Bilingual Content Modifications
- All editable text and profile data resides exclusively in `src/data/portfolio.ts`.
- Never hardcode user-facing strings directly inside presentation components.
- Always maintain complete bilingual parity (`es` and `en`) for every field.
