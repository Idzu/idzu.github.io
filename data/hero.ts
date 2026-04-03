import type { HeroContent } from '~/types/profile'

export const heroContent: HeroContent = {
  eyebrow: 'Lorem ipsum',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  actions: [
    { label: 'Избранные кейсы', to: '/projects', variant: 'primary' },
    { label: 'Обсудить задачу', to: '/contacts', variant: 'secondary' }
  ],
  meta: [
    { label: 'Lorem', value: 'Lorem ipsum dolor sit amet' },
    { label: 'Ipsum', value: 'Consectetur adipiscing elit' },
    { label: 'Dolor', value: 'Sed do eiusmod tempor' }
  ],
  visual: {
    eyebrow: 'Visual',
    panels: [
      {
        eyebrow: '01',
        title: 'Lorem ipsum',
        items: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur']
      },
      {
        eyebrow: '02',
        title: 'Dolor sit amet',
        items: ['Adipiscing elit', 'Sed do eiusmod', 'Tempor incididunt']
      },
      {
        eyebrow: '03',
        title: 'Consectetur elit',
        items: ['Ut labore', 'Dolore magna', 'Aliqua enim']
      }
    ]
  }
}
