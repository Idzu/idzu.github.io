import { siteBasePath, siteDescription, siteName, siteOgDescription, siteUrl } from './data/site'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  app: {
    baseURL: siteBasePath,
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: `%s · ${siteName}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: siteOgDescription },
        { property: 'og:url', content: siteUrl }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: `${siteBasePath}favicon.svg` }]
    }
  },
  nitro: {
    preset: 'github_pages'
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
