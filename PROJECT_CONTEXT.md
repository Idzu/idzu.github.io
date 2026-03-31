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
- `pages/`
  - `index.vue` — hero, stack, preview projects, engineering focus
  - `projects.vue` — список кейсов
  - `experience.vue` — опыт и компетенции
  - `contacts.vue` — контакты
- `components/`
  - `AppHeader.vue`
  - `AppFooter.vue`
  - `SectionBlock.vue`
  - `ProjectCard.vue`
- `data/profile.ts` — контент стека и проектов
- `composables/useReveal.ts` — reveal-анимации (IntersectionObserver)
- `assets/scss/main.scss` — дизайн-токены и глобальные стили
- `.github/workflows/deploy.yml` — CI/CD деплой на GitHub Pages

## Motion и UX

Анимации deliberately subtle:

- Hero и секции: fade + translateY reveal
- ProjectCard: лёгкий scale + мягкая тень на hover
- Кнопки: лёгкий translate/opacity hover

Без тяжёлых 3D/canvas/WebGL эффектов.

## Контент и плейсхолдеры

Перед публикацией обязательно заменить:

- `Placeholder Name`
- Telegram/GitHub ссылки в `pages/contacts.vue`
- при необходимости — тексты проектов в `data/profile.ts`
- `og:url` в `nuxt.config.ts` на реальный `https://<username>.github.io/portfolio/`

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
