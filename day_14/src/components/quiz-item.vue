<script setup lang="ts">
import { Ref, ref, watch } from 'vue'
import { QuizType, quizzes, answers, handleAnswerQuestion, hasFinishedQuiz } from '../composables/quizzes'
const { quiz, index } = defineProps<{
  quiz:QuizType, index:number
}>()

const questionAnswers = [quiz.correctAnswer, ...quiz.incorrectAnswers]
const selectedAnswer: Ref<string> = ref('')

watch(selectedAnswer, () => {
  if(!selectedAnswer) return

  handleAnswerQuestion(
	  selectedAnswer.value,
		index
	)
})
</script>

<template>
  <div
	  class="question-wrapper"
		:class="{'not-answered': hasFinishedQuiz && !answers[index]}"
	>
	  <header class="question-wrapper__header">
      <p>{{quiz.question}}</p>
			<span class="question-points__badge">
			  {{quiz.points}}
			</span>
		</header>
		<fieldset role="radiogroup">
			<label
			  v-for="answer in questionAnswers"
			  class="question-answer"
				:class="{'selected':selectedAnswer === answer}"
				:key="answer"
			>
			  <img
				  v-if="selectedAnswer === answer"
				  src="../assets/success.svg"
					alt="An heptagonal polygon with an chack mark inside"
				/>
				<div v-else class="question-answer__letter">
				  A
				</div>
			  <input
				  type="radio"
					:value="answer"
					v-model="selectedAnswer"
				/>
				<span>{{answer}}</span>
			</label>
		</fieldset>
	</div>
</template>

<style scoped lang="scss">
@import "../assets/colors.scss";

.question-wrapper {
  width: 400px;
	padding: 1.05rem;
	margin: 1.5rem 0;

	background-color: $question-bg;
	border-radius: 6px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1.5rem;

	animation: SHOWUP 700ms 1 $smooth;

	&.not-answered {
	  box-shadow: 1px 1px 10px 2px $red;
		.question-points__badge,
		.question-answer__letter {
		  background-color: $red;
		}
	}

	&__header {
	  display: flex;
		gap: 1rem;

		p {
		  flex: 1;
			font-size: 1.5rem;
			font-weight: 600;
			text-align: justify;
			color: $badge-bg;
			margin-left: 0.5rem;
		}

		.question-points__badge {
		  flex: none;
			height: fit-content;
		  background-color: $badge-bg;
			padding: 0.25rem 0.75rem;
			border-radius: 4px;
		}
	}

  fieldset {
	  width: 100%;
	  border: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		.question-answer {
		  width: 100%;
			height: 6rem;
			padding: 0.5rem 1.25rem;
			border-radius: 4px;

			display: flex;
			justify-content: flex-start;
			align-items:  center;
			gap: 1rem;

			position: relative;

			input {
			  position: absolute;
				opacity: 0;
			}

			img {
			  width: 2rem;
			}

			span {
			  color: $badge-bg;
			  text-align: left;
				flex: 1;
			}

			&.selected {
			  transition: background-color 500ms $smooth;
			  background-color: $badge-bg;

				span {
				  color: $white;
				}
			}

			&__letter {
			  padding: 0.25rem;
				width: 2rem;
				height: 2rem;
				border-radius: 30px;
				background-color: $badge-bg;
				color: $white;

				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>
