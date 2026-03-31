<template>
  <SectionBlock title="Experience" subtitle="Коммерческая разработка SPA/SSR интерфейсов и интеграций с backend.">
    <article class="card experience">
      <h3 class="experience__role">Frontend Developer</h3>
      <p class="experience__desc">Разработка интерфейсов с высокой нагрузкой и сложной бизнес-логикой.</p>

      <div class="experience__columns">
        <div>
          <h4>Задачи</h4>
          <ul>
            <li>Большие формы и валидация (vuelidate)</li>
            <li>Календари, расписания и серверная фильтрация</li>
            <li>Оптимизация SSR и клиентского рендера</li>
            <li>Интеграция REST API и GraphQL (Apollo Federation)</li>
          </ul>
        </div>

        <div>
          <h4>Компетенции</h4>
          <ul>
            <li>Адаптивная и кроссбраузерная верстка</li>
            <li>Работа с состоянием (Pinia)</li>
            <li>Обработка ошибок и edge-case сценариев</li>
            <li>Git workflow: feature branches, code review</li>
          </ul>
        </div>
      </div>
    </article>
  </SectionBlock>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Experience',
  ogTitle: 'Experience · Frontend Portfolio',
  description: 'Опыт frontend разработки: архитектура, SSR/SSG оптимизация, API интеграции и UX.'
})
</script>

<style lang="scss" scoped>
.experience {
  padding: 1.5rem;
  display: grid;
  gap: 1rem;

  &__role {
    margin: 0;
    font-size: 1.4rem;
  }

  &__desc {
    margin: 0;
    color: var(--muted);
  }

  &__columns {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    h4 {
      margin: 0 0 0.6rem;
    }

    ul {
      margin: 0;
      padding-left: 1.1rem;
      display: grid;
      gap: 0.45rem;
      color: #c9d4e5;
    }
  }
}
</style>
