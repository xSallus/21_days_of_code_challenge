<script setup lang="ts">
import { onUnmounted } from 'vue'
import Gallery from './components/gallery-wrapper.vue'
import { timeout } from './composables/scroll'

onUnmounted(()=> clearInterval(timeout))
</script>

<template>
  <Gallery />
</template>

<style scoped>
</style>
