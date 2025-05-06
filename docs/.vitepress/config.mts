import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SITP",
  description: "Sistemas de información para el transporte público",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' }
    ],

    sidebar: [
      {
        text: 'Proyecto',
        items: [
          { text: 'Inicio', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fabianabarca/propuesta' }
    ],
    outlineTitle: 'En esta página',
    lastUpdatedText: 'Última actualización',
    darkModeSwitchLabel: 'Apariencia',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',
    returnToTopLabel: 'Volver arriba',
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    }
  }
})

