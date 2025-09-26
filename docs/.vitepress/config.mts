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
      { text: "Introducción", link: "/introduccion" },
      { text: "Diseño", link: "/diseno/" },
      { text: "Desarrollo", link: "/desarrollo/" },
      { text: "Operación", link: "/operacion/" },
      { text: "Plan piloto", link: "/piloto/" },
      { text: "Catálogos", link: "/catalogos/" },
    ],

    sidebar: [
      {
        text: "Introducción",
        collapsed: true,
        items: [
          { text: "Visión", link: "/introduccion" },
          { text: "Principios", link: "/introduccion/principios" },
        ],
      },
      {
        text: "Diseño",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/diseno" },

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
                text: "Identidad visual",
                link: "/diseno/canales/identidad-visual",
              },
              {
                text: "Redes sociales",
                link: "/diseno/canales/redes-sociales",
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
                text: "Atención al cliente",
                link: "/diseno/canales/atencion-cliente",
              },
            ],
          },
          {
            text: "Experiencia del usuario",
            collapsed: true,
            items: [
              {
                text: "Principios",
                link: "/diseno/experiencia",
              },
              {
                text: "Accesibilidad",
                link: "/diseno/experiencia/accesibilidad",
              },
              {
                text: "Género",
                link: "/diseno/experiencia/genero",
              },
            ],
          },
        ],
      },
      {
        text: "Desarrollo",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/desarrollo" },
          { text: "Requisitos", link: "/desarrollo/requisitos" },
          {
            text: "Arquitectura",
            collapsed: true,
            items: [
              { text: "Descripción", link: "/desarrollo/arquitectura" },
              { text: "Recolección de datos", link: "/desarrollo/arquitectura/recoleccion" },
              { text: "Distribución de información", link: "/desarrollo/arquitectura/distribucion" },
            ],
          },
          {
            text: "Tecnologías",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/desarrollo/tecnologias" },
              {
                text: "Portafolio",
                link: "/desarrollo/tecnologias/portafolio",
              },
              {
                text: "Estándares",
                link: "/desarrollo/tecnologias/estandares",
              },
            ],
          },
          {
            text: "Aplicaciones",
            collapsed: true,
            items: [
              {
                text: "Descripción",
                link: "/desarrollo/aplicaciones/",
              },
              {
                text: "Sitios web",
                link: "/desarrollo/aplicaciones/web",
              },
              {
                text: "Aplicaciones móviles",
                link: "/desarrollo/aplicaciones/moviles",
              },
              {
                text: "Pantallas informativas",
                link: "/desarrollo/aplicaciones/pantallas",
              },
              {
                text: "Chatbots",
                link: "/desarrollo/aplicaciones/chatbots",
              },
              {
                text: "Servidores",
                link: "/desarrollo/aplicaciones/servidores",
              },
              {
                text: "API",
                link: "/desarrollo/aplicaciones/api",
              },
              {
                text: "Paneles de administración",
                link: "/desarrollo/aplicaciones/admin",
              },
            ],
          },
        ],
      },
      {
        text: "Operación",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/operacion" },
          { text: "Gobernanza", link: "/operacion/gobernanza" },
          { text: "Seguimiento", link: "/operacion/seguimiento" },
          { text: "Monetización", link: "/operacion/monetizacion" },
        ],
      },
      {
        text: "Plan piloto",
        collapsed: true,
        items: [
          { text: "Introducción", link: "/piloto" },
          {
            text: "Propuesta técnica",
            collapsed: true,
            items: [
              { text: "Introducción", link: "/piloto/propuesta/" },
              { text: "Databús", link: "/piloto/propuesta/databus" },
              { text: "Infobús", link: "/piloto/propuesta/infobus" },
              { text: "DevOps", link: "/piloto/propuesta/devops" },
            ],
          },
          { text: "Unidad de tecnologías", link: "/piloto/unidad" },
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
