import { Ref, ref } from 'vue'
import { api } from '../services/api'

type RandomImageResponse = {
  urls: { full: string }
}

const uri = '/photos/random'

export const timeouts: number[] = []

export const image: Ref<string> = ref('')
export const isLoadingImage: Ref<boolean> = ref(false)

export async function getRandomImage() {
    isLoadingImage.value = true
    const { data } = await api.get<RandomImageResponse>(uri)

    image.value = data.urls.full

    setTimeout(() => {
        isLoadingImage.value = false
    }, 3000)
}
