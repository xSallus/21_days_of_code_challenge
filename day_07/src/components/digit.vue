<script setup>
const props = defineProps({ text:  '' })
</script>

<template>
<div class="digit-wrapper">
	<p class="digit-text">
	  {{props.text}}
	</p>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap');

.digit-wrapper {
  flex: 1;
	height: 100%;
	border-radius: 4px;
	
	background-color: rgba(255,255,255,0.18);

	display: flex;
	align-items: center;
	justify-content: center;
}

.digit-text {
  font-size: 2rem;
	font-family: 'Orbitron', sans-serif;
}
</style>
