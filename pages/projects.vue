<script setup lang="ts">
import { projectsPageContent } from '~/data/pages'
import { projects } from '~/data/projects'

usePageSeo(projectsPageContent.seo)
</script>

<template>
  <ProjectsPreviewSection
    :projects="projects"
    :title="projectsPageContent.section.title"
    :subtitle="projectsPageContent.section.subtitle"
    :reveal-delay="80"
  />
</template>
