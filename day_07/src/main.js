import { createApp } from 'vue'
import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

if (window && import.meta.env.DEV && window.innerWidth < 1024) {
    eruda.init()
    eruda.add(erudaDOM)
}
