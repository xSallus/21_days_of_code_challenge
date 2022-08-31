<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

import Loader from './components/forecast-loader.vue'
import Forecast from './components/forecast-info.vue'

import {
  timeouts,
  forecast,
  getGeoLocation,
  isLoadingWeather,
} from './composables/weather'

onMounted(getGeoLocation)

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})

watch(forecast, () => console.log(forecast))
</script>

<template>
  <main>
    <h1>Hello <span>world</span> weather</h1>
    <Loader v-if="isLoadingWeather" color="#242424" />
    <Forecast v-else />
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
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 2rem 0 6rem;

    span {
      text-decoration: line-through;
      font-weight: 500;
    }
  }
}
</style>
