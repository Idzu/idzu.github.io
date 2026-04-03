<script setup lang="ts">
import { createStaggeredRevealStyle } from '~/utils/motion'
import type { ExperienceContent } from '~/types/profile'

withDefaults(
  defineProps<{
    content: ExperienceContent
    eyebrow?: string
    title?: string
    subtitle?: string
    revealDelay?: number
  }>(),
  {
    eyebrow: undefined,
    title: 'Опыт',
    subtitle: 'Коммерческая разработка SPA/SSR интерфейсов и интеграций с backend.',
    revealDelay: 80
  }
)
</script>

<template>
  <BaseSection :eyebrow="eyebrow" :title="title" :subtitle="subtitle" :reveal-delay="revealDelay">
    <BaseCard class="experience-card" elevated>
      <h3 class="experience-card__role">{{ content.role }}</h3>
      <p class="experience-card__description">{{ content.description }}</p>

      <div class="experience-card__groups">
        <ExperienceGroup
          v-for="(group, index) in content.groups"
          :key="group.title"
          :group="group"
          :style="createStaggeredRevealStyle(index, revealDelay + 40, 70)"
        />
      </div>
    </BaseCard>
  </BaseSection>
</template>
