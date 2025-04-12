<script setup>
    import TetrisClient from '@/tetris/TetrisClient.js';
    import TetrisMap from '@/components/tetris/MapComponent.vue';
    import TetrisQueue from '@/components/tetris/QueueComponent.vue';
    import { ref, onMounted, onUnmounted, onBeforeMount } from 'vue'; 

    const tetris = ref(null);
    const wrapper = ref(null);
    const isMobile = ref(false);

    const queue = ref([]);
    const map = ref([]);
    const info = ref('');
    const level = ref(0);
    const score = ref(0);
    const holdBlock = ref(null);
    const emptyBlockMap = ref(null);

    const updateSize = () => {
        isMobile.value = window.innerWidth <= 600;
    };

    onBeforeMount(() => {
        tetris.value = new TetrisClient(queue, map, info, level, score, holdBlock, emptyBlockMap);
        document.addEventListener('keydown', (e) => tetris.value.onKeyDownPress(e));
        document.addEventListener('keyup', (e) => tetris.value.onKeyUpPress(e));
    });

    onMounted(() => {
        updateSize();
        window.addEventListener('resize', updateSize);
        tetris.value.subscribeToGestures(wrapper, isMobile);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateSize);
    });
</script>

<template>
    <div class="wrapper" ref="wrapper">
        <div class="center">
            <div class="info">
                <h3>Level: {{level}}</h3>
                <h3>Score: {{score}}</h3>
            </div>
            <div class="btns">
                <span v-if="tetris.isPaused()" class="material-symbols-outlined" @click="tetris.resume()">play_arrow</span>
                <span v-if="!tetris.isPaused()" class="material-symbols-outlined" @click="tetris.pause()">pause</span>
                <span class="material-symbols-outlined" @click="tetris.restart()">restart_alt</span>
                <!--<span class="material-symbols-outlined">leaderboard</span>-->
            </div>
            <div v-if="info" class="info-message">
                <h2>{{info}}</h2>
                <span v-if="info === 'Ready?'" class="material-symbols-outlined play" @click="tetris.start()">play_arrow</span>
            </div>
            <div :class="info ? 'tetris opacity' : 'tetris'">
                <div class="hold">
                    <TetrisMap :onlyBlock="true"  :map="holdBlock ? holdBlock.state : emptyBlockMap" :pxSize="15"/>
                </div>
                <div class="main">
                    <TetrisMap :onlyBlock="false" :map="map" :pxSize="isMobile ? 20 : 30"/>
                </div>
                <div class="queue">
                    <TetrisQueue :queue="queue" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/vars.scss' as vars;
    @use '@/assets/stylesheets/all.scss' as *;

    .wrapper {
        width: 100%; height: 100dvh;
        background-color: vars.$primary; color: vars.$color-secondary;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .tetris {
        display: flex; flex-direction: row;
        width: auto;
        margin: auto;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
        position: relative;
        animation: fadeIn 1s;
    }
    .info {
        display: flex; flex-direction: row;
        text-align: center;
        margin: auto;
        width: 70%;
        justify-content: space-between;
        margin-bottom: vars.$spacing-2;
        color: vars.$color-secondary;
    }
    .btns {
        display: flex; flex-direction: row;
        text-align: center;
        font-family: monospace;
        margin: auto;
        justify-content: left;
        margin-bottom: vars.$spacing-3;
        color: vars.$color-primary;
        span {
            margin: 0 6px;
            cursor: pointer;
        }
    }
    .info-message {
        height: 0;
        top: 0; left: 0; right: 0; bottom: 0;
        margin: auto;
        position: absolute;
        color: vars.$color-secondary;
        opacity: 1;
        z-index: 1;
    }
    .opacity {
        opacity: 0.3;
    }
    .play {
        scale: 1.5;
        margin-top: vars.$spacing-2;
        cursor: pointer;
    }
    .queue {
        min-width: 76px;
    }
    .hold {
        min-width: 76px;
    }
    @media (max-width: vars.$mobile-size) {
        .tetris { width: 100%; overflow: hidden; }
        .play { scale: 1.2; }
        .info-message {
            h2 { font-size: var(--step-1); }
        }
    }
</style>
