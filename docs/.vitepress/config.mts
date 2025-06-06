import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SIMI",
  description: "Sistema de información para la movilidad inteligente",
  lang: "es-ES",
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/i.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Enunciado", link: "/enunciado/" },
      { text: "Resumen", link: "/resumen/" },
      { text: "Movilidad", link: "/movilidad/" },
      { text: "Diseño", link: "/diseno/" },
      { text: "Desarrollo", link: "/desarrollo/" },
      { text: "Operación", link: "/operacion/" },
      { text: "Plan piloto", link: "/piloto/" },
      { text: "Conclusiones", link: "/conclusiones/" },
    ],

    sidebar: [
      {
        text: "IDSI",
        collapsed: true,
        items: [{ text: "Enunciado", link: "/enunciado" }],
      },
      {
        text: "Proyecto",
        collapsed: true,
        items: [
          { text: "Inicio", link: "/" },
          { text: "Resumen ejecutivo", link: "/resumen" },
          { text: "Objetivos", link: "/objetivos" },
          { text: "Requisitos", link: "/requisitos" },
          { text: "Glosario", link: "/glosario" },
          { text: "Referencias", link: "/referencias" },
        ],
      },
      {
        text: "Movilidad inteligente",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/movilidad" },
          {
            text: "Sistemas de información",
            link: "/movilidad/informacion",
          },
        ],
      },
      {
        text: "Diseño del sistema",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/diseno" },
          { text: "Principios", link: "/diseno/principios" },
          {
            text: "Experiencia del usuario",
            link: "/diseno/experiencia",
          },
          {
            text: "Componentes",
            collapsed: true,
            items: [
              {
                text: "Datos abiertos",
                link: "/diseno/componentes/datos-abiertos",
              },
              {
                text: "Medios digitales",
                link: "/diseno/componentes/medios-digitales",
              },
              {
                text: "Medios impresos",
                link: "/diseno/componentes/medios-impresos",
              },
              {
                text: "Atención al cliente",
                link: "/diseno/componentes/atencion-cliente",
              },
              {
                text: "Identidad visual",
                link: "/diseno/componentes/identidad-visual",
              },
              {
                text: "Estrategia de comunicación",
                link: "/diseno/componentes/comunicacion",
              },
              {
                text: "Datos en tiempo real",
                link: "/diseno/componentes/datos-tiempo-real",
              },
            ],
          },
          { text: "Inteligencia artificial", link: "/diseno/ia" },
        ],
      },
      {
        text: "Desarrollo e implementación",
        collapsed: true,
        items: [
          { text: "Principios", link: "/desarrollo" },
          { text: "Tecnologías", link: "/desarrollo/tecnologias" },
          {
            text: "Arquitectura",
            collapsed: true,
            items: [
              { text: "Descripción", link: "/desarrollo/arquitectura" },
              { text: "Databús", link: "/desarrollo/arquitectura/databus" },
              { text: "Infobús", link: "/desarrollo/arquitectura/infobus" },
            ],
          },
          { text: "Pruebas", link: "/desarrollo/pruebas" },
        ],
      },
      {
        text: "Operación y mantenimiento",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/operacion" },
          { text: "Seguimiento y evaluación", link: "/operacion/seguimiento" },
          { text: "Riesgos y mitigación", link: "/operacion/riesgos" },
          { text: "Gobernanza", link: "/operacion/gobernanza" },
          { text: "Monetización", link: "/operacion/monetizacion" },
          { text: "Evolución", link: "/operacion/evolucion" },
        ],
      },
      {
        text: "Plan piloto",
        collapsed: true,
        items: [
          { text: "Descripción", link: "/piloto" },
          { text: "Propuesta", link: "/piloto/propuesta" },
        ],
      },
      {
        text: "Conclusiones y recomendaciones",
        collapsed: true,
        items: [
          { text: "Conclusiones", link: "/conclusiones" },
          { text: "Recomendaciones", link: "/conclusiones/recomendaciones" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/simovilab/sistema-informacion",
      },
    ],

    footer: {
      message: "Laboratorio de Sistemas Inteligentes de Movilidad (SIMOVI)",
      copyright: "Derechos reservados © 2025 Universidad de Costa&nbsp;Rica",
    },

    outlineTitle: "En esta página",
    lastUpdatedText: "Última actualización",
    darkModeSwitchLabel: "Apariencia",
    lightModeSwitchTitle: "Cambiar a modo claro",
    darkModeSwitchTitle: "Cambiar a modo oscuro",
    returnToTopLabel: "Volver arriba",
    docFooter: {
      prev: "Página anterior",
      next: "Página siguiente",
    },
  },
});
