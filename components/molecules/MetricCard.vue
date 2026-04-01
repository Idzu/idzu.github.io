<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <BaseCard class="metric-card" elevated>
    <h3 class="metric-card__title">{{ title }}</h3>
    <p class="metric-card__description">{{ description }}</p>
  </BaseCard>
</template>
