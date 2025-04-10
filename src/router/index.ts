import { createRouter, createWebHistory } from 'vue-router';
import PrimeView from '@/views/PrimeView.vue';
import MainView from '@/views/MainView.vue';
import FallbackView from '@/views/FallbackView.vue';
import TetrisView from '@/views/TetrisView.vue';
import Typenigma from '@/views/Typenigma.vue';
import BlogView from '@/views/BlogView.vue';
import BlogsView from '@/views/BlogsView.vue';
import { blogs } from '@/config/BlogConfig.js';
import type { RouteLocationNormalized } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'MainView',
        component: MainView,
    },
    /*
    {
        path: '/projects/biSHk',
        name: 'BiSHkView',
        component: BiSHkView,
    },
    */
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
        props: (route: RouteLocationNormalized) => {
            const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
            const blog = blogs.find((o: Blog) => o.id === parseInt(id)) || blogs[0];
            return { blog };
        },
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
