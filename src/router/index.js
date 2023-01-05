import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/LoginComp.vue'
import SingUp from '../views/auth/SingUp.vue'
import isOlustur from '../views/isler/isOlustur';
import isDetay from '../views/isler/isDetay';
import { authRef } from '@/firebase/config'

const authGiris = (to, from, next) => {
  let kullanici = authRef.currentUser

  if (!kullanici) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: authGiris
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
    component: isOlustur,
    beforeEnter: authGiris

  },
  {
    path: '/isler/:id',
    name: 'isDetay',
    component: isDetay,
    beforeEnter: authGiris,
    props: true

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
