<script setup lang="ts">
import { contactLinks } from '~/data/contacts'
import { contactsPageContent } from '~/data/pages'

usePageSeo(contactsPageContent.seo)
</script>

<template>
  <ContactsSection
    :contacts="contactLinks"
    :title="contactsPageContent.section.title"
    :subtitle="contactsPageContent.section.subtitle"
  />
</template>
