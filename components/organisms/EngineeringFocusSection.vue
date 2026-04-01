<script setup lang="ts">
import { engineeringFocus } from '~/data/home'
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
        :style="{ '--reveal-delay': `${160 + index * 80}ms` }"
      />
    </div>
  </BaseSection>
</template>
