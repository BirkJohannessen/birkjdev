import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'
import PrimeView2 from '../views/PrimeView2'
import MainView from '../views/MainView'
import BiSHkView from '../views/BiSHkView.vue'
import FallbackView from '../views/FallbackView.vue'
import TetrisView from '../views/TetrisView.vue'
import Typenigma from '../views/Typenigma.vue'



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
    path: '/projects/primes2',
    name: 'PrimeView2',
    component: PrimeView2,
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
  },
  {
    path: '/projects/typenigma',
    name: 'Typenigma',
    component: Typenigma,
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
