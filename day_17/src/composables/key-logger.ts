import { reactive } from 'vue'

export const keysPressed: string[] = reactive([])

export function handleKeyDown(event: KeyboardEvent): void {
  keysPressed.push(event.key)
}
