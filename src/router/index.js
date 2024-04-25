import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'
import MainView from '../views/MainView'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/projects/primes',
    name: 'PrimeView',
    component: PrimeView,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
