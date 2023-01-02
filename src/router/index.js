import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingUp from '../views/auth/SingUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sing-up',
    name: 'SingUp',
    component: SingUp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
