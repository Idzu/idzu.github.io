<script setup lang="ts">
import { createStaggeredRevealStyle } from '~/utils/motion'
import type { ContactLink } from '~/types/profile'

withDefaults(
  defineProps<{
    contacts: ContactLink[]
    title?: string
    subtitle?: string
    revealDelay?: number
  }>(),
  {
    title: 'Contacts',
    subtitle: 'Открыт к продуктовым и SaaS задачам, где важны архитектура и скорость интерфейса.',
    revealDelay: 80
  }
)
</script>

<template>
  <BaseSection :title="title" :subtitle="subtitle" :reveal-delay="revealDelay">
    <div class="grid contacts-grid">
      <ContactCard
        v-for="(contact, index) in contacts"
        :key="contact.href"
        :contact="contact"
        :style="createStaggeredRevealStyle(index, revealDelay + 40, 70)"
      />
    </div>
  </BaseSection>
</template>
