<script setup lang="ts">
import { experienceContent } from '~/data/experience'
</script>

<template>
  <BaseSection
    title="Experience"
    subtitle="Коммерческая разработка SPA/SSR интерфейсов и интеграций с backend."
    :reveal-delay="80"
  >
    <BaseCard class="experience-card" elevated>
      <h3 class="experience-card__role">{{ experienceContent.role }}</h3>
      <p class="experience-card__description">{{ experienceContent.description }}</p>

      <div class="experience-card__groups">
        <ExperienceGroup
          v-for="(group, index) in experienceContent.groups"
          :key="group.title"
          :group="group"
          :style="{ '--reveal-delay': `${120 + index * 70}ms` }"
        />
      </div>
    </BaseCard>
  </BaseSection>
</template>
