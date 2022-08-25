<template>
  <p>{{ typedText }}</p>
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted } from "vue";
import { typeText, typedText } from "../composables/typed-text";

let timeout: Timeout;
onBeforeMount(() => {
  timeout = setTimeout(typeText, 1950);
});

onUnmounted(() => clearTimeout(timeout));
</script>

<style scoped>
p {
  color: #ddd;
  font-size: 1.8rem;

  margin-top: 50vh;
  transform: translateY(-50%);
}
</style>
