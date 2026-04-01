<script setup lang="ts">
import { heroContent } from '~/data/hero'
import { engineeringFocus } from '~/data/home'
import { homePageContent } from '~/data/pages'
import { projects } from '~/data/projects'
import { stack } from '~/data/stack'

usePageSeo(homePageContent.seo)
</script>

<template>
  <div>
    <HeroSection :content="heroContent" />
    <StackSection :items="stack" :title="homePageContent.stack.title" :subtitle="homePageContent.stack.subtitle" />
    <ProjectsPreviewSection
      :projects="projects"
      :title="homePageContent.projects.title"
      :subtitle="homePageContent.projects.subtitle"
    />
    <EngineeringFocusSection
      :items="engineeringFocus"
      :title="homePageContent.engineeringFocus.title"
      :subtitle="homePageContent.engineeringFocus.subtitle"
    />
  </div>
</template>
