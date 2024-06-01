import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'
import MainView from '../views/MainView'
import BiSHkView from '../views/BiSHkView.vue'
import FallbackView from '../views/FallbackView.vue'
import TetrisView from '../views/TetrisView.vue'



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
  },
  {
    path: '/projects/tetris',
    name: 'TetrisView',
    component: TetrisView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'FallbackView',
    component: FallbackView,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
