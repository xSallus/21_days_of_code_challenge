import axios from 'axios'

const baseURL = 'https://the-trivia-api.com/api'

export const api = axios.create({ baseURL })
