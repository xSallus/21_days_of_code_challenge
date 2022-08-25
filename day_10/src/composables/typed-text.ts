import { ref } from 'vue'

export const baseText = 'xSallus was ejected'

export const typedText = ref('')
export const typeStatus = ref(false)

const charIndex = ref(0)
const typingSpeed = ref(100)
const newTextDelay = ref(1000)

export function typeText() {
    if (charIndex.value < baseText.split('').length) {
        if (!typeStatus.value) {
            typeStatus.value = true
        }

        typedText.value += baseText.charAt(charIndex.value)

        charIndex.value += 1

        setTimeout(typeText, typingSpeed.value)
    } else {
        typeStatus.value = false

        setTimeout(eraseText, newTextDelay.value)
    }
}

export function eraseText() {
    typedText.value = ''
}
