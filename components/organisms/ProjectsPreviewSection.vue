<script setup lang="ts">
import { projects } from '~/data/projects'

withDefaults(
  defineProps<{
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
        :style="{ '--reveal-delay': `${revealDelay + index * 80}ms` }"
      />
    </div>
  </BaseSection>
</template>
