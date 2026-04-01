<script setup lang="ts">
import { createStaggeredRevealStyle } from '~/utils/motion'
import type { MetricItem } from '~/types/profile'

withDefaults(
  defineProps<{
    items: MetricItem[]
    title?: string
    subtitle?: string
    revealDelay?: number
  }>(),
  {
    title: 'Engineering Focus',
    subtitle: 'Системный подход к качеству кода и UX.',
    revealDelay: 160
  }
)
</script>

<template>
  <BaseSection :title="title" :subtitle="subtitle" density="compact" :reveal-delay="revealDelay">
    <div class="grid metrics-grid">
      <MetricCard
        v-for="(item, index) in items"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :style="createStaggeredRevealStyle(index, revealDelay)"
      />
    </div>
  </BaseSection>
</template>
