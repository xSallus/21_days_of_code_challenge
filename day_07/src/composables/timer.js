import { ref } from 'vue'

const INIT_TIME = 25*60
let interval;

export let time = ref(INIT_TIME)
export let isTimerRunning = ref(false)

export function splitTimeInDigits() {
	const minutes = String(
		Math.floor(time.value / 60)
	).padStart(2,'0')

	const seconds = String(time.value % 60).padStart(2, '0')

	return [...minutes.split(''), ...seconds.split('')]
}

export function startCountdown() {
	console.log('startou')
	isTimerRunning.value = true
	interval = setInterval(() => {
		time.value = time.value - 1

  	if(time.value < 0) {
  		stopCountdown()
  	}
	}, 1000)
}

export function stopCountdown() {
	if (interval) {
		clearInterval(interval)
	}

	isTimerRunning.value = false
	time.value = INIT_TIME
	console.log('stopou')
}
