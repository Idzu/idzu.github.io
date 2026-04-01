<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    type="button"
    class="burger-button"
    :class="{ 'burger-button--open': isOpen }"
    :aria-expanded="isOpen"
    aria-label="Toggle navigation menu"
    @click="emit('click')"
  >
    <span />
    <span />
    <span />
  </button>
</template>
