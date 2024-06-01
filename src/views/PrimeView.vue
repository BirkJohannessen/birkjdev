<template>
    <div class="content">
        <div class="info">
            {{ calculateRerender() }}
            {{ calculateZoom() }}
            <HoverController :zoomLevel="calculateZoom()" :indexLevel="calculateRerender()" />
        </div>
        <div v-for="(image, index) in primes" class="sticky" :key="index" >
                <img :src="image" :class="this.activeIndex === index ? 'zoom'+this.activeZoom : 'idle'" draggable="false" />
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
.zoom0{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(2);
    z-index: 3;
}
.zoom1{
    width: 100%;
    position: relative;
    height: 100vh;
    transform: scale(1.9);
    z-index: 3;
}
.zoom2{
    width: 100%;
    position: relative;
    height: 100vh;
    transform: scale(1.8);
    z-index: 3;
}
.zoom3{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.7);
    z-index: 3;
}
.zoom4{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.6);
    z-index: 3;
}
.zoom5{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.5);
    z-index: 3;
}
.zoom6{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.4);
    z-index: 3;
}
.zoom7{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.3);
    z-index: 3;
}
.zoom8{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.2);
    z-index: 3;
}
.zoom9{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.1);
    z-index: 3;
}
.zoom10{
    position: relative;
    width: 100%;
    height: 100vh;
    transform: scale(1.0);
    z-index: 3;
}
.idle{
    position: relative;
    left: 100vw;
    width: 10vw;
    height: 10vh;
    z-index: -3;
}

.content{
    background: black;
    width: 100vw;
    color:white;
}
.sticky{
    width: 100%;
    position: fixed;
}
.spaceDynamic {
    width: 50px;
    height: 1200px;
}
.spaceStatic{
    width: 50px;
    height: 99vh;
}
.info{
    color:white;
    position: fixed;
    z-index: 1;
}

@media only screen and (max-width: 768px) {
    .content{
        background: black;
        width: 100vw;
        color:white;
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
        color:white;
        position: fixed;
        z-index: 2;
    }

    .zoom0{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.0);
        z-index: 1;
    }
    .zoom1{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.9);
        z-index: 1;
    }
    .zoom2{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.8);
        z-index: 1;
    }
    .zoom3{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.7);
        z-index: 1;
    }
    .zoom4{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.6);
        z-index: 1;
    }
    .zoom5{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.5);
        z-index: 1;
    }
    .zoom6{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.4);
        z-index: 1;
    }
    .zoom7{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.3);
        z-index: 1;
    }
    .zoom8{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.2);
        z-index: 1;
    }
    .zoom9{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.1);
        z-index: 1;
    }
}

</style>
