import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/LoginComp.vue'
import SingUp from '../views/auth/SingUp.vue'
import isOlustur from '../views/isler/isOlustur'

const routes = [
  {
    path: '/',
    name: 'Home',
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
  {
    path: '/is-olustur',
    name: 'İsOlustur',
    component: isOlustur
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
