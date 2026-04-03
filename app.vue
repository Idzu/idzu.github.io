<script setup lang="ts">
useReveal()
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main class="app-shell__main">
      <NuxtPage v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </NuxtPage>
    </main>
    <AppFooter />
  </div>
</template>
