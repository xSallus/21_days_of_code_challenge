<script setup lang="ts">
const { bg, dimensions } = defineProps<{ bg: string; dimensions: string }>()
</script>

<template>
  <div class="wrapper" :class="dimensions">
    <div class="loader">
      <div class="thumb" :class="bg" />
    </div>
  </div>
</template>

<style>
@tailwind components;

@layer components {
  .wrapper {
    @apply flex items-center justify-center;
  }

  .loader {
    @apply w-12 h-12 rounded-full p-1 bg-loader animate-spin;
  }

  .thumb {
    @apply w-full h-full rounded-full;
  }
}
</style>
