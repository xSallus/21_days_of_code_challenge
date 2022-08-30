<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import Loader from './components/catalog-loader.vue'
import Catalog from './components/products-catalog.vue'

import { timeouts, loadContent, isLoadingContent } from './composables/catalog'

onMounted(loadContent)

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<template>
  <Loader v-if="isLoadingContent" color="#242424" />
  <main v-else>
    <header>
      <h1>21 Days of <span>Food</span>&nbsp;Code</h1>
    </header>

    <Catalog />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 100vh;
  width: 100vw;
  padding: 0 0 5rem 0;

  header {
    width: 100%;
    padding: 2.5rem 1.5rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 600;

      span {
        text-decoration: line-through;
        font-weight: 500;
      }
    }
  }
}
</style>
