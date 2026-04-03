<script setup lang="ts">
import { contactLinks } from '~/data/contacts'
import { navigationLinks } from '~/data/navigation'
import { siteFooterDescription, siteOwner, siteRole, siteStatus, siteTagline } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <BaseContainer>
      <div class="app-footer__inner">
        <div class="app-footer__brand">
          <p class="app-footer__eyebrow">{{ siteRole }}</p>
          <p class="app-footer__name">{{ siteOwner }}</p>
          <p class="app-footer__description">{{ siteFooterDescription }}</p>
        </div>

        <div class="app-footer__column">
          <p class="app-footer__heading">Навигация</p>
          <div class="app-footer__links">
            <NuxtLink v-for="item in navigationLinks" :key="item.to" :to="item.to" class="app-footer__link">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="app-footer__column">
          <p class="app-footer__heading">Связь</p>
          <div class="app-footer__links">
            <a v-for="item in contactLinks" :key="item.href" :href="item.href" class="app-footer__link" target="_blank" rel="noreferrer">
              {{ item.label }} / {{ item.value }}
            </a>
          </div>
        </div>
      </div>

      <div class="app-footer__bottom">
        <p class="app-footer__copy">© {{ year }} {{ siteOwner }} · {{ siteTagline }}</p>
        <p class="app-footer__status">{{ siteStatus }}</p>
      </div>
    </BaseContainer>
  </footer>
</template>
