<script setup lang="ts">
import { heroContent } from '~/data/hero'
import {
  engineeringPrinciples,
  engineeringPrinciplesSection,
  featuredProjectsAction,
  featuredProjectsSection,
  homeFinalCta,
  homeSeo,
  nowSectionContent
} from '~/data/home'
import { featuredProjects } from '~/data/projects'

usePageSeo(homeSeo)
</script>

<template>
  <div>
    <HeroSection :content="heroContent" />
    <NowSection :content="nowSectionContent" />
    <ProjectsPreviewSection
      :projects="featuredProjects"
      :eyebrow="featuredProjectsSection.eyebrow"
      :title="featuredProjectsSection.title"
      :subtitle="featuredProjectsSection.subtitle"
      :action="featuredProjectsAction"
    />
    <EngineeringFocusSection
      :items="engineeringPrinciples"
      :eyebrow="engineeringPrinciplesSection.eyebrow"
      :title="engineeringPrinciplesSection.title"
      :subtitle="engineeringPrinciplesSection.subtitle"
    />
    <FinalCtaSection :content="homeFinalCta" />
  </div>
</template>
