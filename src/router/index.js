import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PrimeView from '../views/PrimeView'
import MainView from '../views/MainView'
import BiSHkView from '../views/BiSHkView.vue'
import FallbackView from '../views/FallbackView.vue'
import TetrisView from '../views/TetrisView.vue'
import Typenigma from '../views/Typenigma.vue'
import BlogView from '../views/BlogView.vue'
import BlogsView from '../views/BlogsView.vue'
import blogs from '@/assets/blogs/BlogConfig.js'

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
  },
  {
    path: '/projects/typenigma',
    name: 'Typenigma',
    component: Typenigma,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsView,
  },
  {
    path: '/blog/:id?',
    name: 'Blog',
    component: BlogView,
    props: route => {
      const blog = blogs.find(o => o.id === parseInt(route.params.id)) || blogs[0];
      return { blog };
    },
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
