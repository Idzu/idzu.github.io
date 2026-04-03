<script setup lang="ts">
import { siteBasePath } from '~/data/site'
import type { HeroContent } from '~/types/profile'

defineProps<{
  visual: HeroContent['visual']
}>()
</script>

<template>
  <div class="hero-visual" aria-hidden="true">
    <div class="hero-visual__frame">
      <p class="hero-visual__eyebrow">{{ visual.eyebrow }}</p>

      <img class="hero-visual__image" :src="`${siteBasePath}hero-lorem-visual.svg`" alt="" />

      <div class="hero-visual__panels">
        <article v-for="panel in visual.panels" :key="panel.title" class="hero-visual__panel">
          <span class="hero-visual__panel-eyebrow">{{ panel.eyebrow }}</span>
          <h3 class="hero-visual__panel-title">{{ panel.title }}</h3>
          <p class="hero-visual__panel-copy">{{ panel.items.join(' / ') }}</p>
        </article>
      </div>
    </div>
  </div>
</template>
