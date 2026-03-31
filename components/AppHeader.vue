<template>
  <header class="header">
    <div class="container header__inner">
      <NuxtLink class="header__logo" to="/">Portfolio</NuxtLink>
      <nav class="header__nav">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="header__link">
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contacts', label: 'Contacts' }
]
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(12px);
  background: rgba(11, 13, 16, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &__inner {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  &__nav {
    display: flex;
    gap: 1.2rem;
  }

  &__link {
    color: var(--muted);
    transition: color 200ms ease;

    &:hover,
    &.router-link-active {
      color: var(--text);
    }
  }
}
</style>
