<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    size?: 'default' | 'wide'
  }>(),
  {
    as: 'div',
    size: 'default'
  }
)
</script>

<template>
  <component :is="as" class="container" :class="[`container--${size}`]">
    <slot />
  </component>
</template>
