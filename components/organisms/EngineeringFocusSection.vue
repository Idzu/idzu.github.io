<script setup lang="ts">
import { engineeringFocus } from '~/data/home'
import { createStaggeredRevealStyle } from '~/utils/motion'
</script>

<template>
  <BaseSection
    title="Engineering Focus"
    subtitle="Системный подход к качеству кода и UX."
    density="compact"
    :reveal-delay="160"
  >
    <div class="grid metrics-grid">
      <MetricCard
        v-for="(item, index) in engineeringFocus"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :style="createStaggeredRevealStyle(index, 160)"
      />
    </div>
  </BaseSection>
</template>
