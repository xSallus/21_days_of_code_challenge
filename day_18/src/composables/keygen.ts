import { Ref, ref } from 'vue'

const chars = ['A', 'a', 'B', 'b', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_', '@', '#', '$', '+']

const minIndex = 0
export let timeouts:number[] = []

export let passwordLength:Ref<number> = ref(8)
export let password:Ref<string> = ref('')

function generateRandomIndex():number {
	const index = Math.floor((Math.random() + minIndex) * (chars.length -1))
	return index
}

export function generateHash(event:any) {
	event.preventDefault()

	let hash = ''

	for(let i=0; i<=passwordLength.value; i++) {
		hash+=chars[generateRandomIndex()]
	}

	password.value = hash

	timeouts.push(
		setTimeout(() => {
			password.value = ''
		}, 3000)
	)
}
