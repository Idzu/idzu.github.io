<script setup lang="ts">
import { siteOwner, siteTagline } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <BaseContainer class="app-footer__inner">
      <p class="app-footer__copy">© {{ year }} {{ siteOwner }}</p>
      <p class="app-footer__tag">{{ siteTagline }}</p>
    </BaseContainer>
  </footer>
</template>
