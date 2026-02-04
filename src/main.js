import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // นำเข้า router
import './assets/tailwind.css'

const app = createApp(App)
app.use(router) // บอกให้ Vue ใช้ router
app.mount('#app')