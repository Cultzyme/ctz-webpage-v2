# Reporte: instalación de pnpm en el entorno Windows

**Fecha:** 2026-07-30
**Entorno:** Windows, PowerShell, Node v24.18.0
**Proyecto:** ctz-webpage-v2

## Objetivo

Instalar pnpm en la versión que pide el proyecto (`packageManager: pnpm@10.4.1` en `package.json`) y correr `pnpm install`.

## Problemas encontrados y resolución

### 1. `corepack enable` → EPERM en `Program Files`

```
Internal Error: EPERM: operation not permitted, open 'C:\Program Files\nodejs\yarnpkg.CMD'
```

**Causa:** Node está instalado en `C:\Program Files\nodejs\`, carpeta protegida por Windows. Corepack necesita escribir ahí los shims (`pnpm.cmd`, `yarn.cmd`, etc.) y el usuario no tiene permiso de escritura sin elevación.

**Solución:** correr PowerShell como Administrador y repetir `corepack enable`. Funcionó sin error.

### 2. Activación de la versión pinneada

```powershell
corepack prepare pnpm@10.4.1 --activate
pnpm -v   # → 10.4.1
```

Corepack lee el campo `packageManager` del `package.json` (con hash SHA512 de integridad) y garantiza que todo el equipo use exactamente esa versión, evitando divergencias de lockfile entre máquinas.

### 3. `pnpm install` → EPERM persistente en rename

```
ERR_PNPM_EPERM  EPERM: operation not permitted, rename
'...\node_modules\.pnpm\pnpm@10.18.1\node_modules\pnpm_tmp_XXXXX' ->
'...\node_modules\.pnpm\pnpm@10.18.1\node_modules\pnpm'
```

Se reprodujo dos veces en el mismo punto exacto (instalación de `pnpm` como devDependency de sí mismo) — descartando causa transitoria (antivirus escaneando en el momento).

**Diagnóstico:** el proyecto vive dentro de `C:\Users\anton\Documents\...`, una carpeta especial de Windows sujeta a **Acceso Controlado a Carpetas** (protección anti-ransomware de Windows Defender), que bloquea a procesos no autorizados (como `node.exe`) escribir/renombrar archivos ahí adentro. Esto también puede coincidir con sincronización de OneDrive o indexación de Windows Search sobre `node_modules`.

**Solución adoptada:** mover el proyecto fuera de `Documents`, a una carpeta plana sin esas protecciones especiales:

```powershell
Move-Item "C:\Users\anton\Documents\cultzyme\ctz-webpage\ctz-webpage-v2" "C:\dev\ctz-webpage-v2"
cd C:\dev\ctz-webpage-v2
pnpm install
```

## Estado al cierre de la sesión

- [x] Node verificado (v24.18.0)
- [x] Corepack habilitado (requirió PowerShell admin)
- [x] pnpm 10.4.1 activado y verificado
- [ ] **Pendiente de confirmar:** `pnpm install` corriendo OK desde la nueva ubicación `C:\dev\ctz-webpage-v2`

## Recomendaciones a futuro

- No ubicar repos de desarrollo dentro de `Documents`, `Desktop` o `Pictures` — son carpetas especiales sujetas a Acceso Controlado a Carpetas, OneDrive Known Folder Move e indexación agresiva, todas fuentes típicas de EPERM/EBUSY en herramientas Node.
- Agregar la carpeta de proyectos (ej. `C:\dev`) como exclusión en Windows Defender para acelerar instalaciones y builds (node_modules tiene decenas de miles de archivos chicos que el escaneo en tiempo real ralentiza mucho).
- Usar siempre Corepack (no `npm install -g pnpm`) para respetar el versionado pinneado en `packageManager`.
