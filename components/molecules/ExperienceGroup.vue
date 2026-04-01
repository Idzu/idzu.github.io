<script setup lang="ts">
import type { ExperienceGroup as ExperienceGroupType } from '~/types/profile'

defineProps<{
  group: ExperienceGroupType
}>()
</script>

<template>
  <div class="experience-group">
    <h4 class="experience-group__title">{{ group.title }}</h4>
    <ul class="experience-group__list">
      <li v-for="item in group.items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
