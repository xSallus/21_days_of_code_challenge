import { Ref, ref } from 'vue'

export const isMenuOpen: Ref<boolean> = ref(false)

export function toggleMenuOpen() {
    const state = isMenuOpen.value
    isMenuOpen.value = !state
}
