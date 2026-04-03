import type { PageSeoContent, SectionContent } from '~/types/profile'

interface ContentPage {
  seo: PageSeoContent
  section: SectionContent
}

export const projectsPageContent: ContentPage = {
  seo: {
    title: 'Проекты',
    description: 'Кейсы про продуктовые интерфейсы, внутренние системы, data-heavy экраны и AI-aware web подход.'
  },
  section: {
    eyebrow: 'Кейсы',
    title: 'Избранные кейсы и product-системы',
    subtitle: 'Подборка задач, где важны были не только экраны, но и структура сценариев, масштабируемость интерфейса и спокойная delivery-модель.'
  }
}

export const experiencePageContent: ContentPage & { stackSection: SectionContent } = {
  seo: {
    title: 'Опыт',
    description: 'Опыт работы с интерфейсными системами, архитектурой frontend-приложений и delivery для сложных продуктовых сценариев.'
  },
  section: {
    eyebrow: 'Опыт',
    title: 'Как я работаю внутри продукта',
    subtitle: 'Не просто собираю экраны, а выстраиваю интерфейсные системы, которые остаются понятными и устойчивыми при росте требований.'
  },
  stackSection: {
    eyebrow: 'Стек',
    title: 'Технологическая среда',
    subtitle: 'Инструменты и подходы, которыми обычно собираю interface-heavy продукты и внутренние системы.'
  }
}

export const contactsPageContent: ContentPage = {
  seo: {
    title: 'Контакты',
    description: 'Контакты для product work, frontend architecture и сложных интерфейсных задач.'
  },
  section: {
    eyebrow: 'Контакты',
    title: 'Открыт к сильным продуктовым задачам',
    subtitle: 'Лучше всего там, где нужно соединить UX, архитектуру и спокойный инженерный темп без шаблонного портфельного шума.'
  }
}
