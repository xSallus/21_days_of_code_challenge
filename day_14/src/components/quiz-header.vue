<script setup lang="ts">
import Indicator from './quiz-finished-indicator.vue'
</script>

<template>
  <header>
    <a
      href="https://github.com/xSallus"
      target="_blank"
      rel="noreferrer, no-opener"
    >
      <img
        class="figma_icon"
        src="../assets/sponsor.svg"
        alt="Github's vector icon"
      />
    </a>
    <h1>The best quiz ever</h1>

    <Indicator />
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100vw;
  padding: 4rem 1rem 2rem;
  position: relative;

  .figma_icon {
    height: 1.8rem;
    position: absolute;

    top: 1.5rem;
    right: 1.5rem;
  }
}
</style>
