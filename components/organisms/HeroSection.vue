<script setup lang="ts">
import { createRevealStyle } from '~/utils/motion'
import type { HeroContent } from '~/types/profile'

defineProps<{
  content: HeroContent
}>()
</script>

<template>
  <section class="hero" data-reveal :style="createRevealStyle(0)">
    <BaseContainer>
      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__eyebrow">{{ content.eyebrow }}</p>
          <h1 class="hero__title">{{ content.title }}</h1>
          <p class="hero__description">{{ content.description }}</p>
          <HeroActions :actions="content.actions" />
        </div>

        <div class="hero__visual-wrap">
          <img class="hero__visual" :src="content.visual.src" :alt="content.visual.alt" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
