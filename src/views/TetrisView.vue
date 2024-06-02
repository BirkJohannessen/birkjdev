<template>
    <div class="wrapper">
        <div class="center">
            <div class="info">
                <h1>Level: {{this.level}}</h1>
                <h1>Score: {{this.score}}</h1>
            </div>
            <div class="btns">
                <span class="material-symbols-outlined">pause</span>
                <span class="material-symbols-outlined">restart_alt</span>
                <span class="material-symbols-outlined">leaderboard</span>
            </div>
            <div v-if="this.info" class="info-message">
                <h1>{{info}}</h1>
            </div>
            <div :class="this.info ? 'tetris opacity' : 'tetris'">
                <div class="main">
                    <TetrisMap  :map="this.tetris.gameInfo.storedBlock ? this.tetris.gameInfo.storedBlock.state : this.emptyBlockMap" :pxSize="15"/>
                </div>
                <div class="main">
                    <TetrisMap  :map="this.map" :pxSize="30"/>
                </div>
                <div class="queue">
                    <TetrisQueue :queue="this.queue" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TetrisEngine from '../tetris/TetrisEngine.js'
import TetrisBlock from '../tetris/blocks/TetrisBlock.js'
import TetrisMap from '../components/tetris/MapComponent.vue'
import TetrisQueue from '../components/tetris/QueueComponent.vue'

export default {
    name: 'TetrisView',
    components: {
        TetrisMap,
        TetrisQueue
    },
    beforeMount() {
        this.tetris = new TetrisEngine();
        this.tetris.start();
        this.run();
        document.addEventListener("keydown", this.onKeyDownPress);
        document.addEventListener("keyup", this.onKeyUpPress);
    },
    methods: {
        run() {
            setTimeout(() => {
                if (!this.tetris.gameInfo.stop) {
                    this.tetris.run();
                    this.level = this.tetris.gameInfo.level;
                    this.score = this.tetris.gameInfo.score;
                    this.map = this.tetris.map.map;
                    this.queue = this.tetris.tetrisControl.blockStack;
                    this.run();
                } else {
                    this.info = 'Game over'
                    this.tetris.run();
                }
            },  15);
        },
        onKeyUpPress(e) {
            e.stopPropagation();
            if (e.key === 'ArrowRight') {
                this.tetris.input.right = 0;
            }
            if (e.key === 'ArrowLeft') {
                this.tetris.input.left = 0;
            }
            if (e.key === 'ArrowDown') {
                this.tetris.input.down = 0;
            }
        },
        onKeyDownPress(e) {
            e.stopPropagation();
            if (e.key === 'ArrowLeft') {
                if (this.tetris.input.left === 0) {
                    this.tetris.input.right = 0;
                    this.tetris.input.left = 1;
                    this.tetris.setKeyDownInputDelay();
                } else {
                    this.tetris.input.right = 0;
                    this.tetris.input.left = 1;
                }
            }
            if (e.code === 'Space') {
                this.tetris.input.commit = 1;
            }
            if (e.key === 'ArrowRight') {
                if (this.tetris.input.right === 0) {
                    this.tetris.input.left = 0;
                    this.tetris.input.right = 1;
                    this.tetris.setKeyDownInputDelay();
                } else {
                    this.tetris.input.left = 0;
                    this.tetris.input.right = 1;
                }
            }
            if (e.key === 'ArrowUp') {
                this.tetris.input.up = 1;
            }
            if (e.key === 'ArrowDown') {
                this.tetris.input.down = 1;
            }
            if (e.key === 'Shift') {
                this.tetris.input.save = 1;
            }
        },
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            info: '',
            score: 0,
            level: '',
            map: [],
            queue: [],
            emptyBlockMap: new TetrisBlock().getEmptyControlMap()
        }
    },
}
</script>

<style scoped>
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .tetris {
        display: flex; flex-direction: row;
        width: auto; height: 500px;
        margin: auto;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
    }
    .info {
        display: flex; flex-direction: row;
        text-align: center;
        font-family: monospace;
        margin: auto;
        width: 70%;
        justify-content: space-between;
        margin-bottom: 12px;
        color: #52495d;
    }
    .btns {
        display: flex; flex-direction: row;
        text-align: center;
        font-family: monospace;
        margin: auto;
        justify-content: left;
        margin-bottom: 16px;
        color: #52495d;
        span {
            margin: 0 6px;
        }
    }
    .info-message {
        height: 0;
        top: 250px;
        position: relative;
        color: white;
        opacity: 1;
        z-index: 1;
    }
    .opacity {
        opacity: 0.3;
    }

</style>
