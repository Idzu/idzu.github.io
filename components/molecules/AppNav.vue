<script setup lang="ts">
import type { NavItem } from '~/types/profile'

withDefaults(
  defineProps<{
    items: NavItem[]
    direction?: 'row' | 'column'
  }>(),
  {
    direction: 'row'
  }
)

const emit = defineEmits<{
  navigate: []
}>()
</script>

<template>
  <nav class="app-nav" :class="[`app-nav--${direction}`]" aria-label="Primary navigation">
    <BaseNavLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      :label="item.label"
      @click="emit('navigate')"
    />
  </nav>
</template>
