<script setup lang="ts">
import Success from '../assets/success.svg'
import Fail from '../assets/fail.svg'

import { toastVisible, toastMessage, toastType } from '../composables/login'
</script>

<template>
  <div class="toast-wrapper" :class="toastVisible ? 'shown' : ''">
    <div>
      <img v-if="toastType === 'success'" class="icon" :src="Success" alt="✓" />
      <img v-else class="icon" :src="Fail" alt="✓" />
    </div>

    <div>
      <p>{{ toastMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.toast-wrapper {
  background-color: v-bind(toastType === 'success' ? 'green': 'red');
  color: #f0f2f5;
  font-weight: 600;

  width: 300px;
  height: 3.5rem;
  overflow: hidden;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  grid-template-areas: 'icon msg';

  position: fixed;
  bottom: -20vh;
  left: 50vw;
  transform: translateX(-50%);

  transition: bottom 0.75s cubic-bezier(0.7, 0.7, 0.7, 0.7);
}

.toast-wrapper.shown {
  bottom: 10vh;
}

.toast-wrapper > div {
  display: flex;
  align-items: center;
}

.toast-wrapper div:first-child {
  grid-area: icon;
  justify-content: center;
}

.toast-wrapper div:last-child {
  padding-left: 1.5rem;
  grid-area: msg;
}

.icon {
  height: 80%;
}
</style>
