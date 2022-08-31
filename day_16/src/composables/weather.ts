import { Ref, ref, reactive } from 'vue'
import { api, API_KEY } from '../services/api'

interface Coords {
  latitude: number
  longitude: number
}
const errors = ['User denied Geolocation']
const key = '@day-16:forecast__v1.0'

export interface Forecast {
  base: string
  name: string
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_min: number
    temp_max: number
  }
  weather: {
    id: number
    icon: string
    description: string
    main: string
  }[]
  wind: {
    speed: number
    deg: number
  }
}

export let forecast: Forecast = reactive({} as Forecast)
export const canUseLocation: Ref<boolean> = ref(false)
export const isLoadingWeather: Ref<boolean> = ref(true)

export const timeouts: number[] = []

function retrieveData(): boolean {
    const stored = localStorage.getItem(key)

    if (!stored) return false

    forecast = JSON.parse(stored)
    timeouts.push(
        setTimeout(() => {
            isLoadingWeather.value = false
        }, 2500)
    )
    return true
}

export function getGeoLocation() {
    if (retrieveData()) return

    if (window && navigator && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                canUseLocation.value = true
                await loadWeather(pos.coords).finally(() => {
                    if (Object.values(forecast).length) {
                        isLoadingWeather.value = false
                    }
                })
            },
            (error) => {
                canUseLocation.value = false
                if (error && errors.includes(error.message)) {
                    alert(error.message)
                } else {
                    console.log(error)
                }
            }
        )
    }
}

export async function loadWeather({
    latitude,
    longitude,
}: Coords): Promise<void> {
    if (!canUseLocation.value) return

    const endpoint = `weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    const { data } = await api.get<Forecast>(endpoint)
    forecast = data
    localStorage.setItem(key, JSON.stringify(data))
}
