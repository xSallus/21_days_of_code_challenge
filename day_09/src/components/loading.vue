<script setup>
import '../composables/loading'
</script>

<template>
<div class="loading-wrapper">
	<div class="loading-thumb" />
</div>
</template>

<style scoped>
.loading-wrapper {
	width: 15rem;
	height: 2rem;
	overflow: hidden;

	border-radius: 6px;
	outline: 1px solid #111;
	background-color: #ddd;

	display: flex;
	align-items: center;
	justify-content:  flex-start;
	padding: 0;
}

.loading-thumb {
  width: 100%;
	height: 2rem;
	background-color: #07b077;

	display: block;
	margin-right: auto;
	margin-left: 0;
	transform-origin: center left;
	animation: LOADING 10s infinite cubic-bezier(0.7,0.7,0.7,0.7);
}

@keyframes LOADING {
  from {
  	transform: scaleX(0%);
	}

	50% {
	  transform: scaleX(50%);
	}

	to {
	  transform: scaleX(100%);
	}
}
</style>
