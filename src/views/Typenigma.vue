<template>
    <div class="wrapper">
        <div class="center">
            <div id="timer" v-if="[0,1].includes(this.gameState)">
                {{ timeDisplay }}
            </div>
            <Sentence id="sentence" :engine="this.engine" ref="sentence" v-if="[0,1].includes(this.gameState)" />
            <Result :engine="this.engine" v-if="this.gameState == 2"/>
            <div class="btns">
                <button id="reset" class="tooltip-holder" @click="this.reset()">
                    <span class="material-symbols-outlined">restart_alt</span>
                    <div class="tooltip tbottom">Restart</div>
                </button>
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
    @use '@/assets/stylesheets/vars.scss' as vars;
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/_tooltip.scss' as tt;

    .wrapper {
        width: 100%; height: 100dvh;
        background-color: vars.$primary;
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
        color: vars.$color-primary;
    }
    .btns {
        margin: 40px 0 0 0 ;
        display: flex;
        justify-content: center;
        button {
            background-color: transparent;
            border: 0;
            width: auto;
            color: vars.$color-primary;
            cursor: pointer;
            padding: vars.$spacing-2;
            &:focus {
                outline: 3px solid grey;
            }
        }
    }

    @media (max-width: vars.$mobile-size) {
        .center {
            margin: vars.$spacing-5 auto;
        }
    }
</style>
