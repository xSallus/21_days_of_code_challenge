<script setup lang="ts">
const { color } = defineProps<{ color: string }>()
</script>

<template>
  <div class="loader">
    <div />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.loader {
  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  background-image: $loader-bg;

  display: flex;
  align-items: center;
  justify-content: center;
  /*justify-self: center;*/

  animation: SPIN 2s infinite $smooth;

  div {
    width: 90%;
    height: 90%;
    border-radius: inherit;

    background-color: v-bind('color');
  }
}
</style>
