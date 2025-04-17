<script setup lang="ts">
    import Sentence from '@/components/typenigma/Sentence.vue';
    import Result from '@/components/typenigma/TypeResult.vue';
    import TypenigmaEngine from '@/typenigma/TypenigmaEngine';
    import { ref, onBeforeMount } from 'vue';
    import type { Ref } from 'vue';
    import type { GameState } from '@/models/typenigma/TypenigmaStateEnum';
    import { STARTED, STOPPED, RESULTS } from '@/models/typenigma/TypenigmaStateEnum';

    const engine: Ref<any> = ref(new TypenigmaEngine());
    const timeDisplay: Ref<string> = ref('');
    const gameState: Ref<GameState> = ref(0);
    const sentence: Ref<InstanceType<typeof Sentence> | null> = ref(null);

    const resetRef: Ref<HTMLElement | undefined> = ref();

    onBeforeMount(() => {
        setInterval(() => {
            timeDisplay.value = engine.value.gameInfo.timeDisplay;
            gameState.value = engine.value.gameInfo.gameState
        }, 100);
    });

    const reset = () => {
        engine.value.reset();
        resetRef.value?.blur();
        setTimeout(() => {
            sentence.value?.reset();
        }, 100);
    };
</script>

<template>
    <div class="wrapper">
        <div class="center">
            <div id="timer" v-if="[STARTED, STOPPED].includes(gameState)">
                {{ timeDisplay }}
            </div>
            <Sentence id="sentence" :engine="engine" ref="sentence" v-if="[STARTED, STOPPED].includes(gameState)" />
            <Result :engine="engine" v-if="gameState === RESULTS"/>
            <div class="btns">
                <button ref="resetRef" class="tooltip-holder" @click="reset()">
                    <span class="material-symbols-outlined">restart_alt</span>
                    <div class="tooltip tbottom">Restart</div>
                </button>
            </div>
        </div>
    </div>
</template>

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
