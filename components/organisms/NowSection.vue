<script setup lang="ts">
import { createRevealStyle, createStaggeredRevealStyle } from '~/utils/motion'
import type { NowSectionContent } from '~/types/profile'

withDefaults(
  defineProps<{
    content: NowSectionContent
    revealDelay?: number
  }>(),
  {
    revealDelay: 90
  }
)
</script>

<template>
  <BaseSection
    :eyebrow="content.eyebrow"
    :title="content.title"
    :subtitle="content.description"
    :reveal-delay="revealDelay"
  >
    <div class="now-layout">
      <div class="now-note" data-reveal :style="createRevealStyle(revealDelay + 20)">
        <p class="now-note__label">В работе</p>
        <p class="now-note__text">{{ content.note }}</p>
      </div>

      <div class="grid now-grid">
        <NowCard
          v-for="(item, index) in content.items"
          :key="item.title"
          :item="item"
          :style="createStaggeredRevealStyle(index, revealDelay + 80, 90)"
        />
      </div>
    </div>
  </BaseSection>
</template>
