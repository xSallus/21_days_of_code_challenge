<script setup lang="ts">
import {
  quizzes,
  handleFinishQuiz,
  isSubmittingQuiz,
  answers,
} from '../composables/quizzes'
import QQuestion from './quiz-item.vue'
import Header from './quiz-header.vue'
import Loader from './quiz-loader.vue'
</script>

<template>
  <Header />
  <main>
    <div class="questions-container">
      <QQuestion
        v-for="(question, index) in quizzes"
        :quiz="question"
        :index="index"
        :key="index"
      />
      <button
        class="quiz-finish__button"
        @click="handleFinishQuiz"
        :disabled="isSubmittingQuiz || answers.some((answer) => !answer)"
      >
        <Loader v-if="isSubmittingQuiz" color="#007933" />
        <span v-else>FINISH</span>
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.questions-container {
  padding-bottom: 2rem;

  .quiz-finish__button {
    width: 400px;
    padding: 1.15rem;
    border: 0;
    border-radius: 6px;

    background-color: $green;
    color: $white;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 1.15rem;
    cursor: pointer;

    &:not(:disabled):active {
      background-color: #008766;
    }

    &:disabled {
      filter: brightness(0.6);
      cursor: not-allowed;
    }

    .loader-wrapper {
      height: 2rem;
      width: 2rem;
    }

    .loader-wrapper__thumb {
      background-color: $green;
    }
  }
}
</style>
