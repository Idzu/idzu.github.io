<script setup lang="ts">
import { contactLinks } from '~/data/contacts'
import { contactsPageContent } from '~/data/pages'

usePageSeo(contactsPageContent.seo)
</script>

<template>
  <ContactsSection
    :contacts="contactLinks"
    :eyebrow="contactsPageContent.section.eyebrow"
    :title="contactsPageContent.section.title"
    :subtitle="contactsPageContent.section.subtitle"
  />
</template>
