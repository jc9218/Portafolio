---
name: portfolio-ops
description: Operaciones, mantenimiento y despliegue del portafolio web de Juan Camilo López Espitia en Windows (C:\Users\juanc\Documentos\Proyectos\Portafolio) y Vercel.
---

# Portfolio Operations & Maintenance Skill

Esta skill proporciona los procedimientos estándar para operar, mantener y desplegar el portafolio web.

## Entorno Oficial de Trabajo

- **Ruta del Proyecto:** `C:\Users\juanc\Documentos\Proyectos\Portafolio`
- **Repositorio Remoto en GitHub:** `https://github.com/jc9218/Portafolio.git`
- Todas las operaciones de desarrollo, instalación de paquetes, compilación y Git se realizan directamente en esta carpeta.

## Procedimientos Clave

### 1. Flujo Estándar de Desarrollo y Despliegue
1. **Modificación de archivos:**
   Realizar los cambios directamente en `C:\Users\juanc\Documentos\Proyectos\Portafolio`.
2. **Validación de compilación:**
   ```powershell
   npm run build
   ```
3. **Commit y Push a GitHub:**
   ```powershell
   git add .
   git commit -m "feat/fix: descripción clara del cambio"
   git push origin main
   ```
4. **Despliegue automático en Vercel:**
   Vercel detecta automáticamente el push a la rama `main` y despliega a producción en su Edge Network.

### 2. Modificación de Datos Bilingües
- Todo el contenido editable reside en `src/data/portfolio.ts`.
- Nunca hardcodear textos directamente en los componentes de UI.
- Mantener siempre la paridad bilingüe (`es` y `en`) en cada campo de texto.
