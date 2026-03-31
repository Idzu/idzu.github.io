<template>
  <div>
    <section class="hero hero--reveal" data-reveal>
      <div class="container hero__inner">
        <p class="hero__label">Frontend Developer (Nuxt 3 / Vue 3 / TypeScript)</p>
        <h1 class="hero__title">Placeholder Name</h1>
        <p class="hero__description">
          Разрабатываю сложные интерфейсы и SaaS-системы. Фокус на производительности, масштабируемости и
          чистой архитектуре.
        </p>
        <div class="hero__actions">
          <NuxtLink class="button button--primary" to="/projects">Смотреть проекты</NuxtLink>
          <NuxtLink class="button" to="/contacts">Связаться</NuxtLink>
        </div>
      </div>
    </section>

    <SectionBlock title="Stack" subtitle="Технологии, с которыми регулярно работаю." density="compact">
      <div class="stack-grid">
        <span v-for="item in stack" :key="item" class="stack-grid__item">{{ item }}</span>
      </div>
    </SectionBlock>

    <SectionBlock title="Preview Projects" subtitle="Три ключевых кейса с фокусом на бизнес-результат.">
      <div class="grid preview-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </SectionBlock>

    <SectionBlock title="Engineering Focus" subtitle="Системный подход к качеству кода и UX." density="compact">
      <div class="grid metrics-grid">
        <article class="card metric">
          <h3>Качество кода</h3>
          <p>Читаемый код, разделение ответственности, переиспользуемые компоненты и строгая типизация.</p>
        </article>
        <article class="card metric">
          <h3>Performance и UX</h3>
          <p>Быстрый first load, lazy loading, code splitting, минимизация лишних ререндеров.</p>
        </article>
        <article class="card metric">
          <h3>Подход</h3>
          <p>Сначала структура и архитектура, затем реализация, после — оптимизация и проверка edge-cases.</p>
        </article>
      </div>
    </SectionBlock>
  </div>
</template>

<script setup lang="ts">
import { projects, stack } from '~/data/profile'

useSeoMeta({
  title: 'Home',
  ogTitle: 'Frontend Developer Portfolio',
  description: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.',
  ogDescription: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.'
})

</script>

<style lang="scss" scoped>
.hero {
  padding: 7rem 0 4rem;

  &__inner {
    display: grid;
    gap: 1.5rem;
  }

  &__label {
    margin: 0;
    color: var(--muted);
  }

  &__title {
    margin: 0;
    font-size: clamp(2.4rem, 8vw, 5.4rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
  }

  &__description {
    margin: 0;
    max-width: 60ch;
    color: #d8deeb;
  }

  &__actions {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.65rem;

  &__item {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.65rem 0.95rem;
    color: #c7d1df;
  }
}

.preview-grid,
.metrics-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.metric {
  padding: 1.2rem;

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0.7rem 0 0;
    color: var(--muted);
  }
}
</style>
