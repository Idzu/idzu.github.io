<script setup lang="ts">
import type { ContactLink } from '~/types/profile'

defineProps<{
  contact: ContactLink
}>()
</script>

<template>
  <BaseCard as="a" class="contact-card" :href="contact.href" target="_blank" rel="noreferrer" elevated>
    <span class="contact-card__label">{{ contact.label }}</span>
    <strong class="contact-card__value">{{ contact.value }}</strong>
    <p v-if="contact.note" class="contact-card__note">{{ contact.note }}</p>
  </BaseCard>
</template>
