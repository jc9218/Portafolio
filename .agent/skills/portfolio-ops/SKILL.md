---
name: portfolio-ops
description: Operaciones, mantenimiento, sincronización y despliegue del portafolio web de Juan Camilo López Espitia en WSL Debian y Vercel.
---

# Portfolio Operations & Maintenance Skill

Esta skill proporciona los procedimientos estándar para operar, sincronizar y desplegar el portafolio web.

## Cuándo usar esta skill

Utiliza esta skill cuando necesites:
1. Actualizar datos de experiencia, proyectos o habilidades técnicas del CV.
2. Sincronizar cambios entre el entorno de Windows y el entorno Linux WSL Debian (`/home/jc9218/Portafolio`).
3. Ejecutar builds y pruebas de compilación estricta de TypeScript y Turbopack.
4. Desplegar o publicar nuevas versiones a GitHub y Vercel.

## Procedimientos Clave

### 1. Flujo Estándar de Cambios y Sincronización
1. **Edición & Verificación en WSL Debian:**
   Realizar los cambios y compilar en `/home/jc9218/Portafolio`:
   ```bash
   cd /home/jc9218/Portafolio
   npm run build
   ```
2. **Commit y Push desde WSL Debian a GitHub:**
   ```bash
   cd /home/jc9218/Portafolio
   git add .
   git commit -m "Mensaje descriptivo del cambio"
   git push origin main
   ```
3. **Pull en el Repositorio de Windows:**
   ```bash
   cd C:\Users\juanc\Documentos\Proyectos\Portafolio
   git pull origin main
   ```
   Ambos repositorios quedan idénticos con el mismo árbol de Git.

### 2. Verificación de Compilación
Ejecutar siempre la compilación dentro de WSL Debian:
```bash
wsl -- bash -c "cd /home/jc9218/Portafolio && npm run build"
```

### 3. Modificación de Datos Bilingües
- Todo el contenido editable reside en `src/data/portfolio.ts`.
- Nunca hardcodear textos directamente en los componentes de UI.
- Garantizar que cada nueva clave tenga su traducción tanto en español (`es`) como en inglés (`en`).

### 4. Despliegue en Vercel
1. Confirmar que `npm run build` pase con código de salida 0.
2. Realizar commit y push a la rama `main` en GitHub.
3. Vercel desplegará automáticamente la nueva versión en producción.
