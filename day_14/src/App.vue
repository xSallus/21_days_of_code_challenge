<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Quiz from './components/quiz-wrapper.vue'
import FinishedQuizModal from './components/quiz-finshed.vue'
import SLoader from './components/quiz-loader.vue'

import { hasFinishedQuiz, isLoadingQuizzes, timeouts, fetchQuizzes, answers } from './composables/quizzes'

onMounted(fetchQuizzes)
onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<template>
  <SLoader v-if="isLoadingQuizzes" color="#242424" />
	<FinishedQuizModal v-else-if="hasFinishedQuiz" />
	<Quiz v-else />
</template>

<style scoped lang="scss">
@import "./assets/colors.scss";
</style>
