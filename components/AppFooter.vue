<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ year }} Placeholder Name</p>
      <p class="footer__tag">Nuxt 3 · TypeScript · SSG</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.5rem 0 2.2rem;

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    color: var(--muted);
    font-size: 0.95rem;
  }
}
</style>
