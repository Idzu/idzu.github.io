<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary'
  }>(),
  {
    to: undefined,
    href: undefined,
    variant: 'secondary'
  }
)
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="button" :class="[`button--${variant}`]">
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    class="button"
    :class="[`button--${variant}`]"
    target="_blank"
    rel="noreferrer"
  >
    <slot />
  </a>

  <button v-else type="button" class="button" :class="[`button--${variant}`]">
    <slot />
  </button>
</template>
