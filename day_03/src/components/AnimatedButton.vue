<script setup>
import { timepassed, toggleIsRotating } from '../composables/fan'
</script>

<template>
  <button @click="toggleIsRotating" :disabled="timepassed === '00'">
    <img
      :class="timepassed > 0 && timepassed <= 10 ? 'animate' : ''"
      src="../assets/fan.svg"
      alt="A fan icon"
    />
  </button>

  <h1 v-if="timepassed === '11'">Kinda hot!</h1>
  <h1 v-else>Coolling ({{ timepassed }})</h1>
</template>

<style scoped>
button {
  width: 5rem;
  height: 5rem;
  border-radius: 4px;

  border: 0;
  background-color: #45cc45;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

button:active,
button:hover {
  filter: brightness(0.68);
}

img {
  width: 150%;
  height: 150%;
}

img.animate {
  animation: SPIN 0.5s infinite cubic-bezier(0.7, 0.7, 0.7, 0.7);
}

h1 {
  font-size: 1.25rem;
}

@media (min-width: 900px) {
  button {
    width: 10rem;
    height: 10rem;
  }

  h1 {
    font-size: 3rem;
  }
}

@keyframes SPIN {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
