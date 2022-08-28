<script setup lang="ts">
import Hamburger from './hamburger-button.vue'
import MenuItem from './menu-item.vue'
import { isMenuOpen } from '../composables/toggle-menu'
</script>

<template>
  <div class="menu-container" :class="{ open: isMenuOpen }">
    <Hamburger />
    <div>
      <MenuItem title="Lorem" />
      <MenuItem title="Ipsum" />
      <MenuItem title="Dolor" />
      <MenuItem title="Sit" />
      <MenuItem title="Amet" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.menu-container {
  height: 100vh;
  width: 3rem;
  background-color: $menu-bg;
  display: flex;
  flex-direction: column;

  transition: width 0.25s $smooth;

  & > div:last-child {
    flex: 1;
    width: 100%;
  }

  &.open {
    width: 16rem;
  }
}
</style>
