<template>
    <div class="wrapper">
        <div class="center">
            <div id="timer">
                {{ timeDisplay }}
            </div>
            <div class="sentence-wrapper">
                <Sentence id="sentence" :sentence="this.sentence" />
                <div id="sentenceblur" class="blur">
                    <p class="msg">Click here focus.</p>
                </div>
            </div>
            <input id="input" class="no-hl" @input="onInput" />
            <div class="btns">
                <button class="material-symbols-outlined" id="reset" @click="this.reset()">restart_alt</button>
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
        this.sentence = this.engine.inputProcessor.enstructData();
        setInterval(() => {
            this.timeDisplay = this.engine.gameInfo.timeDisplay;
        }, 100);
    },
    mounted() {
        const div = document.getElementById('sentenceblur');
        const input = document.getElementById('input');
        const sentenceblur = document.getElementById('sentenceblur');

        input.addEventListener('focus', () => {
            sentenceblur.classList.add('hide');
            sentenceblur.classList.remove('blur');
        });

        input.addEventListener('focusout', () => {
            sentenceblur.classList.add('blur');
            sentenceblur.classList.remove('hide');
        });

        sentenceblur.addEventListener('click', () => {
            input.focus();
        });

        sentenceblur.addEventListener('focus', () => {
            input.focus();
        });
    },
    components: {
        Sentence
    },
    methods: {
        reset() {
            this.engine.reset();
            document.getElementById("reset").blur();
            const input = document.getElementById("input");
            input.focus();
            input.value = '';
            this.sentence = this.engine.inputProcessor.enstructData();
        },
        onInput(e) {
            this.engine.onInput(e);
            this.sentence = this.engine.inputProcessor.enstructData();
        },
    },    
    data() {
        return {
            sentence: [],
            timeDisplay: ''
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
    #input {
        position: absolute;
        color: transparent;
        background-color: transparent;
        outline: 0;
        border: 0;
        height: 0;
        margin: 0; padding: 0;
        &:focus {
            outline: 0;
            border: 0;
        }
    }
    .blur {
        position: absolute;
        display: flex; flex-direction: row;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(4px);
        width: 100%;
        height: 100%;
        .msg {
            height: 32px;
            color: $color-secondary;
        }
    }
    #sentence {
        color: $color-primary;
        position: relative;
        height: 125px;
        overflow: hidden;
    }
    .sentence-wrapper {
        display: flex; flex-direction: column;
        position: relative;
    }
</style>
