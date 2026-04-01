<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    density?: 'default' | 'compact'
    revealDelay?: number
  }>(),
  {
    subtitle: undefined,
    density: 'default',
    revealDelay: 0
  }
)
</script>

<template>
  <section
    class="section"
    :class="[`section--${density}`]"
    data-reveal
    :style="{ '--reveal-delay': `${revealDelay}ms` }"
  >
    <BaseContainer>
      <header class="section__header">
        <h2 class="section__title">{{ title }}</h2>
        <p v-if="subtitle" class="section__subtitle">{{ subtitle }}</p>
      </header>
      <slot />
    </BaseContainer>
  </section>
</template>
