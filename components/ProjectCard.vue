<script setup lang="ts">
import type { Project } from '~/types/profile'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card" data-reveal>
    <div class="project-card__top">
      <span class="project-card__category">{{ project.category }}</span>
      <a v-if="project.link" :href="project.link.href" class="project-card__link" target="_blank" rel="noreferrer">
        {{ project.link.label }}
      </a>
    </div>

    <div class="project-card__copy">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__concept">{{ project.concept }}</p>
    </div>

    <p class="project-card__scope-label">Зона ответственности</p>
    <ul class="project-card__list">
      <li v-for="item in project.responsibilities" :key="item">{{ item }}</li>
    </ul>

    <div class="project-card__stack">
      <BaseChip v-for="item in project.stack" :key="item" :label="item" />
    </div>

    <p class="project-card__impact">
      <strong>Итог</strong>
      <span>{{ project.impact }}</span>
    </p>
  </article>
</template>
