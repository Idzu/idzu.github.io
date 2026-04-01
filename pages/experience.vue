<script setup lang="ts">
import { experienceContent } from '~/data/experience'
import { experiencePageContent } from '~/data/pages'

usePageSeo(experiencePageContent.seo)
</script>

<template>
  <ExperienceSection
    :content="experienceContent"
    :title="experiencePageContent.section.title"
    :subtitle="experiencePageContent.section.subtitle"
  />
</template>
