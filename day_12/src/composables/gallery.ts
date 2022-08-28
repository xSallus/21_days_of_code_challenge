import { reactive } from 'vue'
export const baseURL = 'https://randomuser.me/api/?inc=id,picture,name&results'

export interface User {
  name: string
  avatar: string
  id: string
}

export let users: User[] = reactive([])

export async function getRandomUsers(limit = 10): Promise<void> {
    const response = await fetch(`${baseURL}=${limit}`)
    const json = await response.json()

    users = json.results.map((result: Record<string, any>) => ({
        id: result.id.value,
        name: `${result.name.first} ${result.name.last}`,
        avatar: result.picture.large,
    }))
}

await getRandomUsers()
