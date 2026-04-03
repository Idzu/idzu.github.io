<script setup lang="ts">
import type { NowItem } from '~/types/profile'

defineProps<{
  item: NowItem
}>()
</script>

<template>
  <article class="now-card" data-reveal>
    <span class="now-card__label">{{ item.label }}</span>
    <h3 class="now-card__title">{{ item.title }}</h3>
    <p class="now-card__description">{{ item.description }}</p>
  </article>
</template>
