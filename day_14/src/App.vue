<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Quiz from './components/quiz-wrapper.vue'
import FinishedQuizModal from './components/quiz-finshed.vue'
import SLoader from './components/quiz-loader.vue'
import Header from './components/quiz-header.vue'

import {
  hasFinishedQuiz,
  isLoadingQuizzes,
  timeouts,
  fetchQuizzes,
  answers,
} from './composables/quizzes'

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

<style lang="scss">
main {
  flex: 1;
  width: 100%;
  display: flex;
  /*flex-direction: column;*/
  align-items: center;
  justify-content: center;
}
</style>
