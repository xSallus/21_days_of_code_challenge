<script setup lang="ts">
import { checked } from '../composables/login'
</script>

<template>
  <label :class="{ active: checked }">
    <input type="checkbox" v-model="checked" />
  </label>
</template>

<style scoped>
input {
  width: 1rem;
  height: 1rem;
  opacity: 0;
}

label {
  height: 1rem;
  width: 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  border-color: #565656;
  position: relative;
}

label::before {
  content: '✓';
  height: fit-content;
  width: fit-content;

  line-height: 1;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  display: none;
}

.active {
  background-color: #565656;
}

.active::before {
  display: initial;
  color: #242424;
}
</style>
