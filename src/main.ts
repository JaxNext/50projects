import { createApp } from 'vue'
import Router from '@/routes/router'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'



const app = createApp(App)
app.use(Router)
app.mount('#app')
