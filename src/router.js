import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', component: HomeView },
  { path: '/portfolio', component: PortfolioView }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router