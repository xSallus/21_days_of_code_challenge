<script setup>
import Loading from './components/pika-loadig.vue'
import './composables/loading.js'
</script>

<template>
  <main id="content">
    <img src="./assets/pikachu-running.gif" alt="A pikachu running gif" />
    <Loading />
  </main>
</template>

<style scoped>
#content {
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #633bbc;
}

img {
  height: 40px;
}
</style>
