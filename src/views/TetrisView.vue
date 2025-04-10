<template>
    <div class="wrapper">
        <div class="center">
            <div class="info">
                <h3>Level: {{this.level}}</h3>
                <h3>Score: {{this.score}}</h3>
            </div>
            <div class="btns">
                <span v-if="this.tetris.isPaused()" class="material-symbols-outlined" @click="this.tetris.resume()">play_arrow</span>
                <span v-if="!this.tetris.isPaused()" class="material-symbols-outlined" @click="this.tetris.pause()">pause</span>
                <span class="material-symbols-outlined" @click="this.tetris.restart()">restart_alt</span>
                <!--<span class="material-symbols-outlined">leaderboard</span>-->
            </div>
            <div v-if="this.info" class="info-message">
                <h2>{{info}}</h2>
                <span v-if="this.info === 'Ready?'" class="material-symbols-outlined play" @click="this.tetris.start()">play_arrow</span>
            </div>
            <div :class="this.info ? 'tetris opacity' : 'tetris'">
                <div class="hold">
                    <TetrisMap :onlyBlock="true"  :map="this.holdBlock ? this.holdBlock.state : this.emptyBlockMap" :pxSize="15"/>
                </div>
                <div class="main">
                    <TetrisMap :onlyBlock="false" :map="this.map" :pxSize="isMobile ? 20 : 30"/>
                </div>
                <div class="queue">
                    <TetrisQueue :queue="this.queue" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TetrisClient from '../tetris/TetrisClient.js'
import TetrisMap from '../components/tetris/MapComponent.vue'
import TetrisQueue from '../components/tetris/QueueComponent.vue'
import Hammer from 'hammerjs'

export default {
    name: 'TetrisView',
    components: {
        TetrisMap,
        TetrisQueue
    },
    beforeMount() {
        this.tetris = new TetrisClient(this);
        document.addEventListener("keydown", this.onKeyDownPress);
        document.addEventListener("keyup", this.onKeyUpPress);
    },
    mounted() {
        this.updateSize();
        window.addEventListener('resize', this.updateSize);

        const el = document.querySelector('.wrapper');
        const hammertime = new Hammer(el, {});

        hammertime.on('tap', (e) => {
            if (!this.isMobile) return;
            this.tetris.gestureTap(e);
        });

        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

        hammertime.on('swipeup', (e) => {
            if (!this.isMobile) return;
            this.tetris.gestureSwipeUp(e);
        });

        hammertime.on('swipedown', (e) => {
            if (!this.isMobile) return;
            this.tetris.gestureSwipeDown(e);
        });

        hammertime.on('swipeup', (e) => {
            if (!this.isMobile) return;
            this.tetris.gestureSwipeUp(e);
        });

        hammertime.on('press', (e) => {
            if (!this.isMobile) return;
            this.tetris.gesturePress(e);
        });

        hammertime.on('pressup', (e) => {
            if (!this.isMobile) return;
            this.tetris.gesturePressUp(e);
        });

        hammertime.on('panend', (e) => {
            if (!this.isMobile) return;
            this.tetris.gesturePanend(e);
        });

        hammertime.on('panleft panright', (e) => {
            if (!this.isMobile) return;
            this.tetris.gesturePanmove(e);
        });
    },
    unmounted() {
        window.removeEventListener('resize', this.updateSize);
    },
    methods: {
        onKeyDownPress(e) {
            this.tetris.onKeyDownPress(e);
        },
        onKeyUpPress(e) {
            this.tetris.onKeyUpPress(e);
        },
        updateSize() {
            this.isMobile = window.innerWidth <= 600;
        }
    },
    data() {
        return {
            isMobile: false,
            info: '',
            score: 0,
            level: '',
            map: [],
            queue: [],
            emptyBlockMap: [],
            globalX: 0
        }
    },
}
</script>

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
