<script setup lang="ts">
import { navigationLinks } from '~/data/navigation'
import { siteRole, siteShortName } from '~/data/site'

const { close, isOpen, toggle } = useMenuState()
</script>

<template>
  <header class="app-header">
    <BaseContainer class="app-header__inner">
      <NuxtLink class="app-header__brand" to="/">
        <span class="app-header__role">{{ siteRole }}</span>
        <span class="app-header__logo">{{ siteShortName }}</span>
      </NuxtLink>

      <div class="app-header__desktop">
        <AppNav :items="navigationLinks" />
      </div>

      <div class="app-header__mobile">
        <BaseBurgerButton :is-open="isOpen" @click="toggle" />
      </div>
    </BaseContainer>

    <Transition name="mobile-menu">
      <div v-if="isOpen" class="app-header__mobile-panel">
        <BaseContainer>
          <AppNav :items="navigationLinks" direction="column" @navigate="close" />
        </BaseContainer>
      </div>
    </Transition>
  </header>
</template>
