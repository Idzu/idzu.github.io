<script setup lang="ts">
import { experienceContent } from '~/data/experience'
import { experiencePageContent } from '~/data/pages'
import { stack } from '~/data/stack'

usePageSeo(experiencePageContent.seo)
</script>

<template>
  <div>
    <ExperienceSection
      :content="experienceContent"
      :eyebrow="experiencePageContent.section.eyebrow"
      :title="experiencePageContent.section.title"
      :subtitle="experiencePageContent.section.subtitle"
    />
    <StackSection
      :items="stack"
      :eyebrow="experiencePageContent.stackSection.eyebrow"
      :title="experiencePageContent.stackSection.title"
      :subtitle="experiencePageContent.stackSection.subtitle"
      :reveal-delay="110"
    />
  </div>
</template>
