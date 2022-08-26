<script setup lang="ts">
import * as Composables from '../composables/login'
const { placeholder, type, minlength } = defineProps<{
  placeholder?: string
  type: 'password' | 'email'
  minlength?: number
}>()
</script>

<template>
  <label>
    <input
      :placeholder="placeholder"
      :type="type"
      v-model="Composables[type].value"
      :minlength="minlength"
    />
  </label>
</template>

<style scoped>
input {
  width: 25rem;
  max-width: 96vw;
  height: 3.5rem;

  text-align: left;
  text-indent: 1rem;
  color: #ddd;

  background-color: transparent;
  outline: none;
  border: 0;
}

label {
  height: max-content;
  width: max-content;
  border: 2px solid #565656;
  border-radius: 6px;
  overflow: hidden;
}

input:-internal-autofill-previewed,
input:-internal-autofill-selected,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: green;
}
</style>
