<template>
  <SectionBlock title="Contacts" subtitle="Открыт к продуктовым и SaaS задачам, где важны архитектура и скорость интерфейса.">
    <div class="grid contact-grid">
      <a class="card contact" href="https://t.me/placeholder" target="_blank" rel="noreferrer">
        <span class="contact__label">Telegram</span>
        <strong class="contact__value">@placeholder</strong>
      </a>
      <a class="card contact" href="https://github.com/placeholder" target="_blank" rel="noreferrer">
        <span class="contact__label">GitHub</span>
        <strong class="contact__value">github.com/placeholder</strong>
      </a>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contacts',
  ogTitle: 'Contacts · Frontend Portfolio',
  description: 'Контакты frontend разработчика: Telegram и GitHub.'
})
</script>

<style lang="scss" scoped>
.contact-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.contact {
  padding: 1.3rem;
  display: grid;
  gap: 0.35rem;
  transition: transform 200ms ease, opacity 180ms ease, border-color 200ms ease;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.95;
    border-color: rgba(122, 162, 255, 0.72);
  }

  &__label {
    color: var(--muted);
  }

  &__value {
    font-size: 1.05rem;
  }
}
</style>
