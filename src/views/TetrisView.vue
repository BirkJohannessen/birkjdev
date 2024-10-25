G
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
                <h1>{{info}}</h1>
                <span v-if="this.info === 'Ready?'" class="material-symbols-outlined play" @click="this.tetris.start()">play_arrow</span>
            </div>
            <div :class="this.info ? 'tetris opacity' : 'tetris'">
                <div class="hold">
                    <TetrisMap :onlyBlock="true"  :map="this.holdBlock ? this.holdBlock.state : this.emptyBlockMap" :pxSize="15"/>
                </div>
                <div class="main">
                    <TetrisMap :onlyBlock="false" :map="this.map" :pxSize="30"/>
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
    methods: {
        onKeyDownPress(e) {
            this.tetris.onKeyDownPress(e);
        },
        onKeyUpPress(e) {
            this.tetris.onKeyUpPress(e);
        }
    },
    data() {
        return {
            info: '',
            score: 0,
            level: '',
            map: [],
            queue: [],
            emptyBlockMap: []
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
        width: auto;
        margin: auto;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
        position: relative;
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
            cursor: pointer;
        }
    }
    .info-message {
        height: 0;
        top: 0; left: 0; right: 0; bottom: 0;
        margin: auto;
        position: absolute;
        color: white;
        opacity: 1;
        z-index: 1;
    }
    .opacity {
        opacity: 0.3;
    }
    .play {
        scale: 1.5;
        margin-top: 12px;
        cursor: pointer;
    }
    .queue {
        min-width: 76px;
    }
    .hold {
        min-width: 76px;
    }

</style>
