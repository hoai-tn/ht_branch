import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Routers from "./routers"

createApp(App).use(Routers).mount('#app')
