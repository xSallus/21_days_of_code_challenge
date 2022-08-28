<script setup lang="ts">
import Menu from './components/responsive-menu.vue'
import { isMenuOpen } from './composables/toggle-menu'
</script>

<template>
  <Menu />

  <div class="content">
    <header :class="{ open: isMenuOpen }">
      <h1>&lt;/ Responsive Menu&gt;</h1>
    </header>
    <main>
      <img src="./assets/caret-right.svg" alt="Two arrows toggether" />
    </main>
  </div>
</template>

<style scoped lang="scss">
.content {
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100vh;

  header {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.5rem;

    &.open {
      padding: 0;
      justify-content: center;
    }

    @media (max-width: 869px) {
      h1 {
        font-size: 1.25rem;
      }
    }
  }

  main {
    width: 100%;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      width: 48px;
    }
  }
}
</style>
