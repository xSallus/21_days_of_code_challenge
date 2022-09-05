<script setup lang="ts">
//const { class } = defineProps<{class:string}>()
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style>
@tailwind components;

@layer components {
  .card {
    @apply bg-gray-700 w-full min-h-[5.375rem] rounded-lg animate-showup;
  }
}
</style>
