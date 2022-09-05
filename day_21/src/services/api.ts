import axios from 'axios'

const options = {
    baseURL: import.meta.env.VITE_ISSUES_URL,
}

export const api = axios.create(options)
