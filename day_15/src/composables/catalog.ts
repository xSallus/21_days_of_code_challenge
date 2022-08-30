import { reactive, Ref, ref } from 'vue'

export interface Product {
  id: number
  name: string
  price: number
  img: string
}

export const isLoadingProductImage: Ref<boolean> = ref(true)
export const isLoadingContent: Ref<boolean> = ref(true)
export let catalogProducts: Product[] = reactive([])

export const timeouts: number[] = []

export function loadContent() {
    fetch('/db.json')
        .then((res) => res.json())
        .then((data) => {
            catalogProducts = data.products
        })
        .catch(console.log)
        .finally(() => {
            timeouts.push(
                setTimeout(() => {
                    isLoadingContent.value = false
                }, 3000)
            )
        })
}
