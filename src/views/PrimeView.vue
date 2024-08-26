<template>
    <div class="content">
        <div class="info">
            {{ calculateRerender() }}
            {{ calculateZoom() }}
            <HoverController :zoomLevel="calculateZoom()" :indexLevel="calculateRerender()" />
        </div>
        <div v-for="(image, index) in primes" class="sticky" :key="index" >
                <img :src="image" :class="this.activeIndex === index ? 'zoom z'+this.activeZoom : 'idle'" draggable="false" />
        </div>
        <div class="spaceStatic"></div>
        <div v-for="index in primes.length" :key="index" >
            <div class="spaceDynamic"></div>
        </div>
    </div>
</template>

<script>
import HoverController from '@/components/HoverController.vue'
import Config from '../config/primeConfig'
// <img v-if="this.activeIndex == index" :src="image" :class="this.activeIndex === index ? 'zoom'+this.activeZoom : 'idle'" />
export default {
    name: 'PrimeView',
    components: {
        HoverController
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.windowTop = window.top.scrollY;
        },
        calculateZoom() {
            let zoom = parseInt(this.windowTop % this.scrollLengthForRerender / this.scrollLengthForZoom);
            if(zoom != this.activeZoom){
                this.activeZoom = zoom;
            }
            return zoom
        },
        calculateRerender() {
            let index = parseInt( this.windowTop / this.scrollLengthForRerender)
            if(index != this.activeIndex){
                this.activeIndex = index;
            }
            return index;
            
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
            windowTop: 0,
            activeIndex: 0,
            activeZoom: 0,
        }
    },
}
</script>

<style scoped>
.zoom {
    position: relative;
    width: 100%;
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

.idle {
    position: relative;
    left: 100vw;
    width: 10vw;
    height: 10vh;
    z-index: -3;
}

.content {
    background: black;
    width: 100vw;
    color: white;
}

.sticky {
    width: 100%;
    position: fixed;
    left: 0;
}

.spaceDynamic {
    width: 50px;
    height: 1200px;
}

.spaceStatic {
    width: 50px;
    height: 99vh;
}

.info {
    color: white;
    position: fixed;
    z-index: 1;
    left: 0;
}

@media only screen and (max-width: 768px) {
    .zoom {
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
    }

    .content{
        background: black;
        width: 100vw;
        color: white;
    }

    .sticky{
        width: 100vw;
        position: fixed;
    }

    .spaceDynamic {
        width: 5px;
        height: 1200px;
    }

    .spaceStatic{
        width: 5px;
        height: 100vh;
    }

    .info{
        color: white;
        position: fixed;
        z-index: 2;
    }
}

</style>
