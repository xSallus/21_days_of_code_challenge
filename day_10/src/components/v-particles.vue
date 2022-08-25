<script setup lang="ts">
import {
  options,
  particlesInit,
  particlesLoaded,
} from "../composables/particles";
</script>

<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="options"
  />
</template>
