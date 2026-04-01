import { siteName } from '~/data/site'
import type { PageSeoContent, SectionContent } from '~/types/profile'

interface HomePageContent {
  seo: PageSeoContent
  stack: SectionContent
  projects: SectionContent
  engineeringFocus: SectionContent
}

interface ContentPage {
  seo: PageSeoContent
  section: SectionContent
}

export const homePageContent: HomePageContent = {
  seo: {
    title: 'Home',
    ogTitle: siteName,
    description: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.'
  },
  stack: {
    title: 'Stack',
    subtitle: 'Технологии, с которыми регулярно работаю.'
  },
  projects: {
    title: 'Preview Projects',
    subtitle: 'Три ключевых кейса с фокусом на бизнес-результат.'
  },
  engineeringFocus: {
    title: 'Engineering Focus',
    subtitle: 'Системный подход к качеству кода и UX.'
  }
}

export const projectsPageContent: ContentPage = {
  seo: {
    title: 'Projects',
    description: 'Кейсы frontend разработчика: CRM, система рассылок и админка с фильтрацией данных.'
  },
  section: {
    title: 'Projects',
    subtitle: 'Список production-кейсов: задачи, стек и измеримые результаты для бизнеса.'
  }
}

export const experiencePageContent: ContentPage = {
  seo: {
    title: 'Experience',
    description: 'Опыт frontend разработки: архитектура, SSR/SSG оптимизация, API интеграции и UX.'
  },
  section: {
    title: 'Experience',
    subtitle: 'Коммерческая разработка SPA/SSR интерфейсов и интеграций с backend.'
  }
}

export const contactsPageContent: ContentPage = {
  seo: {
    title: 'Contacts',
    description: 'Контакты frontend разработчика: Telegram и GitHub.'
  },
  section: {
    title: 'Contacts',
    subtitle: 'Открыт к продуктовым и SaaS задачам, где важны архитектура и скорость интерфейса.'
  }
}
