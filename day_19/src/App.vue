<script setup lang="ts">
import { onUnmounted } from 'vue'
import Image from './components/image-random.vue'
import { image, getRandomImage, timeouts } from './composables/image'

onUnmounted(() => {
  timeouts.forEach((timeout) => {
    clearTimeout(timeout)
  })
})
</script>

<template>
  <h1>Image Generator</h1>

  <button @click="getRandomImage">Get Random Image</button>

  <Image />
</template>

<style scoped lang="scss">
button {
  width: 12rem;
  height: 5rem;

  margin: 3rem 0 5rem;

  border: 0;
  border-radius: 4px;

  font-size: 1.5rem;
  font-weight: 600;

  background-color: #334495;

  &:active {
    background-color: #3254ff;
  }
}
</style>
