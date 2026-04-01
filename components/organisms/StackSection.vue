<script setup lang="ts">
defineProps<{
  items: string[]
  title: string
  subtitle?: string
  revealDelay?: number
}>()
</script>

<template>
  <BaseSection :title="title" :subtitle="subtitle" density="compact" :reveal-delay="revealDelay ?? 80">
    <div class="stack-grid">
      <BaseChip v-for="item in items" :key="item" :label="item" />
    </div>
  </BaseSection>
</template>
