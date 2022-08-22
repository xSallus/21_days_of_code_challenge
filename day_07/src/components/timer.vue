<script setup>
import Digit from './digit.vue'
import { splitTimeInDigits } from '../composables/timer.js'

console.log(splitTimeInDigits())
</script>

<template>
<div class="timer-wrapper">
	<Digit :text="splitTimeInDigits()[0]" />
	<Digit :text="splitTimeInDigits()[1]" />
	<p class="divider">:</p>
	<Digit :text="splitTimeInDigits()[2]" />
	<Digit :text="splitTimeInDigits()[3]" />
</div>
</template>

<style scoped>
.timer-wrapper {
  width: 18.75rem;
	height: calc(18.75rem / 2);

	border-radius: 6px;
	border: 2px solid #f4b406;
	padding: 2.5rem 0.5rem;

	display: flex;
	gap: 8px;
	align-items: center;

	overflow: hidden;
}

.timer-wrapper > div > p {
  color: v-bind(time.value <= 10 ? '#ff0000' : '#f0f2f5');
}

.divider {
  font-size: 2rem;
	font-weight: 500;
	color: #f4b406;
}
</style>
