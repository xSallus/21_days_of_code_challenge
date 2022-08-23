<script setup>
import { isDarkThemeEnabled } from '../composables/theme'
import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
</script>

<template>
<div class="switcher-wrapper">
	<label class="switcher-box">
	  <input type="checkbox" v-model="isDarkThemeEnabled" />
		<div class="switcher-thumb">
  		<img :src="isDarkThemeEnabled ? Moon : Sun" alt="" />
		</div>
	</label>
</div>
</template>

<style scoped>
.switcher-wrapper {
	width: 5rem;
	height: 2rem;
}

.switcher-box {
  display: inline-block;
	position: relative;

  width: 100%;
	height: 100%;
	border-radius: 2rem;

	background-color: #f0f2f5;
}

.switcher-box input {
  opacity: 0;
}

.switcher-thumb {
  height: calc(2rem + 4px);
	width: calc(2rem + 4px);

	background-color: v-bind(isDarkThemeEnabled ? '#633BBC' : '#3c3c3c');
	border-radius: 3rem;

	position: absolute;
	top: -2px;
	left: v-bind(isDarkThemeEnabled ? 'calc(3rem - 2px)' : '-2px');

	display: flex;
	align-items: center;
	justify-content: center;

	transition: left 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}

.switcher-thumb img {
  height: 75%;
	width: 75%;

	transition: all 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}

@media(max-width: 700px) {
  .switcher-wrapper {
    margin: 1rem auto auto 1rem;
	}
}
</style>
