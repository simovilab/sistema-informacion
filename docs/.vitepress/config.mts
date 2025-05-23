import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Movilidad inteligente",
  description: "Sistemas de información para el transporte público",
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
    logo: "/TPi.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Enunciado", link: "/enunciado/" },
      { text: "Resumen ejecutivo", link: "/resumen/" },
      { text: "TPi", link: "/transporte-publico-inteligente/" },
      { text: "Diseño", link: "/diseno/" },
      { text: "Implementación", link: "/implementacion/" },
      { text: "Operación", link: "/operacion/" },
      { text: "Conclusiones", link: "/conclusiones/" },
    ],

    sidebar: [
      {
        text: "Proyecto",
        collapsed: true,
        items: [{ text: "Enunciado", link: "/enunciado/" }],
      },
      {
        text: "Informe",
        collapsed: true,
        items: [
          { text: "Inicio", link: "/" },
          { text: "Resumen ejecutivo", link: "/resumen/" },
        ],
      },
      {
        text: "Transporte público inteligente",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/transporte-publico-inteligente/" },
          {
            text: "Sistemas de información",
            link: "/transporte-publico-inteligente/sistemas-informacion/",
          },
        ],
      },
      {
        text: "Diseño del sistema",
        collapsed: true,
        items: [
          { text: "Principios", link: "/diseno/" },
          {
            text: "Experiencia del usuario",
            link: "/diseno/experiencia-usuario/",
          },
          { text: "Datos", link: "/diseno/datos/" },
          { text: "Arquitectura", link: "/diseno/arquitectura/" },
          { text: "Estrategia de comunicación", link: "/diseno/comunicacion/" },
        ],
      },
      {
        text: "Desarrollo e implementación",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/implementacion/" },
          {
            text: "Desarrollo tecnológico",
            link: "/implementacion/desarrollo/",
          },
          { text: "Monetización", link: "/implementacion/monetizacion/" },
        ],
      },
      {
        text: "Operación y mantenimiento",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/operacion/" },
          { text: "Seguimiento y evaluación", link: "/operacion/seguimiento/" },
          { text: "Riesgos y mitigación", link: "/operacion/riesgos/" },
          { text: "Gobernanza", link: "operacion/gobernanza/" },
          { text: "Evolución", link: "operacion/evolucion/" },
        ],
      },
      {
        text: "Conclusiones y recomendaciones",
        collapsed: true,
        items: [
          { text: "Conclusiones", link: "/conclusiones/" },
          { text: "Recomendaciones", link: "/conclusiones/recomendaciones" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/fabianabarca/propuesta" },
    ],
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
