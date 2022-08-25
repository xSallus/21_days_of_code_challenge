<script setup>
import Timer from './components/base-timer.vue'
import {
    isTimerRunning,
    startCountdown,
    stopCountdown,
} from './composables/timer.js'
</script>

<template>
  <main id="content">
    <Timer />
    <div>
      <button @click="startCountdown" :disabled="isTimerRunning">start</button>
      <button @click="stopCountdown" :disabled="!isTimerRunning">stop</button>
    </div>
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
}

div:last-child {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 18.75rem;
}

button {
  width: 100%;
  padding: 0.75rem;

  border: 0;
  border-radius: 4px;

  background-color: #f4b406;
  color: #333;
  font-weight: 600;
  font-size: 1.05rem;
  text-transform: uppercase;
  cursor: pointer;
}

button:disabled {
  background-color: #333;
  color: #f0f2f5;
  cursor: not-allowed;
}
</style>
