# Project Context — Nuxt 3 Portfolio

Этот файл описывает контекст проекта для новых участников: что это за сайт, как он устроен, как запускать и как деплоить.

## Что это

Статически генерируемый (SSG) портфолио-сайт frontend разработчика на Nuxt 3.

- Стиль: minimal / clean (dark)
- Цель: быстрый, спокойный, аккуратный UI для GitHub Pages
- Базовый URL: `/portfolio/`

## Технологии

- Nuxt 3
- TypeScript
- SCSS (BEM)
- Vue 3 Composition API (`<script setup>`)
- SSG (`npm run generate`)

## Важные конфиги

### `nuxt.config.ts`

- `app.baseURL = '/portfolio/'` — критично для GitHub Pages подкаталога
- `nitro.preset = 'github_pages'`
- `routeRules['/**'].prerender = true`
- Базовые SEO / OG meta

### `package.json` scripts

- `npm run dev` — локальная разработка
- `npm run build` — production build
- `npm run generate` — генерация статики
- `npm run preview` — предпросмотр production

## Структура

- `app.vue` — общий layout (header / footer / page)
- `types/profile.ts` — общие типы для контента и UI-данных
- `pages/`
  - `index.vue` — сборка главной из organisms
  - `projects.vue` — страница проектов
  - `experience.vue` — страница опыта
  - `contacts.vue` — страница контактов
- `components/`
  - `atoms/` — базовые UI-примитивы
  - `molecules/` — композиции примитивов
  - `organisms/` — крупные секции и layout-блоки
  - `ProjectCard.vue` — карточка проекта
- `data/` — статичный контент по доменам: hero, navigation, stack, projects, contacts, experience, theme
- `data/site.ts` — общие site/meta-константы для base path, title и SEO
- `composables/useReveal.ts` — progressive-enhancement reveal-анимации без блокировки SSR-контента
- `composables/usePageSeo.ts` — единый helper для page-level SEO
- `utils/motion.ts` — утилиты для reveal/stagger анимаций
- `assets/scss/main.scss` — дизайн-токены и глобальные стили
- `.github/workflows/deploy.yml` — CI/CD деплой на GitHub Pages

## Motion и UX

Анимации deliberately subtle, но теперь чуть выразительнее:

- Hero и секции: reveal через progressive enhancement, без скрытия SSR-контента
- Hero visual: мягкий float/pulse
- ProjectCard и CTA: лёгкий lift + glow hover
- Header: burger menu с анимацией открытия/закрытия

Без тяжёлых 3D/canvas/WebGL эффектов.

## Контент и плейсхолдеры

Перед публикацией обязательно заменить:

- `Placeholder Name`
- Telegram/GitHub ссылки в `data/contacts.ts`
- при необходимости — тексты проектов в `data/projects.ts`
- hero-контент в `data/hero.ts`
- site/meta константы в `data/site.ts`

## Локальный запуск

```bash
npm install
npm run dev
```

## Проверка статики перед деплоем

```bash
npm run generate
npm run preview
```

## Деплой

GitHub Actions workflow запускается при push в `main` и:

1. устанавливает Node 20
2. выполняет `npm install`
3. выполняет `npm run generate`
4. публикует `.output/public` в GitHub Pages

## Примечание по окружению

Если `npm install` падает из-за ограничений registry (403), это проблема окружения/доступа к npm, а не кода проекта.
