import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'
import MainView from '../views/MainView'
import BiSHkView from '../views/BiSHkView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/projects/biSHk',
    name: 'BiSHkView',
    component: BiSHkView,
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
