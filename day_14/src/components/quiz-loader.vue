<script setup lang="ts">
const props = defineProps<{color:strig}>()
</script>

<template>
  <div class="loader-wrapper">
	  <div class="loader-wrapper__thumb" />
	</div>
</template>

<style scoped lang="scss">
@import "../assets/colors.scss";

.loader-wrapper {
  width: 4rem;
	height: 4rem;
	border-radius: 70px;
	background-image: $loader-bg;

	display: flex;
	align-items: center;
	justify-content: center;
	animation: SPIN 2s infinite $smooth;

	&__thumb {
	  width: 85%;
		height: 85%;
		background-color: v-bind('props.color');
		border-radius: inherit;
	}
}
</style>
