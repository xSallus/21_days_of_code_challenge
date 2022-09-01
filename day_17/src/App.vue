<script setup lang="ts">
import { onMounted } from 'vue'
import { keysPressed, handleKeyDown } from './composables/key-logger'

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <input readeOnly placeholder="keysPressed" />
  <p>KeysPressed</p>
  <p v-for="(keyPressed, index) in keysPressed" :key="index">
    {{ keyPressed }}
  </p>
</template>
