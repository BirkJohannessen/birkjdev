<template>
    <div class="wrapper">
        <div class="center">
            <div id="timer" v-if="[0,1].includes(this.gameState)">
                {{ timeDisplay }}
            </div>
            <Sentence id="sentence" :engine="this.engine" ref="sentence" v-if="[0,1].includes(this.gameState)" />
            <Result :engine="this.engine" v-if="this.gameState == 2"/>
            <div class="btns">
                <button class="material-symbols-outlined" id="reset" @click="this.reset()">restart_alt</button>
            </div>
        </div>
    </div>
</template>

<script>
import Sentence from '@/components/typenigma/Sentence.vue';
import Result from '@/components/typenigma/TypeResult.vue';
import TypenigmaEngine from '@/typenigma/TypenigmaEngine.js';

export default {
    name: 'Typenigma',
    beforeMount() {
        if (!this.engine) {
            this.engine = new TypenigmaEngine();
            setInterval(() => {
                this.timeDisplay = this.engine.gameInfo.timeDisplay;
                this.gameState = this.engine.gameInfo.gameState
            }, 100);
        }
    },
    components: {
        Sentence,
        Result
    },
    methods: {
        reset() {
            this.engine.reset();
            document.getElementById("reset").blur();
            setTimeout(() => {
                this.$refs.sentence.reset();
            }, 100);
        },
    },    
    data() {
        return {
            timeDisplay: '',
            gameState: 0
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';
    .wrapper {
        width: 100%; height: 100vh;
        background-color: $primary;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        display: flex; flex-direction: column;
        position: relative;
    }
    #timer {
        justify-content: center;
        text-align: center;
        height: 40px;
        color: $color-primary;
    }
    .btns {
        margin: 40px 0 0 0 ;
        display: flex;
        justify-content: center;
        button {
            background-color: transparent;
            border: 0;
            width: auto;
            color: $color-primary;
            cursor: pointer;
            padding: 4px;
            &:focus {
                outline: 3px solid grey;
            }
        }
    }
</style>
