<template>
  <img src="./assets/among_us_crew_mate.png" alt="Amongus cyan crewmate" />
  <MyParticles />
  <TypedText />
</template>

<script setup lang="ts">
import MyParticles from "./components/v-particles.vue";
import TypedText from "./components/typed-text.vue";
</script>

<style scoped>
img {
  width: 4rem;
  position: absolute;

  top: 50vh;
  left: -15vw;
  transform: translateY(-50%);

  animation: SPIN 9s 1, TRANSLATE 7s 1;
}

@keyframes TRANSLATE {
  from {
    left: -15vw;
  }

  to {
    left: calc(100vw + 4rem);
  }
}

@keyframes SPIN {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
