<script setup lang="ts">
import type { ActionLink } from '~/types/profile'

defineProps<{
  actions: ActionLink[]
}>()
</script>

<template>
  <div class="hero-actions">
    <BaseButton
      v-for="action in actions"
      :key="action.to ?? action.href ?? action.label"
      :to="action.to"
      :href="action.href"
      :variant="action.variant === 'primary' ? 'primary' : 'secondary'"
    >
      {{ action.label }}
    </BaseButton>
  </div>
</template>
