<script setup>
import { isBlurEnabled } from '../composables/toggle-blur'
</script>

<template>
  <div class="card" :class="{ blur: isBlurEnabled }" />
</template>

<style scoped>
.card {
  width: 18.75rem;
  height: 18.75rem;

  border-radius: 999px;
  border: 2px solid #f4b406;

  background-color: rgba(255, 255, 255, 0.18);
}

.blur {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
