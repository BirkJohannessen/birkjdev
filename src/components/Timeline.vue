<script setup lang="ts">
    import { timeline } from '@/config/timelineConfig'
</script>

<template>
    <div class="timeline-wrapper">
        <div class="center-padding"></div>
        <div class="time">
        </div>
        <div class="time-object-wrapper">
            <div v-for="(timeobj, idx) in timeline">
                <div :class="idx % 2 === 1 ? 'left' : ''" class="time-object">
                    <div class="point" :class="idx % 2 === 1 ? 'pleft' : 'pright'"></div>
                    <h3 v-if="timeobj.title">{{timeobj.title}}</h3>
                    <h3>{{timeobj.time}}</h3>
                    <p>{{timeobj.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/vars.scss' as vars;
    @use '@/assets/stylesheets/all.scss' as *;

    .timeline-wrapper {
        display: flex; flex-direction: row;
        justify-content: center;
    }

    .time {
        width: vars.$spacing-0;
        background-color: vars.$tetriary;
    }

    .left {
        text-align: right;
        transform: translateX(-100%);
    }

    .time-object-wrapper {
        position: relative;
        width: 50%;
    }

    .center-padding {
        width: 50%;
    }

    .time-object {
        padding: 0 vars.$spacing-3; margin: vars.$spacing-4 0;
        max-width: 650px;
        white-space: pre-wrap;
        position: relative;
    }

    .point {
        width: 11px; height: 11px;
        position: absolute;
        border-radius: 24px;
        background-color: vars.$tetriary;
        &.pleft {
            right: -4px; top: 16px;
        }
        &.pright {
            left: -7px; top: 16px;
        }
    }

    @media (max-width: vars.$mobile-size) {
        .point {
            &.pleft {
                left: -7px; top: 16px;
            }
        }

        .time-object-wrapper {
            width: 80vw;
        }

        .time-object {
            width: 100%;
        }

        .left {
            text-align: inherit;
            transform: inherit;
        }

        .center-padding {
            display: none;
        }
    }
</style>
