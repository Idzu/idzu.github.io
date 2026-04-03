import type { ActionLink, FinalCtaContent, MetricItem, NowSectionContent, PageSeoContent, SectionContent } from '~/types/profile'

export const homeSeo: PageSeoContent = {
  title: 'Главная',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export const nowSectionContent: NowSectionContent = {
  eyebrow: 'Lorem',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  items: [
    {
      label: 'Lorem',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      label: 'Ipsum',
      title: 'Dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      label: 'Dolor',
      title: 'Consectetur elit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    }
  ]
}

export const featuredProjectsSection: SectionContent = {
  eyebrow: 'Lorem',
  title: 'Lorem ipsum dolor',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export const featuredProjectsAction: ActionLink = {
  label: 'Смотреть все проекты',
  to: '/projects',
  variant: 'secondary'
}

export const engineeringPrinciplesSection: SectionContent = {
  eyebrow: 'Ipsum',
  title: 'Lorem ipsum sit amet',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

export const engineeringPrinciples: MetricItem[] = [
  {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    title: 'Dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    title: 'Consectetur elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    title: 'Eiusmod tempor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  }
]

export const homeFinalCta: FinalCtaContent = {
  eyebrow: 'Lorem',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  actions: [
    { label: 'Перейти к контактам', to: '/contacts', variant: 'primary' },
    { label: 'Посмотреть кейсы', to: '/projects', variant: 'secondary' }
  ],
  topics: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur elit', 'Eiusmod tempor']
}
