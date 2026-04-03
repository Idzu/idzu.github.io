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

          <ul class="hero__meta">
            <li v-for="item in content.meta" :key="item.label">
              <span class="hero__meta-label">{{ item.label }}</span>
              <span class="hero__meta-value">{{ item.value }}</span>
            </li>
          </ul>
        </div>

        <HeroSystemVisual :visual="content.visual" />
      </div>
    </BaseContainer>
  </section>
</template>
