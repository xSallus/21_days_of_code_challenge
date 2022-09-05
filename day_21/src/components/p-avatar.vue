<script setup lang="ts">
const { src, classes } = defineProps<{ src: string; classes: string }>()
</script>

<template>
  <div class="avatar" :class="classes">
    <img :src="src" alt="" />
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .avatar {
    @apply bg-green-400 rounded-full overflow-hidden;
  }

  .avatar img {
    @apply w-full h-full rounded-full;
  }
}
</style>
