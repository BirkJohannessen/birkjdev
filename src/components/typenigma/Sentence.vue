<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue';
    import { NOTTYPED, MISS, HIT, OVERFLOW } from '@/models/typenigma/LetterStateEnum';
    import type { Sentence } from '@/models/typenigma/Sentence';
    import type TypenigmaEngine from '@/typenigma/TypenigmaEngine';
    import type { VoidCallback } from '@/models/Generics';

    const props = defineProps<{
        engine: TypenigmaEngine 
    }>();

    const sentence: Ref<Sentence> = ref([]);
    const topStyle: Ref<string> = ref('');

    const input: Ref<HTMLInputElement | null> = ref(null);
    const sentenceblur: Ref<HTMLElement | null> = ref(null);
    const sentenceEl: Ref<HTMLElement | null> = ref(null);
    const cursor: Ref<HTMLElement | null> = ref(null);

    const onInput = (e: Event) : void => {
        if (e instanceof InputEvent) {
            props.engine.onInput(e);
            sentence.value = props.engine.inputProcessor.enstructData();
        }
    };

    const listenTo = (htmlElement: HTMLElement, e: string, callback: VoidCallback) => {
        htmlElement.addEventListener(e, callback);
    };

    const reset = () => {
        input.value?.focus();
        input.value!.value = '';
        sentence.value = props.engine.inputProcessor.enstructData();
    };

    defineExpose({
        reset
    });

    const calculateTop = () => {
        topStyle.value = `top: -${calculateSentenceOffset()}px`;
    };

    const calculateSentenceOffset = () : number => {
        const firstPaddingOffset = 3;
        const sentenceOffset = 42;
        if (!sentence || !cursor) {
            return 0;
        }
        const cursorY: number = cursor.value?.offsetTop ?? 0;
        const returnValue = (Math.floor(cursorY / sentenceOffset) * sentenceOffset);
        if (returnValue === 0 || returnValue === sentenceOffset + firstPaddingOffset) {
            return returnValue;
        }
        return returnValue - sentenceOffset;
    };
 
    onMounted(() => {
        sentence.value = props.engine.inputProcessor.enstructData();

        setInterval(() => {
            calculateTop();
        }, 10);

        setTimeout(() => {
            if (document.activeElement != input.value)  {
                sentenceblur.value?.classList?.add('blur');
            }
        }, 1000);

        const unblur = () => {
            sentenceblur.value?.classList.add('hide');
            sentenceblur.value?.classList.remove('blur');
        };

        const blur = () => {
            sentenceblur.value?.classList.add('blur');
            sentenceblur.value?.classList.remove('hide');
        };

        const focus = () => {
            input.value?.focus();
        };

        if (input.value) listenTo(input.value, 'focusout', blur);
        if (input.value) listenTo(input.value, 'focus', unblur);
        if (sentenceblur.value) listenTo(sentenceblur.value, 'click', focus);
        if (sentenceblur.value) listenTo(sentenceblur.value, 'focus', focus);
        if (sentenceEl.value) listenTo(sentenceEl.value, 'click', focus);
        if (sentenceEl.value) listenTo(sentenceEl.value, 'focus', focus);
    });
</script>

<template>
    <div class="sentence-wrapper">
        <input id="input" ref="input" class="no-hl" @input="onInput" />
        <div class="sentence-hide">
            <div id="sentence" :style="topStyle">
                <span v-for="word in sentence" class="word">
                    <div v-for="letter in word" class="letter">
                        <span v-if="letter.isCursor() && letter.isCursorLeft()" id="cursor" class="cursor"></span>
                        <span v-if="letter.getState() === NOTTYPED" class="default">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === MISS" class="miss">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === HIT" class="hit">{{ letter.getLetter() }}</span>
                        <span v-if="letter.getState() === OVERFLOW" class="miss">{{ letter.getLetter() }}</span>
                        <span v-if="letter.isCursor() && !letter.isCursorLeft()" id="cursor" class="cursor"></span>
                    </div>
                </span>
            </div>
        </div>
        <div ref="sentenceblur" class="hide">
            <p class="msg">Click here focus.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .word {
        padding: 0 vars.$spacing-1 0 vars.$spacing-1;
        font-size: 34px;
        font-weight: 900;
    }

    .miss {
        color: red;
    }

    .hit {
        color: vars.$color-secondary
    }

    .letter {
        padding: 0;
        margin: 0;
        display: inline-block;
    }

    .cursor {
        width: 0px;
        outline: solid 1px vars.$tetriary;
        border: 1px vars.$tetriary;
        height: 30px;
        display: inline-block;
    }

    #sentence {
        width: 70vw;
        display: flex; flex-wrap: wrap;
        justify-content: left;
        color: vars.$color-primary;
        position: relative;
    }

    .sentence-hide {
        overflow: hidden;
        height: 129px;
        position: relative;
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
            color: vars.$color-secondary;
        }
    }
</style>
