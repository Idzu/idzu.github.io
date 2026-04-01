<script setup lang="ts">
import { heroContent } from '~/data/hero'
</script>

<template>
  <section class="hero" data-reveal style="--reveal-delay: 0ms">
    <BaseContainer>
      <div class="hero__inner">
        <div class="hero__content">
          <p class="hero__eyebrow">{{ heroContent.eyebrow }}</p>
          <h1 class="hero__title">{{ heroContent.title }}</h1>
          <p class="hero__description">{{ heroContent.description }}</p>
          <HeroActions :actions="heroContent.actions" />
        </div>

        <div class="hero__visual-wrap">
          <img class="hero__visual" :src="heroContent.visual.src" :alt="heroContent.visual.alt" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
