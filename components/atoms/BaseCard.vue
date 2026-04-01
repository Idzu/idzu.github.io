<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    elevated?: boolean
  }>(),
  {
    as: 'article',
    elevated: false
  }
)
</script>

<template>
  <component :is="as" class="card" :class="{ 'card--elevated': elevated }">
    <slot />
  </component>
</template>
