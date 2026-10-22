// Única fuente de textos y datos del sitio. Ver docs/ARCHITECTURE.md §6.
// Textos según docs/BRAND.md §5. Sin inventar cifras: lo que falta va entre corchetes.
export const site = {
  name: "CompuVecino",
  url: "https://compuvecino.cl",
  phone: "+56 9 8296 0453",
  whatsapp: "https://wa.me/56982960453",
  skipLink: "Saltar al contenido",
  seo: {
    title: "CompuVecino | Soporte técnico de computadores en Santiago",
    description:
      "Soporte técnico de computadores a domicilio, en taller y remoto en la Región Metropolitana, con atención en Lengua de Señas Chilena. Diagnóstico claro y presupuesto antes de reparar.",
  },
  hero: {
    eyebrow: "Soporte técnico para personas, hogares y pymes",
    title: "Tu computador, resuelto por alguien cercano.",
    highlightWord: "cercano",
    description:
      "Diagnóstico claro, presupuesto antes de empezar y explicaciones sin tecnicismos. Atendemos a domicilio, en taller o a distancia, y también en Lengua de Señas Chilena.",
    ctas: {
      primary: {
        label: "Pedir diagnóstico gratis",
        href: "https://wa.me/56982960453",
      },
      secondary: { label: "Ver servicios", href: "#servicios" },
    },
    highlights: [
      "+15 años de experiencia",
      "A domicilio, en taller y remoto",
      "Atención en LSCh",
    ],
    // Escena decorativa (aria-hidden). Mismo contenido que usará Hero3D.
    scene: {
      screenTitle: "Diagnóstico del equipo",
      score: 94,
      scoreLabel: "saludable",
      bars: [
        { label: "Disco", value: 0.95, tone: "accent" },
        { label: "Temperatura", value: 0.5, tone: "warn" },
        { label: "Seguridad", value: 0.9, tone: "accent" },
      ],
      cards: ["Diagnóstico gratis", "Atención en LSCh", "Presupuesto previo"],
    },
  },
} as const;