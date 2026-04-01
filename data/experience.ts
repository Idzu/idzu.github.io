import type { ExperienceContent } from '~/types/profile'

export const experienceContent: ExperienceContent = {
  role: 'Frontend Developer',
  description: 'Разработка интерфейсов с высокой нагрузкой и сложной бизнес-логикой.',
  groups: [
    {
      title: 'Задачи',
      items: [
        'Большие формы и валидация (vuelidate)',
        'Календари, расписания и серверная фильтрация',
        'Оптимизация SSR и клиентского рендера',
        'Интеграция REST API и GraphQL (Apollo Federation)'
      ]
    },
    {
      title: 'Компетенции',
      items: [
        'Адаптивная и кроссбраузерная верстка',
        'Работа с состоянием (Pinia)',
        'Обработка ошибок и edge-case сценариев',
        'Git workflow: feature branches, code review'
      ]
    }
  ]
}
