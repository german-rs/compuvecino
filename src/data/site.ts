// Única fuente de textos y datos del sitio. Ver docs/ARCHITECTURE.md §6.
// Textos según docs/BRAND.md §5. Sin inventar cifras: lo que falta va entre corchetes.
export const site = {
  name: "CompuVecino",
  url: "https://compuvecino.cl",
  phone: "+56 9 8296 0453",
  whatsapp: "https://wa.me/56982960453",
  skipLink: "Saltar al contenido",
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Proceso", href: "#proceso" },
    { label: "Precios", href: "#precios" },
    { label: "Lengua de Señas", href: "#lsch" },
  ],
  navCta: {
    label: "Escribir por WhatsApp",
    href: "https://wa.me/56982960453",
  },
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
  services: {
    eyebrow: "Servicios",
    title: "Soluciones claras para cada problema de tu computador",
    subtitle:
      "Revisamos tu equipo, te explicamos qué falla en lenguaje simple y te damos un presupuesto antes de realizar cualquier trabajo.",
    items: [
      {
        number: "01",
        title: "Mantenimiento y optimización",
        text: "Limpieza física de ventiladores, cambio de pasta térmica y eliminación de programas dañinos (malware) para que vuelva a funcionar rápido.",
        ctaLabel: "Consultar por mantenimiento",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20necesito%20mantenimiento%20para%20mi%20computador",
      },
      {
        number: "02",
        title: "Reparación de componentes",
        text: "Cambiamos pantallas rotas, teclados que no responden, baterías agotadas y conectores de carga en notebooks y computadores de escritorio.",
        ctaLabel: "Consultar por reparación",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20necesito%20reparar%20una%20pieza%20de%20mi%20computador",
      },
      {
        number: "03",
        title: "Aumento de velocidad (SSD y RAM)",
        text: "Multiplicamos la velocidad de tu equipo instalando un disco de estado sólido (SSD) y más memoria RAM, sin necesidad de gastar en un equipo nuevo.",
        ctaLabel: "Consultar por actualización",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quiero%20mejorar%20la%20velocidad%20de%20mi%20computador",
      },
      {
        number: "04",
        title: "Sistemas, programas y respaldo",
        text: "Instalación limpia de Windows o macOS, respaldo seguro de tus fotos y documentos personales, y configuración de programas de uso diario.",
        ctaLabel: "Consultar por programas o respaldo",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20necesito%20ayuda%20con%20programas%20o%20respaldo",
      },
    ],
  },
} as const;