<script setup lang="ts">
import { createStaggeredRevealStyle } from '~/utils/motion'
import type { ActionLink, Project } from '~/types/profile'

withDefaults(
  defineProps<{
    projects: Project[]
    eyebrow?: string
    title?: string
    subtitle?: string
    action?: ActionLink
    revealDelay?: number
  }>(),
  {
    eyebrow: undefined,
    title: 'Проекты',
    subtitle: 'Три ключевых кейса с фокусом на бизнес-результат.',
    action: undefined,
    revealDelay: 120
  }
)
</script>

<template>
  <BaseSection :eyebrow="eyebrow" :title="title" :subtitle="subtitle" :reveal-delay="revealDelay">
    <div class="grid projects-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :style="createStaggeredRevealStyle(index, revealDelay)"
      />
    </div>

    <div v-if="action" class="section__footer">
      <BaseButton :to="action.to" :href="action.href" :variant="action.variant === 'primary' ? 'primary' : 'secondary'">
        {{ action.label }}
      </BaseButton>
    </div>
  </BaseSection>
</template>
