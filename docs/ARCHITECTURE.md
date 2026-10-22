# ARCHITECTURE — compuvecino.cl

> Documento de referencia técnica. Lo leen personas y agentes de IA (Antigravity, Claude).
> Las reglas están escritas en imperativo: si una regla choca con una petición, avisa antes de saltarla.
> Documentos hermanos: [`BRAND.md`](./BRAND.md) (marca y lenguaje) y [`WEB_STYLE_GUIDE.md`](./WEB_STYLE_GUIDE.md) (diseño y componentes).

## 1. Propósito y alcance

Sitio web de **CompuVecino**: soporte técnico de computadores a domicilio, en taller y remoto, con atención en Lengua de Señas Chilena (LSCh).

- **Dentro del alcance:** presentar los servicios de soporte, mostrar precios de referencia y llevar a la persona a WhatsApp.
- **Fuera del alcance:** desarrollo web y cursos. Esos servicios viven en otros sitios. No los agregues aquí.
- **Etapa actual:** una sola landing. El contacto es un botón de WhatsApp; no hay formulario ni backend.
- **Conversión:** todo el sitio empuja a una acción: escribir por WhatsApp.

## 2. Stack

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Astro | Sitio estático. Configurado con `site: "https://compuvecino.cl"`. |
| Interactividad | React | Solo en islas (ver sección 5). |
| Estilos | Tailwind CSS | Tokens como variables CSS (ver `WEB_STYLE_GUIDE.md`). |
| Lenguaje | TypeScript | Modo estricto (`tsconfig.json`). |
| 3D | three + @react-three/fiber + @react-three/drei | Solo en el hero. Carga diferida. |
| Fondos | React Bits (código copiado al repo) | Aurora, Particles o Galaxy. Ver sección 7. |
| Animación | Motion (framer-motion) | Entradas y microinteracciones. |
| Scroll | Lenis | Un único `SmoothScroll`. |
| Iconos | lucide-react | Sin emojis en la interfaz. |
| Hosting | GitHub Pages | Dominio propio. Despliegue por GitHub Actions. |

Si una dependencia de esta tabla no está en `package.json`, instálala con `npm install` antes de usarla. No agregues otras librerías de UI, animación o 3D sin documentarlo en la sección 11.

## 3. Principios de arquitectura

1. **HTML primero.** Todo el contenido (textos, precios, pasos) se renderiza como HTML estático en Astro. El sitio debe leerse y funcionar sin JavaScript.
2. **JavaScript solo donde se ve.** React se usa únicamente para lo que necesita interactividad: la escena 3D, el fondo animado y el efecto de inclinación.
3. **El contenido no vive en los componentes.** Textos, precios, enlaces y datos de contacto están en `src/data/`. Los componentes reciben todo por props.
4. **Rendimiento antes que espectáculo.** El efecto 3D es parte de la marca, pero nunca debe bloquear la lectura, el CTA ni el Largest Contentful Paint.
5. **Accesible por defecto.** La atención inclusiva es parte de la propuesta de valor. Un componente que no cumple la lista de `WEB_STYLE_GUIDE.md` §12 no se publica.

## 4. Estructura de carpetas

```
/
├── .github/workflows/        # Despliegue a GitHub Pages
├── docs/                     # Este documento y sus hermanos
├── public/
│   ├── favicon.svg
│   ├── CNAME                 # compuvecino.cl (dominio propio)
│   ├── og-image.png          # 1200×630
│   └── fonts/                # Solo si se alojan fuentes localmente
├── src/
│   ├── assets/               # Imágenes procesadas por Astro
│   ├── components/
│   │   ├── ui/               # Button, TiltCard, SectionHeading, WhatsAppButton
│   │   ├── hero/             # HeroBackground, Hero3D, HeroSection
│   │   └── sections/         # Services, Modalities, Process, Pricing, Inclusion, FinalCta
│   ├── data/
│   │   └── site.ts           # Textos, servicios, precios, pasos, contacto
│   ├── layouts/
│   │   └── Layout.astro      # <head>, SEO, JSON-LD, fuentes, SmoothScroll
│   ├── pages/
│   │   └── index.astro       # Compone las secciones
│   └── styles/
│       ├── tokens.css        # Variables de diseño (fuente de verdad)
│       └── global.css        # Base, reset, utilidades
├── AGENTS.md / CLAUDE.md     # Instrucciones para agentes (apuntan a /docs)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Reglas:
- Un componente por archivo. Nombre en `PascalCase`.
- Las secciones de la página viven en `sections/` y son componentes `.astro` (sin JS) salvo que necesiten una isla.
- No crees carpetas nuevas en `src/` sin actualizar este documento.

## 5. Islas de React y directivas de hidratación

Astro envía HTML sin JavaScript. Un componente de React solo se activa si lo marcas con una directiva `client:*`.

| Componente | Tipo | Directiva | Motivo |
|---|---|---|---|
| `Hero3D` | React (WebGL) | `client:only="react"`, con `fallback` estático | WebGL no existe en el servidor. El fallback evita un hueco al cargar. |
| `HeroBackground` | React (WebGL) | `client:only="react"` | Mismo motivo. |
| `TiltCard` | React o JS mínimo | `client:visible` | Solo se activa al entrar en pantalla. |
| `SmoothScroll` | React o script | `client:idle` | No es crítico para el primer render. |
| `Button`, `SectionHeading`, `ServiceCard`, `PriceCard`, `StepCard` | `.astro` | Ninguna | Son HTML estático. |
| `WhatsAppButton` | `.astro` | Ninguna | Es un enlace. |

Reglas:
- **No uses `client:load`** salvo que lo justifiques por escrito en este documento.
- No accedas a `window` ni `document` fuera de `useEffect` en componentes React.
- Cada isla recibe props simples y serializables (texto, números, booleanos). Nada de funciones ni instancias de clase.
- Las islas no comparten estado. Si dos islas necesitan hablar, vuelve a pensar la división.

## 6. Datos y contenido

`src/data/site.ts` es la única fuente de textos y datos:

```ts
export const site = {
  name: "CompuVecino",
  url: "https://compuvecino.cl",
  phone: "+56 9 8296 0453",            // confirmar antes de publicar
  whatsapp: "https://wa.me/56982960453",
  hero: { /* eyebrow, title, highlightWord, description, ctas, highlights */ },
  services: [ /* { number, title, text, ctaLabel, href } */ ],
  modalities: [ /* { tag, title, text } */ ],
  steps: [ /* { number, title, text } */ ],
  prices: [ /* { title, price, items, ctaLabel, href } */ ],
};
```

Reglas:
- Todo texto visible sale de `site.ts` o de un archivo en `src/data/`. No escribas textos sueltos dentro de componentes.
- **Los precios son de referencia.** Mantén en pantalla la aclaración de que el presupuesto final se confirma tras el diagnóstico.
- No inventes testimonios, cifras, logos ni certificaciones. Si falta un dato, deja un marcador entre corchetes: `[PLAN BÁSICO — valor por confirmar]`.
- Todo lo que se escriba debe respetar `BRAND.md` §5 (lenguaje).

## 7. Escena 3D y fondos

Composición del hero (detalle visual en `WEB_STYLE_GUIDE.md` §9):
1. `HeroBackground`: fondo de React Bits en verde, más un piso de grilla en perspectiva hecho con CSS.
2. `Hero3D`: laptop modelado con geometrías simples, anillos orbitales, cubos de cristal, partículas y tarjetas flotantes. Sigue al mouse y se mece solo.
3. `HeroSection`: compone lo anterior con el bloque de texto.

Reglas de rendimiento (obligatorias):
- Pixel ratio máximo: `2` (`dpr={[1, 2]}`).
- En móvil y con `prefers-reduced-motion: reduce`, **no montes el canvas**: muestra una imagen estática.
- Carga diferida: el bundle de `three` no debe estar en el JavaScript inicial. Usa `React.lazy` + `Suspense` o `client:only`.
- El título (`h1`) y el CTA principal deben pintarse sin esperar al 3D.
- Geometrías simples y pocas luces. Sin modelos `.glb` pesados; si se usa uno, máximo 500 KB.
- Pausa la animación cuando el hero sale de pantalla (`IntersectionObserver` o `frameloop="demand"`).

Los componentes de React Bits se **copian al repo** (`src/components/hero/`), no se importan desde un paquete. Usa el código original del sitio oficial; no escribas versiones "inspiradas". Anota en el encabezado del archivo de dónde vienen.

## 8. SEO

- `Layout.astro` define `<title>`, `meta description`, Open Graph, Twitter Card, `canonical` y `lang="es-CL"`.
- Un solo `h1` por página. Jerarquía de títulos sin saltos.
- JSON-LD `LocalBusiness` (subtipo `ComputerRepair`) con nombre, teléfono, URL y zona de servicio (Santiago / Región Metropolitana). No publiques una dirección física si no existe.
- Genera `sitemap` con `@astrojs/sitemap` (aprovecha `site` de `astro.config.mjs`) y `robots.txt` en `public/`.
- Imágenes con `alt` descriptivo, dimensiones explícitas y formato moderno (WebP/AVIF vía `astro:assets`).

## 9. Accesibilidad

Es un requisito del producto, no un extra. Resumen (lista completa en `WEB_STYLE_GUIDE.md` §12):
- HTML semántico: `header`, `nav`, `main`, `section` con título, `footer`.
- Contraste mínimo 4,5:1 en texto normal y 3:1 en texto grande y componentes.
- Foco visible en todo elemento interactivo; navegación completa por teclado.
- `prefers-reduced-motion` desactiva **todas** las animaciones y el 3D.
- El contenido del hero 3D es decorativo: `aria-hidden="true"`. Nada esencial debe depender de él.
- Enlace "Saltar al contenido" al inicio de la página.
- Si se incorpora video en LSCh, debe tener subtítulos.

## 10. Despliegue

- **Hosting:** GitHub Pages desde la rama `main`, con GitHub Actions (`.github/workflows/`).
- **Dominio:** `compuvecino.cl`, configurado con el archivo `public/CNAME`. Como se usa dominio propio, **no definas `base`** en `astro.config.mjs`.
- **HTTPS:** activar *Enforce HTTPS* en la configuración de Pages cuando propaguen los DNS.
- **Comandos:**

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Genera `./dist/` |
| `npm run preview` | Previsualiza el build |
| `npm run astro check` | Verifica tipos |

- **Antes de hacer push a `main`:** `npm run build` y `npm run astro check` deben pasar sin errores.

## 11. Decisiones registradas

Cada decisión de arquitectura se anota aquí con fecha. Si cambias algo de este documento, agrega una fila.

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-10 | Astro estático + islas de React | SEO y velocidad para un negocio local; interactividad solo donde se necesita. |
| 2026-10 | Hero 3D con three + R3F, cargado de forma diferida | Es el diferenciador visual; no debe afectar el rendimiento de la lectura. |
| 2026-10 | Componentes de React Bits copiados al repo | Evita dependencias y permite ajustar colores. |
| 2026-10 | Contenido en `src/data/site.ts` | Un solo lugar para editar textos y precios. |
| 2026-10 | Sin backend: contacto por WhatsApp | Etapa inicial: una landing y una sola acción. |

## 12. Trabajo con agentes de IA

- Antes de cambiar código, lee los tres documentos de `/docs`.
- Haz cambios pequeños y verificables: un componente o una sección por vez.
- Después de cada cambio: `npm run build`. Si falla, corrígelo antes de seguir.
- No modifiques `BRAND.md` ni `WEB_STYLE_GUIDE.md` para justificar un cambio de código. Si el documento está desactualizado, propón la edición por separado.
- No agregues dependencias, carpetas ni directivas `client:load` sin registrarlo en la sección 11.
- Si falta información (precios, textos, imágenes), **pregunta** o deja un marcador entre corchetes. No la inventes.

## 13. Pendientes

- [X] Confirmar teléfono y WhatsApp definitivos.
- [ ] Definir valores de los planes mensuales para pymes.
- [ ] Reunir testimonios reales con permiso de publicación.
- [ ] Crear logo en SVG y `og-image.png`.
- [ ] Activar *Enforce HTTPS* cuando propaguen los DNS.
- [ ] Actualizar `AGENTS.md` y `CLAUDE.md` para que apunten a `/docs`.