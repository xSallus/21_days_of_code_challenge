<script setup lang="ts">
import { emojis, copyEmojiToClicboard } from './composables/emoji'
</script>

<template>
  <h1>Empji Picker  :D</h1>

	<div>
	  <button
		  v-for="emoji, index in emojis"
			:key="index"
			@click="() => copyEmojiToClicboard(index)"
		>
		  {{emoji}}
		</button>
	</div>
</template>

<style scoped lang="scss">
$bg: rgba(255,255,255,0.75);
$active: rgba(0,0,0,0.75);

div {
  min-height: 300px;
	width: 300px;
	max-width: 70vw;
	padding: 0.5rem 0.25rem;
	margin-top: 3rem;
	border-radius: 6px;

	background-color: $bg;

	display: flex;
	flex-wrap: wrap;

	button {
	  background-color: transparent;
		font-size: 1.5rem;
		flex: 1;
		border: 0;

		&:active {
		  background-color: $active;
		}
	}
}
</style>
