<template>
    <div>
        <div class="info">
            {{ scrollLevel }}
            {{ zoomLevel }}
            <HoverController :zoomLevel="zoomLevel" :indexLevel="scrollLevel" />
        </div>
        <div v-for="(image, index) in primes" class="img-holder" :key="index">
                <img :src="image" :class="this.scrollLevel === index ? 'zoom z'+this.zoomLevel : 'idle'" alt="" draggable="false" />
        </div>
        <!-- spacing -->
        <div v-for="index in primes.length" :key="index">
            <div class="spaceDynamic"></div>
        </div>
        <div class="spaceDynamicLast"></div>
    </div>
</template>

<script>
import HoverController from '@/components/primespiral/HoverController.vue'
import Config from '@/config/primeConfig'
export default {
    name: 'PrimeView',
    components: {
        HoverController
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll() {
            const topY = window.top.scrollY;
            this.zoomLevel = parseInt(topY % this.scrollLengthForRerender / this.scrollLengthForZoom);
            this.scrollLevel = parseInt(topY / this.scrollLengthForRerender);
        }
    },
    computed: {
        primes(){
            return Config.primeArray
        }
    },
    data() {
        return {
            scrollLengthForRerender: 1200,
            scrollLengthForZoom: 120,
            scrollLevel: 0,
            zoomLevel: 0
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/all.scss';
.idle {
    position: relative;
    left: 100vw;
    z-index: -3;
}

.img-holder {
    width: 100%;
    position: fixed;
    left: 0;
}

.spaceDynamic {
    height: 1200px;
}

.spaceDynamicLast {
    height: calc(120px * 9);
}

.info {
    color: $color-secondary;
    position: fixed;
    z-index: 1;
    left: 0;
}

.zoom {
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 3;
}

.z0 {
    transform: scale(2);
}

.z1 {
    transform: scale(1.9);
}

.z2 {
    transform: scale(1.8);
}

.z3 {
    transform: scale(1.7);
}

.z4 {
    transform: scale(1.6);
}

.z5 {
    transform: scale(1.5);
}

.z6 {
    transform: scale(1.4);
}

.z7 {
    transform: scale(1.3);
}

.z8 {
    transform: scale(1.2);
}

.z9 {
    transform: scale(1.1);
}

.z10 {
    transform: scale(1.0);
}


@media (max-width: $mobile-size) {
    .zoom {
        transform: rotate(90deg);
        width: 250vw;
        left: -75%;
    }

    .img-holder {
        height: 100vh;
    }
}

</style>
