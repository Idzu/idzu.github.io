<script setup lang="ts">
import { siteName } from '~/data/site'

usePageSeo({
  title: 'Home',
  ogTitle: siteName,
  description: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.'
})
</script>

<template>
  <div>
    <HeroSection />
    <StackSection />
    <ProjectsPreviewSection />
    <EngineeringFocusSection />
  </div>
</template>
