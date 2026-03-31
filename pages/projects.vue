<template>
  <SectionBlock
    title="Projects"
    subtitle="Список production-кейсов: задачи, стек и измеримые результаты для бизнеса."
  >
    <div class="grid projects-grid">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import { projects } from '~/data/profile'

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects · Frontend Portfolio',
  description: 'Кейсы frontend разработчика: CRM, система рассылок и админка с фильтрацией данных.'
})
</script>

<style lang="scss" scoped>
.projects-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
