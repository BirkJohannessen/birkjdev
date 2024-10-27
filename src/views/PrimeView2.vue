<template>
    <div class="content">
        <img src="@/assets/primesvg/PRIME_65536.svg" />
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
    computed: {
        primes(){
            return Config.prime2Array
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/all.scss';
img {
    object-fit: contain;
    width: 100%; height: 100%
}
.content {
    margin: 0;
    background-color: $primary;
    width: 100vw;
    height: 100vh;
    color: white;
    text-align: center;
    overflow: hidden;
}
</style>
