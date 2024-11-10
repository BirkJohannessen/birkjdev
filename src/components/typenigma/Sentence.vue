<template>
    <div class="sentence-wrapper">
        <input id="input" class="no-hl" @input="onInput" />
        <div id="sentence">
            <span v-for="word in sentence" class="word">
                <div v-for="letter in word" class="letter">
                    <span v-if="letter.isCursor() && letter.isCursorLeft()" class="cursor"></span>
                    <span v-if="letter.getState() === 0" class="default">{{ letter.getLetter() }}</span>
                    <span v-if="letter.getState() === 1" class="miss">{{ letter.getLetter() }}</span>
                    <span v-if="letter.getState() === 2" class="hit">{{ letter.getLetter() }}</span>
                    <span v-if="letter.getState() === 3" class="miss">{{ letter.getLetter() }}</span>
                    <span v-if="letter.isCursor() && !letter.isCursorLeft()" class="cursor"></span>
                </div>
            </span>
        </div>
        <div id="sentenceblur" class="">
            <p class="msg">Click here focus.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SentenceComponent',
    props: {
        engine: Object
    },
    mounted() {
        this.sentence = this.engine.inputProcessor.enstructData();
        const div = document.getElementById('sentenceblur');
        const input = document.getElementById('input');
        const sentenceblur = document.getElementById('sentenceblur');

        setTimeout(() => {
            if (document.activeElement != input)  {
                sentenceblur.classList.add('blur');
            }
        }, 1000);

        const unblur = () => {
            sentenceblur.classList.add('hide');
            sentenceblur.classList.remove('blur');
        };

        const blur = () => {
            sentenceblur.classList.add('blur');
            sentenceblur.classList.remove('hide');
        };

        const focus = () => {
            input.focus();
        };

        this.listenTo(input, 'focusout', blur);
        this.listenTo(input, 'focus', unblur);
        this.listenTo(sentenceblur, 'click', focus);
        this.listenTo(sentenceblur, 'focus', focus);
        this.listenTo(sentence, 'click', focus);
        this.listenTo(sentence, 'focus', focus);
    },
    methods: {
        onInput(e) {
            this.engine.onInput(e);
            this.sentence = this.engine.inputProcessor.enstructData();
        },
        listenTo(htmlElement, e, callback) {
            htmlElement.addEventListener(e, callback);
        },
        reset() {
            const input = document.getElementById("input");
            input.focus();
            input.value = '';
            this.sentence = this.engine.inputProcessor.enstructData();
        }
    },
    data() {
        return {
            sentence: [],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';
    .word {
        padding: 0 6px 0 6px;
        font-size: 34px;
        font-weight: 900;
    }
    .miss {
        color: red;
    }
    .hit {
        color: white;
    }
    .letter {
        padding: 0;
        margin: 0;
        display: inline-block;
    }
    .cursor {
        width: 0px;
        outline: solid 1px gold;
        border: 1px gold;
        height: 30px;
        display: inline-block;
    }
    #sentence {
        width: 70vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
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
    #sentence {
        color: $color-primary;
        position: relative;
        height: 125px;
        overflow: hidden;
    }
    .sentence-wrapper {
        display: flex; flex-direction: column;
        position: relative;
        animation: fadeIn 1s;
    }
    .blur {
        position: absolute;
        display: flex; flex-direction: row;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(4px); 
        animation: blurIn 1s;
        width: 100%;
        height: 100%;
        .msg {
            height: 32px;
            color: $color-secondary;
        }
    }
</style>
