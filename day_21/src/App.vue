<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { timeouts, isLoadingUI } from './composables/challenges'
import Loader from './components/p-loader.vue'
import Sidebar from './components/p-sidebar.vue'
import Content from './components/p-content.vue'

onMounted(() => {
  timeouts.push(
    setTimeout(() => {
      isLoadingUI.value = false
    }, 3000)
  )
})

onUnmounted(() => {
  timeouts.forEach((timeout) => clearTimeout(timeout))
})
</script>

<template>
  <Loader v-if="isLoadingUI" bg="bg-gray-800" dimensions="w-screen h-screen" />

  <main v-else class="main">
    <Sidebar />
    <Content />
  </main>
</template>

<style>
@tailwind components;

@layer components {
  .main {
    @apply w-screen max-w-[1440px] min-h-screen flex mb:flex-col gap-[60px] p-10 mx-auto;
  }
}
</style>
