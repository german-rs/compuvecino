# WEB_STYLE_GUIDE — compuvecino.cl

> Guía de diseño y componentes. Lo leen personas y agentes de IA.
> `src/styles/tokens.css` es la fuente de verdad de los valores. Este documento explica cómo usarlos.
> No escribas colores, tamaños ni tiempos sueltos en los componentes: usa los tokens.
> Documentos hermanos: [`ARCHITECTURE.md`](./ARCHITECTURE.md) y [`BRAND.md`](./BRAND.md).

## 1. Principios

1. **Oscuro, con luz verde.** Fondo casi negro verdoso y un único acento verde. El acento marca lo accionable.
2. **Profundidad con medida.** El 3D y las inclinaciones dan carácter, pero el texto siempre es lo más legible de la pantalla.
3. **Una acción por pantalla.** Cada sección empuja a una sola acción principal.
4. **Movimiento con permiso.** Toda animación se apaga con `prefers-reduced-motion`.
5. **Claro antes que bonito.** Si un efecto compite con el texto, se quita.

## 2. Color

### 2.1 Tokens

| Token | Valor | Uso |
|---|---|---|
| `--cv-bg` | `#06110C` | Fondo de página |
| `--cv-surface` | `#0A1B13` | Secciones alternas |
| `--cv-surface-2` | `#0E2118` | Tarjetas, paneles |
| `--cv-text` | `#EAF5EE` | Texto principal |
| `--cv-text-muted` | `#A3BAAB` | Texto secundario |
| `--cv-accent` | `#4ADE80` | Acento: botones, enlaces, énfasis |
| `--cv-on-accent` | `#04210F` | Texto sobre el acento |
| `--cv-warn` | `#FFC857` | Estado intermedio (p. ej. temperatura) |
| `--cv-danger` | `#FF6B6B` | Error o alerta |
| `--cv-border` | `rgba(255,255,255,.12)` | Bordes de tarjetas |
| `--cv-border-strong` | `rgba(255,255,255,.25)` | Bordes de botones secundarios |
| `--cv-glow` | `rgba(74,222,128,.35)` | Resplandores y sombras de acento |

### 2.2 Contraste verificado (WCAG)

| Combinación | Ratio | Estado |
|---|---|---|
| Texto `#EAF5EE` sobre `#06110C` | 17,2:1 | Pasa AAA |
| Texto `#EAF5EE` sobre `#0A1B13` | 15,9:1 | Pasa AAA |
| Muted `#A3BAAB` sobre `#06110C` | 9,3:1 | Pasa AAA |
| Muted `#A3BAAB` sobre `#0A1B13` | 8,6:1 | Pasa AAA |
| Muted `#A3BAAB` sobre `#0E2118` | 8,1:1 | Pasa AAA |
| Acento `#4ADE80` sobre `#06110C` | 11,0:1 | Pasa AAA |
| Acento `#4ADE80` sobre `#0A1B13` | 10,2:1 | Pasa AAA |
| `#04210F` sobre acento `#4ADE80` (botón) | 9,8:1 | Pasa AAA |
| `#FFC857` sobre `#06110C` | 12,5:1 | Pasa AAA |
| `#FF6B6B` sobre `#06110C` | 6,9:1 | Pasa AA |

Reglas:
- El acento **no** se usa como fondo de texto claro. Sobre el acento, texto `--cv-on-accent`.
- No crees grises nuevos. Para opacidades usa `--cv-text` con alfa.
- Sin degradados morados ni azules. Los degradados permitidos van de `--cv-accent` (alfa baja) a transparente, o entre `--cv-surface` y `--cv-bg`.
- La información nunca se comunica solo con color: acompáñala con texto o icono.

### 2.3 `tokens.css`

```css
:root {
  --cv-bg: #06110c;
  --cv-surface: #0a1b13;
  --cv-surface-2: #0e2118;
  --cv-text: #eaf5ee;
  --cv-text-muted: #a3baab;
  --cv-accent: #4ade80;
  --cv-on-accent: #04210f;
  --cv-warn: #ffc857;
  --cv-danger: #ff6b6b;
  --cv-border: rgb(255 255 255 / 0.12);
  --cv-border-strong: rgb(255 255 255 / 0.25);
  --cv-glow: rgb(74 222 128 / 0.35);

  --cv-font-display: "Space Grotesk", system-ui, sans-serif;
  --cv-font-body: "Inter", system-ui, sans-serif;

  --cv-radius-sm: 10px;
  --cv-radius-md: 18px;
  --cv-radius-lg: 22px;
  --cv-radius-xl: 32px;
  --cv-radius-pill: 999px;

  --cv-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --cv-dur-fast: 250ms;
  --cv-dur-base: 450ms;
  --cv-dur-slow: 800ms;
}
```

Conecta estos tokens con Tailwind en el archivo de configuración del proyecto (en Tailwind v4, con `@theme`; en v3, en `theme.extend` de `tailwind.config`). Revisa la versión en `package.json`. Los nombres de clase resultantes (`bg-cv-bg`, `text-cv-muted`, `text-cv-accent`…) deben apuntar siempre a los tokens.

## 3. Tipografía

| Rol | Familia | Peso | Notas |
|---|---|---|---|
| Títulos y números | Space Grotesk | 500, 700 | Interlineado ajustado, `letter-spacing: -0.02em` en títulos grandes |
| Texto, botones, etiquetas | Inter | 400, 500, 600 | Interlineado cómodo |

Escala (fluida, con `clamp`):

| Nivel | Tamaño | Interlineado | Uso |
|---|---|---|---|
| Display | `clamp(40px, 5.2vw, 76px)` | 1.02 | `h1` del hero |
| H2 | `clamp(30px, 3.6vw, 48px)` | 1.1 | Título de sección |
| H3 | 20–26px | 1.25 | Título de tarjeta |
| Cuerpo grande | 18–19px | 1.6 | Bajadas y subtítulos |
| Cuerpo | 15–16px | 1.6–1.7 | Texto de tarjetas |
| Etiqueta | 14px, mayúsculas, `letter-spacing: .08em` | 1.4 | Etiquetas sobre títulos |
| Mínimo absoluto | 14px | — | Nada por debajo, salvo dentro de la pantalla ilustrada del laptop 3D (decorativa, `aria-hidden`) |

Reglas:
- Un solo `h1` por página. Los títulos siguen el orden `h1 → h2 → h3` sin saltos.
- Largo de línea máximo: 65–70 caracteres (`max-width: 60ch` a `68ch`).
- Carga de fuentes: Google Fonts con `display=swap` y `preconnect`, o alojadas en `public/fonts/` con `font-display: swap`.
- Usa siempre comillas y apóstrofes tipográficos en los textos visibles.

## 4. Espaciado y layout

- **Contenedor:** ancho máximo `1280px`, centrado.
- **Padding horizontal:** `48px` en escritorio, `20px` en móvil.
- **Padding vertical de sección:** `96px` en escritorio, `64px` en móvil.
- **Separación entre tarjetas:** `20px`.
- **Escala de espaciado:** múltiplos de 4 (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96).
- **Alternancia de fondo:** `--cv-bg` → `--cv-surface` → `--cv-bg`… con borde superior e inferior `--cv-border` en las franjas con `--cv-surface`.
- Las filas de tarjetas usan `flex-wrap` con `flex: 1 1 <ancho mínimo>`, o grid con `auto-fit`. Nunca anchos fijos que rompan en móvil.

## 5. Forma, bordes y sombras

| Elemento | Radio | Borde | Fondo |
|---|---|---|---|
| Tarjeta | `--cv-radius-lg` (22px) | 1px `--cv-border` | `rgb(255 255 255 / .04)` |
| Tarjeta destacada | `--cv-radius-lg` | 1px `--cv-border` | degradado de `--cv-accent` al 10% a transparente |
| Botón y chip | `--cv-radius-pill` | según variante | según variante |
| Panel o bloque grande | `--cv-radius-xl` (32px) | 1px acento al 35% | degradado `#123B25` → `--cv-surface` |

Sombras:
- Reposo: ninguna o muy suave.
- Hover de tarjeta: `0 30px 60px -20px var(--cv-glow)`.
- Hover de botón primario: `0 14px 30px -10px var(--cv-glow)`.

## 6. Iconos e imágenes

- **Iconos:** `lucide-react` (o SVG inline), trazo de 2 px, color `currentColor`. Con significado: `aria-label`. Decorativos: `aria-hidden="true"`.
- **Sin emojis** en la interfaz.
- **Imágenes:** formato WebP/AVIF vía `astro:assets`, con `width`, `height`, `loading="lazy"` y `alt` descriptivo. Fotos con radio `--cv-radius-lg`.
- **Lineamientos de contenido:** ver `BRAND.md` §7.

## 7. Movimiento

| Tipo | Duración | Easing | Ejemplo |
|---|---|---|---|
| Microinteracción | `--cv-dur-fast` | `--cv-ease` | Hover de botón |
| Transición de componente | `--cv-dur-base` | `--cv-ease` | Inclinación de tarjeta |
| Entrada de sección | `--cv-dur-slow` | `--cv-ease` | Aparición al hacer scroll |
| Ambiente (bucle) | 5–30 s | linear / ease-in-out | Anillos, flotación, cubos |

Reglas:
- Solo se animan `transform` y `opacity` (más `filter` en casos puntuales). No animes `width`, `height`, `top` ni `left`.
- **Obligatorio:** `@media (prefers-reduced-motion: reduce)` desactiva animaciones de ambiente, inclinaciones, parallax, Lenis y el canvas 3D.
- Ninguna animación de entrada puede ocultar contenido si el JavaScript falla: el estado inicial sin JS es visible.
- Nada parpadea más de 3 veces por segundo.
- Entradas con `Motion` solo una vez por elemento (`once: true`).

## 8. Componentes

Cada componente recibe sus datos por props (ver `ARCHITECTURE.md` §6). Estados mínimos: reposo, hover, foco visible, activo y, cuando aplique, deshabilitado.

### 8.1 Button

| Variante | Fondo | Texto | Borde |
|---|---|---|---|
| `primary` | `--cv-accent` | `--cv-on-accent` | ninguno |
| `outline` | transparente | `--cv-text` | 1px `--cv-border-strong` |
| `outline-accent` | transparente | `--cv-accent` | 1px `--cv-accent` |

- Forma de píldora; padding `16px 28px` (grande) o `13px 24px` (normal); peso 600.
- Hover: sube 3 px y aparece el resplandor.
- Con `href` se renderiza `<a>`; sin `href`, `<button type="button">`.
- Altura táctil mínima: 44 px.
- El texto describe la acción ("Pedir diagnóstico gratis").

### 8.2 TiltCard (base de ServiceCard, ModalityCard y PriceCard)

- Inclinación 3D según la posición del cursor: máximo `7°` en X y `9°` en Y, con `perspective: 900px`.
- Hover: sube 8 px, borde `--cv-accent` al 55% y resplandor.
- En pantallas táctiles y con `prefers-reduced-motion`: sin inclinación.
- Todo el contenido sigue siendo legible mientras se inclina. No inclines tarjetas con formularios.

### 8.3 ServiceCard

Número grande en Space Grotesk (56px, acento), `h3`, texto de 15px y enlace con flecha. Contenido: ver `site.ts`.

### 8.4 PriceCard

`h3`, precio en Space Grotesk 44px (acento), lista de lo que incluye y botón primario "Solicitar cotización".
- Debajo del bloque de precios va siempre la aclaración: "El presupuesto final se confirma después del diagnóstico".
- Bloque de pymes: borde punteado `--cv-accent` al 50%; mientras no haya valores, usa un marcador entre corchetes.

### 8.5 StepCard

Cuadro de 48×48 px con el número, fondo `--cv-accent`, texto `--cv-on-accent` y sombra sólida desplazada `6px 6px 0` en acento al 25%. Luego `h3` y texto.

### 8.6 SectionHeading

Etiqueta opcional (14px, mayúsculas, acento), `h2` y subtítulo de 18px en `--cv-text-muted` (máximo 600 px de ancho).

### 8.7 Navbar

- Fija, translúcida (`backdrop-filter: blur`), con borde inferior `--cv-border`.
- Logo a la izquierda; enlaces: Servicios, Modalidades, Proceso, Precios, Lengua de Señas; botón primario "Escribir por WhatsApp".
- En móvil, menú desplegable con foco atrapado y cierre con `Esc`.
- Incluye el enlace "Saltar al contenido" como primer elemento enfocable.

### 8.8 WhatsAppButton flotante

Botón redondo en la esquina inferior derecha, `aria-label="Escribir por WhatsApp"`, sin cubrir el contenido ni el pie de página en móvil.

### 8.9 Footer

Logo, tagline "Soluciones tecnológicas más cerca de ti", ciudad y © año. Texto en `--cv-text-muted`.

## 9. Hero 3D

Es la pieza distintiva del sitio. Se compone de tres capas (ver `ARCHITECTURE.md` §7):

**Capa 1 — Fondo (`HeroBackground`)**
- Fondo de React Bits en verde (Aurora, Particles o Galaxy) con baja opacidad.
- Piso de grilla en perspectiva (CSS): líneas de `--cv-accent` al 40%, celdas de 64 px, `rotateX(72deg)`, desplazamiento continuo y máscara que lo difumina hacia arriba.

**Capa 2 — Escena (`Hero3D`)**
- Laptop con base (teclado y trackpad), tapa abierta unos 12° hacia atrás y pantalla con la interfaz "Diagnóstico del equipo" (anillo de 94 % y tres barras).
- Dos anillos orbitales sobre el suelo, uno de trazo punteado y otro con un arco de acento, girando en sentidos opuestos (20–30 s por vuelta).
- Dos cubos de cristal (bordes de acento al 75%, relleno al 10%) rotando.
- Unas 16 partículas pequeñas en distintas profundidades.
- Tres tarjetas flotantes adelantadas en profundidad: "Diagnóstico gratis" (acento), "Atención en LSCh" (claro) y "Presupuesto previo" (oscuro con borde).
- Cámara en vista elevada (unos 12–20° desde arriba). La escena se mece sola y sigue al mouse (rotación máxima: ±26° en Y y ±16° en X, con transición suave).

**Capa 3 — Texto (`HeroSection`)**
- Columna izquierda: etiqueta, `h1` con la palabra destacada en acento, bajada, dos botones y tres puntos de confianza.
- Columna derecha: escena. En pantallas angostas la escena baja debajo del texto.

Reglas:
- El `h1` y el CTA se pintan sin esperar al 3D.
- La escena es decorativa: `aria-hidden="true"`. Las etiquetas flotantes repiten información que ya está en el texto.
- Móvil y `prefers-reduced-motion`: imagen estática en lugar del canvas.
- Presupuesto de rendimiento: el hero no debe empujar el LCP por encima de 2,5 s en una conexión móvil típica.

## 10. Orden de las secciones

1. Navbar
2. Hero
3. Servicios (4 tarjetas)
4. Modalidades (franja `--cv-surface`; 3 tarjetas: domicilio, taller, remoto)
5. Proceso (4 pasos)
6. Precios de referencia (franja `--cv-surface`; 3 tarjetas + bloque pymes)
7. Atención inclusiva en LSCh
8. Cierre con WhatsApp (panel grande con degradado verde)
9. Footer

Las secciones llevan `id` en minúsculas y sin tildes para los enlaces ancla: `#servicios`, `#modalidades`, `#proceso`, `#precios`, `#lsch`.

## 11. Responsive

| Punto de quiebre | Ancho | Comportamiento |
|---|---|---|
| Móvil | < 640 px | Una columna, hero sin 3D, menú desplegable |
| Tableta | 640–1023 px | Tarjetas en 2 columnas, hero en una columna |
| Escritorio | ≥ 1024 px | Layout completo, hero en dos columnas |
| Ancho | ≥ 1440 px | El contenedor se mantiene en 1280 px |

Prueba cada cambio a 360, 768, 1024 y 1440 px. No debe haber scroll horizontal en ninguno.

## 12. Accesibilidad: lista de verificación

Un componente o página no se entrega si falla un punto.

- [ ] Contraste ≥ 4,5:1 en texto normal y ≥ 3:1 en texto grande, bordes de campos e iconos funcionales.
- [ ] Todo interactivo se puede usar con teclado, en un orden lógico.
- [ ] Foco visible: anillo de 2 px en `--cv-accent` con separación de 2 px; nunca `outline: none` sin reemplazo.
- [ ] Objetivos táctiles de al menos 44×44 px.
- [ ] Un `h1`; jerarquía de títulos sin saltos; secciones con título.
- [ ] Puntos de referencia (`header`, `nav`, `main`, `footer`) y enlace "Saltar al contenido".
- [ ] Enlaces y botones con nombre claro; nada de "haz clic aquí".
- [ ] Imágenes con `alt`; decorativas con `alt=""` o `aria-hidden`.
- [ ] `prefers-reduced-motion` desactiva animaciones, parallax, Lenis y el 3D.
- [ ] Nada esencial depende del 3D ni de JavaScript.
- [ ] `lang="es-CL"` en `<html>`.
- [ ] Texto ampliable al 200 % sin perder contenido ni funciones.
- [ ] Videos con subtítulos; si hay LSCh, visible y con tamaño suficiente.
- [ ] Probado con lector de pantalla (VoiceOver en macOS) en el flujo del hero al CTA.

## 13. Convenciones de código de estilos

- Tokens primero: `var(--cv-…)` o la clase de Tailwind equivalente. Cero valores hexadecimales dentro de componentes.
- Prefiere clases de utilidad de Tailwind. Para efectos 3D y animaciones complejas, usa un bloque `<style>` del componente o clases en `global.css`, con nombres con prefijo `cv-` (`.cv-scene`, `.cv-tilt`).
- Orden de clases: layout → caja → tipografía → color → efectos → estados.
- Las animaciones (`@keyframes`) viven en `global.css`, con nombres descriptivos (`cv-float`, `cv-spin`).
- Una media query de `prefers-reduced-motion` por archivo que anime algo.
- No uses `!important`.

## 14. Lista de entrega de un cambio visual

1. Usa solo tokens de esta guía.
2. Se ve bien a 360, 768, 1024 y 1440 px.
3. Pasa la lista de la sección 12.
4. Los textos cumplen `BRAND.md` §5.
5. `npm run build` y `npm run astro check` pasan sin errores.
6. Si agregaste un patrón nuevo, lo documentaste en esta guía.