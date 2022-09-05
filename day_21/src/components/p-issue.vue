<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import Card from './p-card.vue'
import Avatar from './p-avatar.vue'
import { Issue } from '../composables/challenges'

const { issue } = defineProps<{ issue: Issue }>()
</script>

<template>
  <Card>
    <div class="issue_container">
      <Avatar :src="issue.user.avatar_url" classes="h-24 w-24 mb:hidden" />
      <div class="issue_content">
        <h1>{{ issue.title }}</h1>
        <Markdown html breaks linkify xhtmlOut :source="issue.body" />
      </div>
    </div>
  </Card>
</template>

<style scoped>
@tailwind components;

@layer components {
  .issue_container {
    @apply w-full h-full p-6 flex items-center gap-4;
  }

  .issue_content {
    @apply h-full flex-1 flex flex-col justify-between items-start;
  }
}
</style>
