<script setup>
import { isBlurEnabled } from '../composables/toggle-blur'
</script>

<template>
<div class="switcher-wrapper">
	<label class="switcher-box">
	  <input type="checkbox" v-model="isBlurEnabled" />
		<svg
		  class="switcher-thumb"
			viewBox="0 0 120 120"
			version="1.1"
		>
		  <circle r="60" cx="60" cy="60" />
		</svg>
	</label>
</div>
</template>

<style scoped>
.switcher-wrapper {
  position: fixed;
	top: 1rem;
	right: 1rem;

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
	fill: #3c3c3c;

	position: absolute;
	top: -2px;

	left: v-bind(isBlurEnabled ? 'calc(3rem - 2px)' : '-2px');

	transition: left 0.25s cubic-bezier(0.7,0.7,0.7,0.7);
}

@media(min-width: 700px) {
  .switcher-wrapper {
	  top: 2.5rem;
		right: 2.5rem;
	}
}
</style>
