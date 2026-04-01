<script setup lang="ts">
useSeoMeta({
  title: 'Home',
  ogTitle: 'Frontend Developer Portfolio',
  description: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.',
  ogDescription: 'Nuxt 3 frontend портфолио: стек, проекты, подход к разработке и оптимизации.'
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
