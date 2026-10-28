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
  modalities: {
    eyebrow: "Modalidades de atención",
    title: "Elige la forma más cómoda de atender tu equipo",
    subtitle:
      "Nos adaptamos a tu tiempo y ubicación en la Región Metropolitana. Te explicamos todo el proceso con claridad.",
    items: [
      {
        tag: "En tu hogar u oficina",
        title: "A domicilio",
        description:
          "Vamos a tu casa o lugar de trabajo en Santiago. Diagnosticamos y resolvemos el problema en el lugar, con paciencia y sin apuros.",
        features: [
          "Sin necesidad de desconectar ni trasladar tu equipo",
          "Atención personalizada con explicaciones paso a paso",
          "Disponible también en Lengua de Señas Chilena",
        ],
        ctaLabel: "Pedir visita a domicilio",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20coordinar%20una%20visita%20a%20domicilio",
      },
      {
        tag: "Reparación técnica",
        title: "En taller",
        description:
          "Para fallas complejas que requieren instrumental especializado, pruebas de temperatura prolongadas o cambio de piezas delicadas.",
        features: [
          "Diagnóstico exhaustivo y pruebas de estabilidad",
          "Presupuesto cerrado antes de iniciar el trabajo",
          "Recepción y entrega con respaldo de seguridad",
        ],
        ctaLabel: "Coordinar entrega en taller",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20llevar%20mi%20computador%20al%20taller",
      },
      {
        tag: "Respuesta inmediata",
        title: "Soporte remoto",
        description:
          "Nos conectamos a tu pantalla por internet mediante una conexión segura para solucionar emergencias de software sin esperar visitas.",
        features: [
          "Atención rápida sin costos de traslado",
          "Solución para lentitud, virus y configuración de programas",
          "Ves en todo momento lo que hacemos en tu pantalla",
        ],
        ctaLabel: "Pedir soporte remoto",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20necesito%20soporte%20remoto%20para%20mi%20computador",
      },
    ],
  },
  process: {
    eyebrow: "Paso a paso",
    title: "Cómo trabajamos",
    subtitle:
      "Un camino claro, transparente y sin sorpresas desde el primer mensaje hasta que tu computador queda resuelto.",
    steps: [
      {
        number: "1",
        title: "Nos cuentas qué pasa",
        text: "Nos escribes por WhatsApp describiendo la falla. Puedes enviar texto, audio o video en Lengua de Señas Chilena. Coordinamos la modalidad más cómoda.",
      },
      {
        number: "2",
        title: "Diagnóstico claro",
        text: "Revisamos tu computador para encontrar el origen del problema. Te explicamos exactamente qué falla en palabras simples, sin enredos técnicos.",
      },
      {
        number: "3",
        title: "Presupuesto antes de reparar",
        text: "Te decimos cuánto cuesta y cuánto tiempo tomará antes de hacer cualquier arreglo. Si no apruebas el presupuesto, no se realiza ningún cobro sorpresa.",
      },
      {
        number: "4",
        title: "Reparación y entrega",
        text: "Realizamos el trabajo técnico, comprobamos el correcto funcionamiento frente a ti y te damos consejos útiles para el cuidado continuo de tu equipo.",
      },
    ],
  },
  pricing: {
    eyebrow: "Valores transparentes",
    title: "Precios de referencia",
    subtitle:
      "Valores orientativos para los trabajos más habituales. Siempre sabrás el costo total antes de realizar cualquier reparación.",
    disclaimer: "El presupuesto final se confirma después del diagnóstico.",
    plans: [
      {
        title: "Mantención completa",
        price: "Desde $25.000",
        description:
          "Ideal para computadores lentos, con exceso de polvo o que levantan temperatura.",
        includes: [
          "Limpieza interna de polvo y ventiladores",
          "Cambio de pasta térmica de alto rendimiento",
          "Eliminación de programas dañinos (malware)",
          "Informe de salud del disco y memoria",
        ],
        featured: false,
        ctaLabel: "Solicitar cotización",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20cotizar%20la%20mantenci%C3%B3n%20completa",
      },
      {
        title: "Sistema y respaldo",
        price: "Desde $35.000",
        badge: "Más solicitado",
        description:
          "Para equipos que no inician, bloqueados o que necesitan empezar desde cero.",
        includes: [
          "Respaldo seguro de documentos y fotos",
          "Instalación limpia de Windows o macOS",
          "Configuración de programas indispensables",
          "Actualizaciones de seguridad completas",
        ],
        featured: true,
        ctaLabel: "Solicitar cotización",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20cotizar%20instalaci%C3%B3n%20de%20sistema%20y%20respaldo",
      },
      {
        title: "Reparación o actualización",
        price: "Desde $20.000",
        priceNote: "+ valor de repuestos",
        description:
          "Instalación de piezas nuevas o cambio de componentes dañados.",
        includes: [
          "Instalación de disco SSD o memoria RAM",
          "Cambio de pantallas, teclados y baterías",
          "Reparación de bisagras y conectores",
          "Pruebas de estabilidad y temperatura",
        ],
        featured: false,
        ctaLabel: "Solicitar cotización",
        href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20cotizar%20reparaci%C3%B3n%20o%20actualizaci%C3%B3n",
      },
    ],
    sme: {
      tag: "Pequeños negocios",
      title: "¿Tienes una pyme o local con varios computadores?",
      description:
        "Planes mensuales de mantención preventiva y soporte prioritario para que tu actividad no se detenga. Atención a domicilio, remota y en Lengua de Señas Chilena.",
      statusNote:
        "[Planes mensuales a la medida — valor por confirmar tras evaluación]",
      ctaLabel: "Cotizar para mi pyme",
      href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20cotizar%20soporte%20para%20mi%20pyme",
    },
  },
  inclusion: {
    eyebrow: "Inclusión y accesibilidad",
    title: "Atención en Lengua de Señas Chilena",
    subtitle:
      "Soporte técnico directo y cercano para personas sordas, sin depender de intérpretes ni intermediarios para resolver los problemas de tu computador.",
    pillars: [
      {
        title: "Videos y videollamadas por WhatsApp",
        text: "Puedes enviarnos un mensaje de video en LSCh explicando qué le pasa a tu equipo, o agendar una videollamada para revisar juntos la falla.",
      },
      {
        title: "Diagnóstico y presupuesto en señas",
        text: "Te explicamos con claridad qué pieza falla, qué solución proponemos y el costo exacto antes de que decidas realizar el trabajo.",
      },
      {
        title: "A domicilio, taller o remoto",
        text: "Atención presencial en comunas de Santiago o soporte a distancia con explicaciones visuales paso a paso.",
      },
    ],
    ctaLabel: "Pedir atención en LSCh",
    href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20pedir%20atenci%C3%B3n%20en%20Lengua%20de%20Se%C3%B1as%20Chilena%20(LSCh)",
    card: {
      tag: "Atención directa",
      heading: "¿Cómo iniciar tu atención?",
      steps: [
        "Graba un video corto mostrando el computador o explicando en LSCh.",
        "Envíalo directo a nuestro WhatsApp.",
        "Te responderemos en señas con el diagnóstico y los pasos a seguir.",
      ],
    },
  },
  finalCta: {
    title: "¿Falla algo? Cuéntanos qué pasa.",
    description:
      "Diagnóstico claro, presupuesto antes de empezar y atención personalizada a domicilio, en taller o remoto en Santiago. También en Lengua de Señas Chilena.",
    ctaLabel: "Pedir diagnóstico gratis",
    href: "https://wa.me/56982960453?text=Hola%20CompuVecino,%20quisiera%20pedir%20un%20diagn%C3%B3stico%20para%20mi%20computador",
    directContact: {
      label: "WhatsApp directo:",
      number: "+56 9 8296 0453",
    },
  },
  footer: {
    tagline: "Soluciones tecnológicas más cerca de ti.",
    location: "Santiago, Región Metropolitana — Chile",
    accessibilityNote:
      "Sitio diseñado con criterios de accesibilidad y atención en LSCh.",
  },
} as const;