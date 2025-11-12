import { defineConfig } from "vitepress"
import UnoCSS from "@unocss/vite"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "infotp",
  description: "Sistemas de información para el transporte público inteligente",
  lang: "es",
  cleanUrls: true,
  base: "/",

  markdown: {
    theme: {
      light: "min-light",
      dark: "min-dark",
    },
  },

  vite: {
    plugins: [UnoCSS() as any],
    optimizeDeps: {
      include: ["mermaid"],
    },
  },

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: "/i.png",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Introducción", link: "/introduccion/" },
      { text: "Diseño", link: "/diseno/" },
      { text: "Desarrollo", link: "/desarrollo/" },
      { text: "Gestión", link: "/gestion/" },
      { text: "Plan piloto", link: "/piloto/" },
      { text: "Catálogos", link: "/catalogos/" },
    ],

    sidebar: [
      {
        text: "Introducción",
        collapsed: true,
        items: [
          { text: "InfoTP", link: "/introduccion/" },
          { text: "Principios", link: "/introduccion/principios" },
        ],
      },
      {
        text: "Diseño",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/diseno/" },
          { text: "Experiencia del servicio", link: "/diseno/experiencia" },
          {
            text: "Canales de comunicación",
            collapsed: true,
            items: [
              {
                text: "Introducción",
                link: "/diseno/canales/",
              },
              {
                text: "Datos abiertos",
                link: "/diseno/canales/datos-abiertos",
              },
              {
                text: "Datos en tiempo real",
                link: "/diseno/canales/datos-tiempo-real",
              },
              {
                text: "Medios digitales",
                link: "/diseno/canales/medios-digitales",
              },
              {
                text: "Medios impresos",
                link: "/diseno/canales/medios-impresos",
              },
              {
                text: "Redes sociales",
                link: "/diseno/canales/redes-sociales",
              },
              {
                text: "Atención al cliente",
                link: "/diseno/canales/atencion-cliente",
              },
            ],
          },
          {
            text: "Arquitectura tecnológica",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/diseno/arquitectura/" },
              { text: "A1: Recolección", link: "/diseno/arquitectura/a1" },
              { text: "A2: Distribución", link: "/diseno/arquitectura/a2" },
              { text: "A3: Administración", link: "/diseno/arquitectura/a3" },
              { text: "A4: Operaciones", link: "/diseno/arquitectura/a4" },
            ],
          },
          {
            text: "Identidad visual",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/diseno/identidad-visual/" },
              { text: "Marca", link: "/diseno/identidad-visual/marca" },
              { text: "Elementos gráficos", link: "/diseno/identidad-visual/elementos-graficos" },
              { text: "Interfaces gráficas", link: "/diseno/identidad-visual/interfaces-graficas" },
              { text: "Señalización", link: "/diseno/identidad-visual/senalizacion" },
              { text: "Plantillas", link: "/diseno/identidad-visual/plantillas" },
            ],
          },
        ],
      },
      {
        text: "Desarrollo",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/desarrollo/" },
          {
            text: "Databús",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/databus/" },
              { text: "Diagrama", link: "/desarrollo/databus/diagrama" },
            ],
          },
          {
            text: "Infobús",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/infobus/" },
              { text: "Diagrama", link: "/desarrollo/infobus/diagrama" },
            ],
          },
          {
            text: "Administración",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/administracion/" },
              { text: "Diagrama", link: "/desarrollo/administracion/diagrama" },
            ],
          },
          {
            text: "Operaciones",
            collapsed: true,
            items: [
              { text: "Componentes", link: "/desarrollo/operaciones/" },
              { text: "Diagrama", link: "/desarrollo/operaciones/diagrama" },
            ],
          },
        ],
      },
      {
        text: "Gestión",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/gestion/" },
          { text: "Gobernanza", link: "/gestion/gobernanza" },
          { text: "Unidad técnica", link: "/gestion/unidad-tecnica" },
          { text: "Monetización", link: "/gestion/monetizacion" },
        ],
      },
      {
        text: "Plan piloto",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/piloto/" },
          { text: "Propuesta técnica", link: "/piloto/propuesta-tecnica" },
          { text: "Propuesta financiera", link: "/piloto/propuesta-financiera" },
        ],
      },
      {
        text: "Catálogos",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/catalogos/" },
          { text: "Principios", link: "/catalogos/principios" },
          { text: "Partes interesadas", link: "/catalogos/partes-interesadas" },
          { text: "Actores", link: "/catalogos/actores" },
          { text: "Organizaciones", link: "/catalogos/organizaciones" },
          { text: "Aplicaciones", link: "/catalogos/aplicaciones" },
          { text: "Requisitos", link: "/catalogos/requisitos" },
          { text: "Entidades de datos", link: "/catalogos/entidades-datos" },
          { text: "Componentes de datos", link: "/catalogos/componentes-datos" },
          { text: "Tecnologías", link: "/catalogos/tecnologias" },
          { text: "Estándares", link: "/catalogos/estandares" },
          { text: "Interfaces", link: "/catalogos/interfaces" },
        ],
      },
      { text: "Cómo contribuir", link: "/contribuir" },
      { text: "Créditos", link: "/creditos" },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/simovilab/sistema-informacion",
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar",
              },
              modal: {
                displayDetails: "Mostrar lista detallada",
                resetButtonTitle: "Restablecer búsqueda",
                backButtonTitle: "Cerrar búsqueda",
                noResultsText: "Sin resultados",
                footer: {
                  selectText: "Seleccionar",
                  selectKeyAriaLabel: "Intro",
                  navigateText: "Navegar",
                  navigateUpKeyAriaLabel: "Flecha arriba",
                  navigateDownKeyAriaLabel: "Flecha abajo",
                  closeText: "Cerrar",
                  closeKeyAriaLabel: "Esc",
                },
              },
            },
          },
        },
      },
    },

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
})
