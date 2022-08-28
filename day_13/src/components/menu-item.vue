<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<template>
  <button>
    <img src="../assets/caret-left.svg" alt="Two arrows toggether" />
    <p>{{ props.title }}</p>
  </button>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

button {
  width: 100%;
  height: 3rem;
  border: 0;
  padding: 4px;
  margin-top: 1.5rem;

  overflow: hidden;

  background: $transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;

  & > img {
    height: 100%;
  }

  &:active {
    background-color: $menu-button-bg-dark;
  }
}
</style>
