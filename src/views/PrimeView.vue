<script setup>
    import HoverController from '@/components/primespiral/HoverController.vue'
    import Config from '@/config/primeConfig'
    import { ref, computed, onUnmounted, onMounted } from 'vue'; 

    const primes = computed(() => { return Config.primeArray });
    const scrollLengthForRerender = ref(1200);
    const scrollLengthForZoom = ref(120);
    const scrollLevel = ref(0);
    const zoomLevel = ref(0);
    
    const onScroll = () => {
        console.log('onzoom');
        const topY = window.top.scrollY;
        zoomLevel.value = parseInt(topY % (scrollLengthForRerender.value) / scrollLengthForZoom.value);
        scrollLevel.value = parseInt(topY / scrollLengthForRerender.value);
    };

    onMounted(() => {
        window.addEventListener('scroll', onScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    });
</script>

<template>
    <div class="wrapper">
        <div class="info">
            {{ scrollLevel }}
            {{ zoomLevel }}
            <HoverController :zoomLevel="zoomLevel" :indexLevel="scrollLevel" />
        </div>
        <div v-for="(image, index) in primes" class="img-holder" :key="index">
            <img :src="image" :class="scrollLevel === index ? `zoom z${zoomLevel}` : 'idle'" alt="" draggable="false" />
        </div>
        <!-- spacing -->
        <div v-for="index in primes.length" :key="index">
            <div class="spaceDynamic"></div>
        </div>
        <div class="spaceDynamicLast"></div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .wrapper {
        overflow: visible;
    }

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
        height: calc(120px * 8);
    }

    .info {
        color: vars.$color-secondary;
        position: fixed;
        z-index: 1;
        left: 0;
    }

    .zoom {
        position: relative;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: 3;
    }

    .z0 { transform: scale(2); }
    .z1 { transform: scale(1.9); }
    .z2 { transform: scale(1.8); }
    .z3 { transform: scale(1.7); }
    .z4 { transform: scale(1.6); }
    .z5 { transform: scale(1.5); }
    .z6 { transform: scale(1.4); }
    .z7 { transform: scale(1.3); }
    .z8 { transform: scale(1.2); }
    .z9 { transform: scale(1.1); }
    .z10 { transform: scale(1.0); }


    @media (max-width: vars.$mobile-size) {
        .zoom {
            top: -80px;
            width: 250vw;
            left: -75%;
        }

        .info {
            z-index: 1;
            left: 0;
        }

        .img-holder {
            height: 100vh;
        }

        .z0 { transform: scale(2) rotate(90deg); }
        .z1 { transform: scale(1.9) rotate(90deg); }
        .z2 { transform: scale(1.8) rotate(90deg); }
        .z3 { transform: scale(1.7) rotate(90deg); }
        .z4 { transform: scale(1.6) rotate(90deg); }
        .z5 { transform: scale(1.5) rotate(90deg); }
        .z6 { transform: scale(1.4) rotate(90deg); }
        .z7 { transform: scale(1.3) rotate(90deg); }
        .z8 { transform: scale(1.2) rotate(90deg); }
        .z9 { transform: scale(1.1) rotate(90deg); }
        .z10 { transform: scale(1.0) rotate(90deg) }
    }
</style>
