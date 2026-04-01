import type { MetricItem } from '~/types/profile'

export const engineeringFocus: MetricItem[] = [
  {
    title: 'Качество кода',
    description: 'Читаемый код, разделение ответственности, переиспользуемые компоненты и строгая типизация.'
  },
  {
    title: 'Performance и UX',
    description: 'Быстрый first load, lazy loading, code splitting, минимизация лишних ререндеров.'
  },
  {
    title: 'Подход',
    description: 'Сначала структура и архитектура, затем реализация, после — оптимизация и проверка edge-cases.'
  }
]
