<script setup lang="ts">
import { navigationLinks } from '~/data/navigation'

const isMenuOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

watch(isMenuOpen, (value) => {
  document.body.classList.toggle('menu-open', value)
})

onBeforeUnmount(() => {
  document.body.classList.remove('menu-open')
})
</script>

<template>
  <header class="app-header">
    <BaseContainer class="app-header__inner">
      <NuxtLink class="app-header__logo" to="/">Portfolio</NuxtLink>

      <div class="app-header__desktop">
        <AppNav :items="navigationLinks" />
      </div>

      <div class="app-header__mobile">
        <BaseBurgerButton :is-open="isMenuOpen" @click="toggleMenu" />
      </div>
    </BaseContainer>

    <Transition name="mobile-menu">
      <div v-if="isMenuOpen" class="app-header__mobile-panel">
        <BaseContainer>
          <AppNav :items="navigationLinks" direction="column" @navigate="closeMenu" />
        </BaseContainer>
      </div>
    </Transition>
  </header>
</template>
