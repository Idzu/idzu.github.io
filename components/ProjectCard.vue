<template>
  <article class="project-card card">
    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__text">{{ project.description }}</p>

    <ul class="project-card__list">
      <li v-for="task in project.tasks" :key="task">{{ task }}</li>
    </ul>

    <div class="project-card__stack">
      <span v-for="item in project.stack" :key="item" class="project-card__chip">{{ item }}</span>
    </div>

    <p class="project-card__result"><strong>Результат:</strong> {{ project.result }}</p>
  </article>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  tasks: string[]
  stack: string[]
  result: string
}

defineProps<{
  project: Project
}>()
</script>

<style lang="scss" scoped>
.project-card {
  padding: 1.4rem;
  display: grid;
  gap: 1rem;
  transition: transform 220ms ease, box-shadow 240ms ease, background-color 240ms ease;

  &:hover {
    transform: scale(1.03);
    background-color: var(--surface-hover);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
  }

  &__title {
    margin: 0;
    font-size: 1.25rem;
  }

  &__text,
  &__result,
  &__list {
    margin: 0;
    color: var(--muted);
  }

  &__list {
    padding-left: 1.2rem;
    display: grid;
    gap: 0.4rem;
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  &__chip {
    font-size: 0.78rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.25rem 0.6rem;
    color: #c5d0e0;
  }
}
</style>
