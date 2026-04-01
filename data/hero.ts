import type { HeroContent } from '~/types/profile'

export const heroContent: HeroContent = {
  eyebrow: 'Frontend Developer (Nuxt 3 / Vue 3 / TypeScript)',
  title: 'Placeholder Name',
  description:
    'Разрабатываю сложные интерфейсы и SaaS-системы. Фокус на производительности, масштабируемости и чистой архитектуре.',
  actions: [
    { label: 'Смотреть проекты', to: '/projects', variant: 'primary' },
    { label: 'Связаться', to: '/contacts', variant: 'secondary' }
  ],
  visual: {
    src: '/portfolio/hero-visual.svg',
    alt: 'Абстрактная голубая иллюстрация для главного экрана портфолио'
  }
}
