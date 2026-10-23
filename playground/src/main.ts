import { createApp } from 'vue'
import Atelier from '@tymotheusz/atelier'
import '../../src/styles/tokens.css'
import '../../src/styles/components.css'
import './playground.css'
import App from './App.vue'

createApp(App).use(Atelier).mount('#app')
