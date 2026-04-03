<script setup lang="ts">
defineProps<{
  index?: number
  title: string
  description: string
}>()
</script>

<template>
  <article class="metric-card" data-reveal>
    <span v-if="index" class="metric-card__index">{{ String(index).padStart(2, '0') }}</span>
    <h3 class="metric-card__title">{{ title }}</h3>
    <p class="metric-card__description">{{ description }}</p>
  </article>
</template>
