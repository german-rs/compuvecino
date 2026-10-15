# CompuVecino

CompuVecino ofrece soporte técnico y reparación de computadores a domicilio en la Región Metropolitana de Chile, con atención en Lengua de Señas Chilena (LSCh). Acompaña a personas y negocios con soluciones tecnológicas claras, accesibles y explicadas en lenguaje simple, sin exigir conocimientos técnicos previos. El proyecto nace de años de trabajo en informática y soporte técnico.

## Estado actual

- **Tipo**: Landing page de una sola página.
- **URL pública**: [https://compuvecino.cl](https://compuvecino.cl) (alojada en GitHub Pages).
- **Estado**: En construcción. Actualmente el sitio muestra la plantilla inicial de Astro.
- **Contacto**: El canal principal de contacto será un botón de enlace a WhatsApp [pendiente: enlace y número de WhatsApp].

## Stack técnico

### Actual
Verificado en `package.json` y `astro.config.mjs`:
- **Framework**: [Astro](https://astro.build) (`^7.3.8`)
- **Entorno de ejecución**: Node.js (`>=22.12.0`)

### Planificado
Tecnologías previstas para incorporar en el desarrollo de la interfaz:
- React
- Tailwind CSS

*(Pendiente de instalación y configuración en las dependencias del proyecto).*

## Proceso de desarrollo

El proyecto se desarrolla mediante **desarrollo asistido por IA con revisión humana**, utilizando Antigravity CLI. El flujo de trabajo sigue estas etapas:

1. **Propuesta**: El agente de IA investiga el repositorio y propone un plan de implementación detallado antes de realizar cambios.
2. **Revisión**: Una persona revisa y aprueba cada cambio propuesto antes de su aplicación en el código.
3. **Control de versiones**: Los commits, el control de ramas y la publicación hacia producción son ejecutados y controlados exclusivamente por el responsable del proyecto.

## Desarrollo local

### Requisitos previos
- Node.js versión `>=22.12.0`
- npm

### Comandos disponibles

Instalar dependencias:
```sh
npm install
```

Iniciar el servidor de desarrollo local:
```sh
npm run dev
```
> Por defecto, el servidor se ejecuta en `http://localhost:4321`.

Compilar el sitio para producción:
```sh
npm run build
```
> Genera los archivos estáticos listos para publicación en el directorio `./dist/`.

Previsualizar la compilación de producción localmente:
```sh
npm run preview
```

Ejecutar comandos de la CLI de Astro:
```sh
npm run astro
```

## Despliegue

El despliegue está automatizado con GitHub Actions mediante el flujo definido en `.github/workflows/deploy.yml`:

- **Eventos que activan el despliegue**:
  - Cada `push` a la rama `main`.
  - Ejecución manual desde la pestaña de Actions (`workflow_dispatch`).
- **Flujo de trabajos (jobs)**:
  1. `build`: Se ejecuta en un runner `ubuntu-latest`, descarga el repositorio (`actions/checkout@v4`) y procesa la compilación con la acción oficial de Astro (`withastro/action@v6`).
  2. `deploy`: Despliega el artefacto compilado en el entorno de GitHub Pages mediante `actions/deploy-pages@v4`.
- **Dominio en producción**: [https://compuvecino.cl](https://compuvecino.cl).
