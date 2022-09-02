<script setup lang="ts">
import { onUnmounted } from 'vue'
import { timeouts, passwordLength, password, generateHash } from './composables/keygen'

onUnmounted(() => {
  timeouts.forEach(timeout => clearTimeout(timeout))
})
</script>

<template>
  <h1>Key Generator</h1>
  <form @submit="generateHash">
	  <label>
		  <input
  		  type="number"
  			min="8"
  			max="512"
  			step="1"
	  		placeholder="How long it can be"
		  	v-model="passwordLength"
  		/>

	  	<button>GO</button>
	  </label>
	</form>

	<div>
	  <p>{{password}}</p>
	</div>
</template>

<style scoped lang="scss">
$bg: rgba(255,255,255,0.75);

label {
  max-width: 8rem;
	display: flex;

	margin: 3rem 0;
	border-radius: 4px;
	overflow: hidden;

	input {
	  flex: none;
		height: 3rem;
	  width: 5rem;

		border-radius: 0;
		background-color: $bg;
		color: #565656;
	}

	button {
	  flex: none;
	  width: 3rem;
		height: 3rem;

		border: 0;
		border-radius: 0;

		font-size: 1.5rem;
		font-weight: 600;

		background-color: #334495;
	}
}

div {
  min-height: 300px;
	width: 300px;
	max-width: 70vw;
	padding: 0.5rem 0.25rem;
	border-radius: 6px;

	text-align: justify;
	word-wrap: break-word;
	background-color: $bg;

	p {
	  color: #565656;
		font-size: 1.25rem;
	}
}
</style>
