import { Ref, ref, reactive } from 'vue'
import { api } from '../services/api'

export interface QuizType {
  id: string
  question: string
  correctAnswer: string
  incorrectAnswers: string[]
  points: number
  status: 'correct' | 'incorrect' | null
}

export type QuizRepsponse = Omit<QuizType, 'points'> & {
  difficulty: 'easy' | 'medium' | 'hard'
}

export let quizzes: QuizType[] = reactive([])
export let answers: string[] = reactive(Array(10).fill(''))
export const isLoadingQuizzes: Ref<boolean> = ref(true)
export const hasFinishedQuiz: Ref<boolean> = ref(false)
export const isSubmittingQuiz: Ref<boolean> = ref(false)

export let timeouts: number[] = []
export function fetchQuizzes(): void {
    api
        .get<QuizRepsponse[]>('/questions?limit=10')
        .then(({ data }) => {
            quizzes = data.map((item) => {
                const points =
          item.difficulty === 'easy'
              ? 50
              : item.difficulty === 'medium'
                  ? 100
                  : 250

                return {
                    ...item,
                    status: null,
                    points,
                } as QuizType
            })
        })
        .catch(console.log)
        .finally(() => {
            timeouts.push(
                setTimeout(() => {
                    if (quizzes.length) {
                        isLoadingQuizzes.value = false
                    }
                }, 3000)
            )
        })
}

export function handleAnswerQuestion(answer: string, index: number): void {
    answers[index] = answer
}

export function handleFinishQuiz() {
    isSubmittingQuiz.value = true

    answers.forEach((answer, index) => {
        if (!answer || answer !== quizzes[index].correctAnswer) {
            quizzes[index].status = 'incorrect'
            return
        }

        quizzes[index].status = 'correct'
    })

    timeouts.push(
        setTimeout(() => {
            isSubmittingQuiz.value = false
            hasFinishedQuiz.value = true
            console.log('quiz finished')
        }, 4000)
    )
}

export function startOver() {
    hasFinishedQuiz.value = false
    isLoadingQuizzes.value = true
    answers = new Array(10).fill('')
    timeouts = []
    fetchQuizzes()
}
