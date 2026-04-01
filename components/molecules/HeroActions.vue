<script setup lang="ts">
import type { HeroAction } from '~/types/profile'

defineProps<{
  actions: HeroAction[]
}>()
</script>

<template>
  <div class="hero-actions">
    <BaseButton
      v-for="action in actions"
      :key="action.to"
      :to="action.to"
      :variant="action.variant === 'primary' ? 'primary' : 'secondary'"
    >
      {{ action.label }}
    </BaseButton>
  </div>
</template>
