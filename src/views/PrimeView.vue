<template>
    <div class="content">
        <div class="sticky">
            <img :src="primes[calculateRerender()]" :class="'zoom'+calculateZoom()" />
        </div>
        <div class="spaceStatic"></div>
        <div v-for="index in 19" :key="index" >
            <div class="spaceDynamic">asdf</div>
        </div>
    </div>
</template>

<script>
import p1 from '../assets/first.png'
import p2 from '../assets/middle.png'
import p3 from '../assets/last.png'
import a1 from '../assets/PRIME_128.png'
import a2 from '../assets/PRIME_256.png'
import a3 from '../assets/PRIME_512.png'
import a4 from '../assets/PRIME_1024.png'
import a5 from '../assets/PRIME_2048.png'
import a6 from '../assets/PRIME_4096.png'
import a7 from '../assets/PRIME_8192.png'
import a8 from '../assets/PRIME_16384.png'
import a9 from '../assets/PRIME_32768.png'
import a10 from '../assets/PRIME_65536.png'
import a11 from '../assets/PRIME_131072.png'
import a12 from '../assets/PRIME_262144.png'
import a13 from '../assets/PRIME_524288.png'
import a14 from '../assets/PRIME_1048576.png'
import a15 from '../assets/PRIME_2097152.png'
import a16 from '../assets/PRIME_4194304.png'
import a17 from '../assets/PRIME_8388608.png'
import a18 from '../assets/PRIME_16777216.png'
import a19 from '../assets/PRIME_33554432.png'

export default {
    name: 'PrimeView',
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
            return parseInt( this.windowTop / this.scrollLengthForRerender)
        }
    },
    computed: {
        primes(){
            return [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19];
        },
    },
    data() {
        return {
            scrollLengthForRerender: 600,
            scrollLengthForZoom: 120,
            windowTop: 0,
        }
    },
}
</script>

<style scoped>
.zoom0{
    width: 100%;
    height: 100vh;
    transform: scale(1.8);
}
.zoom1{
    width: 100%;
    height: 100vh;
    transform: scale(1.6);
}
.zoom2{
    width: 100%;
    height: 100vh;
    transform: scale(1.4);
}
.zoom3{
    width: 100%;
    height: 100vh;
    transform: scale(1.2);
}
.zoom4{
    width: 100%;
    height: 100vh;
}

.content{
    background: black;
    width: 100%;
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

</style>