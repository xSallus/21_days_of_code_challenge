<script setup>
import GlassLikeCard from './components/glass-card.vue'
import Switcher from './components/switcher.vue'
</script>

<template>
<main id="content">
  <Switcher />
  <GlassLikeCard />
</main>
</template>

<style scoped>
#content {
  width: 100vw;
	min-height: 100vh;
	
	display: flex;
	align-items: center;
	justify-content: center;

	background-image: var(--bg);
	background-repeat: no-repeat;
	background-position: 50%;
}
</style>
