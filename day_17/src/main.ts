import { createApp } from 'vue'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'
import App from './App.vue'

import './style.scss'

createApp(App).mount('#app')

if (window && window.innerWidth < 1024 && import.meta.env.DEV) {
    eruda.init()
    eruda.add(erudaDOM)
}
