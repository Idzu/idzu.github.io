<script setup lang="ts">
import { contactLinks } from '~/data/contacts'
import { createStaggeredRevealStyle } from '~/utils/motion'
</script>

<template>
  <BaseSection
    title="Contacts"
    subtitle="Открыт к продуктовым и SaaS задачам, где важны архитектура и скорость интерфейса."
    :reveal-delay="80"
  >
    <div class="grid contacts-grid">
      <ContactCard
        v-for="(contact, index) in contactLinks"
        :key="contact.href"
        :contact="contact"
        :style="createStaggeredRevealStyle(index, 120, 70)"
      />
    </div>
  </BaseSection>
</template>
