import { ref } from 'vue'

export let timepassed = ref('11')

export function toggleIsRotating() {
    let interval

    interval = setInterval(() => {
        if (Number(timepassed.value) < 1) {
            timepassed.value = '11'
            clearInterval(interval)
            return
        }

        timepassed.value = String(Number(timepassed.value) - 1).padStart(2, '0')
    }, 1000)
}
