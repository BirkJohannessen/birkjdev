<template>
    <div class="content">
        <div class="info">
            {{ calculateRerender() }}
            {{ calculateZoom() }}
            <HoverController :zoomLevel="calculateZoom()" :indexLevel="calculateRerender()" />
        </div>
        <div class="sticky">
                <img v-if="calculateRerender() == 0" :src="primes[0]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 1" :src="primes[1]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 2" :src="primes[2]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 3" :src="primes[3]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 4" :src="primes[4]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 5" :src="primes[5]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 6" :src="primes[6]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 7" :src="primes[7]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 8" :src="primes[8]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 9" :src="primes[9]" :class="'zoom'+calculateZoom()" />
                <img v-if="calculateRerender() == 10" :src="primes[10]" :class="'zoom'+calculateZoom()" />
        </div>
        <div class="spaceStatic"></div>
        <div v-for="index in 32" :key="index" >
            <div class="spaceDynamic"></div>
        </div>
    </div>
</template>

<script>
//import p1 from '../assets/first.png'
//import p2 from '../assets/middle.png'
//import p3 from '../assets/last.png'
//import a2 from '../assets/PRIME_256.png'
//import a4 from '../assets/PRIME_1024.png'
//import a6 from '../assets/PRIME_4096.png'
//import a8 from '../assets/PRIME_16384.png'
//import a10 from '../assets/PRIME_65536.png'
//import a12 from '../assets/PRIME_262144.png'
//import a14 from '../assets/PRIME_1048576.png'
//import a16 from '../assets/PRIME_4194304.png'
//import a18 from '../assets/PRIME_16777216.png'
//import a19 from '../assets/PRIME_16777216.png'
import a from '../assets/PRIME_8.png'
import a0 from '../assets/PRIME_32.png'
import a1 from '../assets/PRIME_128.png'
import a3 from '../assets/PRIME_512.png'
import a5 from '../assets/PRIME_2048.png'
import a7 from '../assets/PRIME_8192.png'
import a9 from '../assets/PRIME_32768.png'
import a11 from '../assets/PRIME_131072.png'
import a13 from '../assets/PRIME_524288.png'
import a15 from '../assets/PRIME_2097152.png'
import a17 from '../assets/PRIME_8388608.png'
import HoverController from '@/components/HoverController.vue'

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
            return parseInt(this.windowTop % this.scrollLengthForRerender / this.scrollLengthForZoom);
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
            //return [a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19];
            return [a,a0,a1,a3,a5,a7,a9,a11,a13,a15,a17];
        },
    },
    data() {
        return {
            scrollLengthForRerender: 1800,
            scrollLengthForZoom: 120,
            windowTop: 0,
            activeIndex: 0,
        }
    },
}
</script>

<style scoped>
.zoom0{
    width: 100%;
    height: 100vh;
    transform: scale(4);
}
.zoom1{
    width: 100%;
    height: 100vh;
    transform: scale(3.8);
}
.zoom2{
    width: 100%;
    height: 100vh;
    transform: scale(3.6);
}
.zoom3{
    width: 100%;
    height: 100vh;
    transform: scale(3.4);
}
.zoom4{
    width: 100%;
    height: 100vh;
    transform: scale(3.2);
}
.zoom5{
    width: 100%;
    height: 100vh;
    transform: scale(3.0);
}
.zoom6{
    width: 100%;
    height: 100vh;
    transform: scale(2.8);
}
.zoom7{
    width: 100%;
    height: 100vh;
    transform: scale(2.6);
}
.zoom8{
    width: 100%;
    height: 100vh;
    transform: scale(2.4);
}
.zoom9{
    width: 100%;
    height: 100vh;
    transform: scale(2.2);
}
.zoom10{
    width: 100%;
    height: 100vh;
    transform: scale(2.0);
}
.zoom11{
    width: 100%;
    height: 100vh;
    transform: scale(1.8);
}
.zoom12{
    width: 100%;
    height: 100vh;
    transform: scale(1.6);
}
.zoom13{
    width: 100%;
    height: 100vh;
    transform: scale(1.4);
}
.zoom14{
    width: 100%;
    height: 100vh;
    transform: scale(1.2);
}
.zoom15{
    width: 100%;
    height: 100vh;
    transform: scale(1.2);
}

.content{
    background: black;
    width: 100%;
    color:white;
}
.sticky{
    width: 100%;
    position: fixed;
}
.spaceDynamic {
    width: 50px;
    height: 600px;
}
.spaceStatic{
    width: 50px;
    height: 100vh;
}
.info{
    color:white;
    position: fixed;
    z-index: 99;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
        height: 600px;
    }
    .spaceStatic{
        width: 5px;
        height: 100vh;
    }
    .info{
        color:white;
        position: fixed;
        z-index: 99;
    }

    .zoom0{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(4.0);
    }
    .zoom1{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(3.8);
    }
    .zoom2{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(3.6);
    }
    .zoom3{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(3.4);
    }
    .zoom4{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(3.2);
    }
    .zoom5{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(3.0);
    }
    .zoom6{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.8);
    }
    .zoom7{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.6);
    }
    .zoom8{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.4);
    }
    .zoom9{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.2);
    }
    .zoom10{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(2.0);
    }
    .zoom11{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.8);
    }
    .zoom12{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.6);
    }
    .zoom13{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.4);
    }
    .zoom14{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
        transform: scale(1.2);
    }
    .zoom15{
        transform: rotate(90deg);
        width: 250vw;
        height: 100vh;
        position: relative;
        left: -75%;
    }
}

</style>