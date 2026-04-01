<script setup lang="ts">
import type { Project } from '~/types/profile'

defineProps<{
  project: Project
}>()
</script>

<template>
  <BaseCard class="project-card" elevated data-reveal>
    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__description">{{ project.description }}</p>

    <ul class="project-card__list">
      <li v-for="task in project.tasks" :key="task">{{ task }}</li>
    </ul>

    <div class="project-card__stack">
      <BaseChip v-for="item in project.stack" :key="item" :label="item" />
    </div>

    <p class="project-card__result">
      <strong>Результат:</strong>
      {{ project.result }}
    </p>
  </BaseCard>
</template>
