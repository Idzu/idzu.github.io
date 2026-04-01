<script setup lang="ts">
import { contactLinks } from '~/data/contacts'
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
        :style="{ '--reveal-delay': `${120 + index * 70}ms` }"
      />
    </div>
  </BaseSection>
</template>
