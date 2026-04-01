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
    baseURL: '/portfolio/',
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s · Frontend Developer Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Портфолио Frontend Developer (Nuxt 3 / Vue 3 / TypeScript): проекты, опыт, подход к архитектуре и производительности.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Frontend Developer Portfolio' },
        {
          property: 'og:description',
          content:
            'Разрабатываю сложные интерфейсы и SaaS-системы. Фокус на производительности, масштабируемости и чистой архитектуре.'
        },
        { property: 'og:url', content: 'https://username.github.io/portfolio/' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/portfolio/favicon.svg' }]
    }
  },
  nitro: {
    preset: 'github_pages'
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
