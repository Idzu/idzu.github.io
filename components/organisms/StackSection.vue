<script setup lang="ts">
import { stack } from '~/data/stack'
</script>

<template>
  <BaseSection title="Stack" subtitle="Технологии, с которыми регулярно работаю." density="compact" :reveal-delay="80">
    <div class="stack-grid">
      <BaseChip v-for="item in stack" :key="item" :label="item" />
    </div>
  </BaseSection>
</template>
