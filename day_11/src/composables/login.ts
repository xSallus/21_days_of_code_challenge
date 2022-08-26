import { Ref, ref, watch } from 'vue'

export const timeouts: number[] = []

export const mock = {
    password: 'root12345',
    email: 'ademiro@rocketo.seat',
}

export const email: Ref<string> = ref('')

export const password: Ref<string> = ref('')

export const checked: Ref<boolean> = ref(true)

export const toastVisible: Ref<boolean> = ref(false)

export const toastMessage: Ref<string> = ref('')

export const toastType: Ref<'success' | 'error' | undefined> = ref()

export function resetForm() {
    email.value = ''
    password.value = ''
}

export async function showToast(msg: string, type: 'success' | 'error') {
    toastMessage.value = msg
    toastVisible.value = true
    toastType.value = type
}

export function hideToast() {
    timeouts.push(
        setTimeout(() => {
            toastVisible.value = false
        }, 2000)
    )

    timeouts.push(
        setTimeout(() => {
            toastMessage.value = ''
            toastType.value = undefined
            resetForm()
        }, 2500)
    )
}

watch(toastVisible, () => {
    if (toastVisible.value) hideToast()
})
