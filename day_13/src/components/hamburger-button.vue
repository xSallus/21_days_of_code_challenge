<script setup lang="ts">
import { isMenuOpen, toggleMenuOpen } from '../composables/toggle-menu'
</script>

<template>
  <button
    @click="toggleMenuOpen"
    class="hamburger"
    :class="{ active: isMenuOpen }"
  >
    <div />
    <div />
    <div />
  </button>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.hamburger {
  width: 3rem;
  height: 3rem;

  background-color: $transparent;
  border: 0;
  padding: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: relative;

  &:active {
    background-color: $menu-button-bg-dark;
  }

  & > div {
    width: 100%;
    height: 0.45rem;
    border-radius: 2px;

    background-color: $rect-bg;
    transition: all 0.25s $smooth;
  }

  &.active > div {
    position: absolute;
    left: 0;
    top: 50%;

    &:first-child {
      transform: translate(-2%, -52%) rotate(45deg);
    }

    &:nth-child(2) {
      background-color: $transparent;
      transform: translateY(-50%);
    }

    &:last-child {
      transform: translate(-2%, -52%) rotate(-45deg);
    }
  }
}
</style>
