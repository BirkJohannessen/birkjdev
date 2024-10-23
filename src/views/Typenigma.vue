<template>
    <div class="wrapper">
        <div class="center">
            <div id="timer">
                {{ timeDisplay }}
            </div>
            <Sentence :sentence="this.sentence" />
            <div class="btns">
                <button class="material-symbols-outlined" @click="this.restart()">restart_alt</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Sentence from '@/components/typenigma/Sentence.vue';
    import TypenigmaEngine from '@/typenigma/TypenigmaEngine.js';

    export default {
        name: 'Typenigma',
        beforeMount() {
            this.engine = new TypenigmaEngine();
            this.timeDisplay = this.engine.gameInfo.timeDisplay;
            document.addEventListener("keydown", this.onKeyDownPress);
            this.sentence = this.engine.inputProcessor.enstructData();
        },
        components: {
            Sentence
        },
        methods: {
            restart() {
                this.engine.restart();
            },
            onKeyDownPress(e) {
                this.engine.inputProcessor.onKeyDownPress(e);
                this.sentence = this.engine.inputProcessor.enstructData();
            },
        },    
        data() {
            return {
                timeDisplay: '',
                sentence: []
            }
        },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';
    .wrapper {
        width: 100%; height: 100vh;
        background-color: #292736; color: white;
        display: flex; justify-content: right;
        overflow-y: scroll;
    }
    .center {
        width: auto; height: auto;
        margin: auto;
        text-align: center;
        display: flex; flex-direction: column;
        position: relative;
        color: grey;
    }
    #timer {
        justify-content: center;
        margin: 0 0 40px 0;
    }
    .btns {
        margin: 40px 0 0 0 ;
        display: flex;
        justify-content: center;
        button {
            background-color: transparent;
            color: inherit;
            border: 0;
            width: auto;
            cursor: pointer;
            padding: 4px;
            &:focus {
                outline: 3px solid grey;
            }
        }
    }
</style>
