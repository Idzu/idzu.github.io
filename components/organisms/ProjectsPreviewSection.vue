<script setup lang="ts">
import { createStaggeredRevealStyle } from '~/utils/motion'
import type { Project } from '~/types/profile'

withDefaults(
  defineProps<{
    projects: Project[]
    title?: string
    subtitle?: string
    revealDelay?: number
  }>(),
  {
    title: 'Preview Projects',
    subtitle: 'Три ключевых кейса с фокусом на бизнес-результат.',
    revealDelay: 120
  }
)
</script>

<template>
  <BaseSection :title="title" :subtitle="subtitle" :reveal-delay="revealDelay">
    <div class="grid projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :style="createStaggeredRevealStyle(index, revealDelay)"
      />
    </div>
  </BaseSection>
</template>
