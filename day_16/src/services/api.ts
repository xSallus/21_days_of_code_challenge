import axios from 'axios'

const baseURL = 'https://api.openweathermap.org/data/2.5'

export const API_KEY = import.meta.env.VITE_API_KEY

export const api = axios.create({ baseURL })
