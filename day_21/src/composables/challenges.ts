import { Ref, ref } from 'vue'
import { api } from '../services/api'

export interface Project {
  id: string
  title: string
  description: string
}

export interface Issue {
  id: number
  title: string
  html_url: string
  created_at: string
  body: string

  user: {
    avatar_url: string
    login: string
  }
}

export const timeouts: number[] = []
export const isLoadingUI: Ref<boolean> = ref(true)

export const challenges: Project[] = [
    {
        id: 'day_01',
        title: 'Project repository created.',
        description: 'Creates the repository for subsequent challenges guard',
    },
    {
        id: 'day_02',
        title: 'Hello World',
        description: 'Creates an awesome custom hello world',
    },
    {
        id: 'day_03',
        title: 'Animated Button',
        description: 'Creates an awesome animated button',
    },
    {
        id: 'day_04',
        title: 'Calculator',
        description: 'Creates an awesome calculator',
    },
    {
        id: 'day_05',
        title: 'Page Not Found',
        description: 'Creates an awesome custom 404 page',
    },
    {
        id: 'day_06',
        title: 'Glassmorphism Card',
        description: 'Creates an awesome card with glassmorphism',
    },
    {
        id: 'day_07',
        title: 'Timer',
        description: 'Creates an awesome countdown timer',
    },
    {
        id: 'day_08',
        title: 'Toggle',
        description: 'Creates an awesome toggle to switch light/dark theme',
    },
    {
        id: 'day_09',
        title: 'Loading',
        description: 'Creates an awesome loading animation',
    },
    {
        id: 'day_10',
        title: 'ParticleJS',
        description: 'Creates an awesome effect using partilces js library',
    },
    {
        id: 'day_11',
        title: 'Login Form',
        description: 'Creates an awesome login form layout',
    },
    {
        id: 'day_12',
        title: 'Gallery',
        description: 'Creates an awesome image gallery',
    },
    {
        id: 'day_13',
        title: 'Menu',
        description: 'Creates an awesome responsive menu',
    },
    {
        id: 'day_14',
        title: 'Quiz',
        description: 'Creates an awesome quizzes form',
    },
    {
        id: 'day_15',
        title: 'Showcase',
        description: 'Creates an awesome product showcase for an e-commerce',
    },
    {
        id: 'day_16',
        title: 'API consum8ng',
        description: 'Creates an awesome app consuming some public api',
    },
    {
        id: 'day_17',
        title: 'Keylogger',
        description:
      'Creates an awesome app that capture keyboard events and show pressed keys',
    },
    {
        id: 'day_18',
        title: 'Keygen',
        description: 'Creates an awesome app that generates random passwords',
    },
    {
        id: 'day_19',
        title: 'Random Image',
        description:
      'Creates an awesome that shows random images from Unsplash\'s api',
    },
    {
        id: 'day_20',
        title: 'Emoji Picker',
        description: 'Creates an awesome app that copies emojis to the clipboard',
    },
]

export const user = {
    name: 'Salomao Souza',
    role: 'Frontend Developer',
    avatar: 'https://github.com/xSallus.png',
    location: 'Brazil',
    company: 'NaN',
    social: [
        {
            text: 'xSallus',
            icon: '../assets/icons/github.svg',
            href: 'https://github.com/xSallus',
        },
        {
            text: 'salomao-vasconcelos',
            icon: '../assets/icons/linkedin.svg',
            href: 'https://linkedin.com/in/salomao-vasconcelos',
        },
        {
            text: 'xsallus_dev',
            icon: '../assets/icons/twitter.svg',
            href: 'https://twitter.com/xsallus_dev',
        },
        {
            text: 'salomaovasconcelos.vercel.app/',
            icon: '../assets/icons/globe.svg',
            href: 'https://salomaovasconcelos.vercel.app/',
        },
        {
            text: 'crypto.mining.2077@gmail.com',
            icon: '../assets/icons/mail.svg',
            href: 'mailto:crypto.mining.2077@gmail.com',
        },
    ],
    proeficiences: [
        'reactjs',
        'vuejs',
        'react native',
        'nextjs',
        'typescript',
        'sass',
        'chakra ui',
        'tailwind',
        'git',
    ],
}

export async function fetchIssues() {
    const { data } = await api.get<Issue[]>('/issues')

    return data
}
