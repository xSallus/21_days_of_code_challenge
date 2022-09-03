import axios from 'axios'

const config = {
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
    },
}

export const api = axios.create(config)
