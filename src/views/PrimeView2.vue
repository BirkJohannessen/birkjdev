<template>
    <div class="content">
        <svg version="1.1" position="relative">
          <circle cx="1" cy="1" r="2" fill="#c1b2f7" stroke="#ffffff"/>
          <circle cx="10" cy="10" r="2" fill="#c1b2f7" stroke="#ffffff"/>
        </svg>
    </div>
</template>

<script>
import HoverController from '@/components/HoverController.vue'
import Config from '../config/primeConfig'
// <img v-if="this.activeIndex == index" :src="image" :class="this.activeIndex === index ? 'zoom'+this.activeZoom : 'idle'" />
export default {
    name: 'PrimeView2',
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        }
    },
}
</script>

<style scoped>
.content {
    margin: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    color: white;
    text-align: center;
    overflow: hidden;
}
</style>
