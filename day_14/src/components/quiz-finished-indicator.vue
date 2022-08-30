<script setup lang="ts">
import { ref, Ref, watch } from 'vue'
import { answers } from '../composables/quizzes'

let percent: Ref<string> = ref('0%')

watch(answers, () => {
  const marked = answers.reduce((acc, curr) => {
    if (!curr) return acc

    return acc + 1
  }, 0)

  percent.value = `${(marked / answers.length) * 100}%`
})
</script>

<template>
  <div class="quizz-indicator">
    <div class="quizz-indicator__trial" />
    <div class="quizz-indicator__thumb" />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.quizz-indicator {
  width: 375px;
  height: 2rem;
  margin: 2.5rem auto 1rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;

  &__trial {
    width: 100%;
    height: 6px;
    border-radius: 8px;

    background-color: $white;
  }

  &__thumb {
    height: 6px;
    border-radius: 8px;

    background-color: $green;

    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: v-bind('percent');
  }
}
</style>
