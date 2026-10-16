# CompuVecino

<<<<<<< HEAD
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
=======
Sitio web: [https://compuvecino.cl](https://compuvecino.cl)

CompuVecino ofrece soporte técnico y reparación de computadores a domicilio en la Región Metropolitana de Chile, con atención en Lengua de Señas Chilena (LSCh).

Acompaña a personas y negocios con soluciones tecnológicas claras, accesibles y explicadas en lenguaje simple, sin exigir conocimientos técnicos previos. El proyecto nace de años de trabajo en informática y soporte técnico.

## Estado actual

El proyecto consiste en una landing page de una sola página publicada en [compuvecino.cl](https://compuvecino.cl) mediante GitHub Pages.

El canal de contacto principal será mediante un botón de WhatsApp ([pendiente]). Actualmente, el sitio web se encuentra en construcción y muestra los componentes base iniciales de Astro.

## Stack técnico

### Actual
- **Astro**: `^7.3.8` (generador de sitios estáticos y framework principal).
- **Node.js**: `>=22.12.0` (entorno de ejecución especificado en `package.json`).
- **GitHub Pages**: Plataforma de alojamiento estático vinculada al dominio personalizado [https://compuvecino.cl](https://compuvecino.cl).

*Nota:* El directorio `src/` contiene actualmente los componentes base iniciales de la plantilla de Astro (`Welcome.astro`, `Layout.astro`, `index.astro`).

### Planificado
- **React**: Biblioteca para componentes de interfaz de usuario interactivos.
- **Tailwind CSS**: Framework de estilos y utilidades CSS.

*(No se especifican versiones para las dependencias planificadas hasta su instalación y configuración formal).*

## Proceso de desarrollo

Este proyecto se desarrolla mediante **desarrollo con agentes de IA con revisión humana**:
- Se utiliza el desarrollo con agentes de IA (Antigravity CLI) como herramienta de trabajo técnico.
- Flujo de trabajo: el agente de IA analiza requerimientos y propone un plan de acción; una persona revisa cada cambio antes de aprobarlo.
- El control de versiones (commits), fusiones y publicación en producción los controla directamente el responsable del proyecto.

## Desarrollo local

### Requisitos previos
- Node.js `>=22.12.0`
- npm

### Comandos disponibles
Comandos configurados en `package.json`:

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compila el sitio estático para producción en el directorio `./dist/`. |
| `npm run preview` | Previsualiza localmente el resultado de la compilación de producción. |
| `npm run astro` | Ejecuta la interfaz de línea de comandos de Astro. |

## Despliegue

El despliegue está automatizado mediante GitHub Actions según la configuración en `.github/workflows/deploy.yml`:

- **Disparadores**:
  - Evento `push` en la rama `main`.
  - Ejecución manual desde la pestaña Actions de GitHub (`workflow_dispatch`).
- **Flujo de CI/CD**:
  1. **Job `build`**: Se ejecuta en `ubuntu-latest`. Clona el repositorio (`actions/checkout@v4`) y realiza la instalación de dependencias, compilación y subida del artefacto con `withastro/action@v6`.
  2. **Job `deploy`**: Se ejecuta tras completar el build y publica el contenido en GitHub Pages (`actions/deploy-pages@v4`) en el entorno `github-pages`.
- **URL de producción**: [https://compuvecino.cl](https://compuvecino.cl).
>>>>>>> d88b4a0 (Actualiza README con información, stack y flujo de desarrollo del proyecto)
