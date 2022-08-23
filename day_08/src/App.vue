<script setup>
import Switcher from './components/switcher.vue'
import { isDarkThemeEnabled } from './composables/theme'
</script>

<template>
<main id="content">
  <Switcher />
</main>
</template>

<style scoped>
#content {
  width: 100vw;
	min-height: 100vh;
	
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: v-bind(isDarkThemeEnabled ? '#301934' : '#633BBC');

	transition: background-color 0.25s;
}
</style>
