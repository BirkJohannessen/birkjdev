import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'

const routes = [
  {
    path: '/',
    name: 'PrimeView',
    component: PrimeView,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router