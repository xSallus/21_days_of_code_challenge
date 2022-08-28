import { Ref, ref } from 'vue'
import { users } from './gallery'

export const direction: Ref<0 | 1> = ref(1)
export const current: Ref<number> = ref(0)
export let timeout = 0

const QUERY = '.gallery-wrapper'

export function scrollForward() {
    const gallery = document.querySelector(QUERY)
    if (!gallery) {
        return console.log('Element not found')
    }

    gallery.scrollBy(150, 0)

    current.value = current.value + 1
}

export function scrollBackward() {
    const gallery = document.querySelector(QUERY)
    if (!gallery) {
        return console.log('Element not found')
    }

    gallery.scrollBy(-150, 0)

    current.value = current.value - 1
}

export function scroll() {
    timeout = setInterval(() => {
        if (current.value === 0) {
            direction.value = 1
        }

        if (current.value === users.length - 1) {
            direction.value = 0
        }

        if (direction.value === 1) {
            scrollForward()
        }

        if (direction.value === 0) {
            scrollBackward()
        }
    }, 1500)
}

export function onScroll() {
    const gallery = document.querySelector(QUERY)

    if (!gallery) return

    if (gallery.scrollLeft >= 3300) {
        direction.value = 0
    }

    if (gallery.scrollLeft <= 150) {
        direction.value = 1
    }
}

scroll()
