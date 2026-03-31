<template>
  <section class="section section--reveal" :class="[`section--${density}`]" data-reveal>
    <div class="container">
      <header class="section__header">
        <h2 class="section__title">{{ title }}</h2>
        <p v-if="subtitle" class="section__subtitle">{{ subtitle }}</p>
      </header>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    density?: 'default' | 'compact'
  }>(),
  {
    subtitle: undefined,
    density: 'default'
  }
)
</script>
