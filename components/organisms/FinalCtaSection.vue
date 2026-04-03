<script setup lang="ts">
import { createRevealStyle } from '~/utils/motion'
import type { FinalCtaContent } from '~/types/profile'

defineProps<{
  content: FinalCtaContent
}>()
</script>

<template>
  <section class="final-cta" data-reveal :style="createRevealStyle(120)">
    <BaseContainer>
      <div class="final-cta__panel">
        <div class="final-cta__copy">
          <p class="final-cta__eyebrow">{{ content.eyebrow }}</p>
          <h2 class="final-cta__title">{{ content.title }}</h2>
          <p class="final-cta__description">{{ content.description }}</p>
          <HeroActions :actions="content.actions" />
        </div>

        <div class="final-cta__topics">
          <span v-for="item in content.topics" :key="item" class="final-cta__topic">{{ item }}</span>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
