import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: HomeView 
  },
  { 
    path: '/portfolio', 
    name: 'portfolio', 
    component: PortfolioView 
  }
]

const router = createRouter({
  // ใช้ Hash History เพื่อป้องกันปัญหาหน้าขาวบน GitHub Pages
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router