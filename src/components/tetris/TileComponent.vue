<script setup lang="ts">
    import TetrisTile from '@/models/tetris/TetrisTile';

    const props = defineProps<{
        tile: TetrisTile,
        pxSize: number,
        onlyBlock: boolean
    }>();
</script>

<template>
    <div class="wrapper4" :style="pxSize ? `width: ${pxSize}px; height: ${pxSize}px` : `width: 30px; height: 30px`">
        <div v-if="!onlyBlock" :class="tile.tileState ? 'one' : tile.tileReflect ? 'two' : 'three'" :style="tile.tileState ? 'background-color:' + tile.color : ''"> </div>
        <div v-if="onlyBlock" :class="tile.tileState ? 'one' : 'hide'" :style="tile.tileState ? 'background-color:' + tile.color : ''"> </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/vars.scss' as vars;

    .one {
        border: 1px solid vars.$color-primary;
        width: 100%; height: 100%;
    }

    .two {
        border: 1px solid vars.$color-primary;
        width: 100%; height: 100%;
        opacity: 0.15;
    }

    .three {
        border: 1px solid vars.$color-primary;
        width: 100%; height: 100%;
        background-color: vars.$secondary;
    }
</style>

