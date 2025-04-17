<script setup lang="ts">
    import TetrisTile from '@/models/tetris/TetrisTile';
    import Tile from './TileComponent.vue';

    defineProps<{
        map: TetrisTile[][],
        pxSize: number,
        onlyBlock: boolean
    }>();

    const rowOutOfBounds = (row: TetrisTile[]) => {
        return row.some(o => o.outOfBounds);
    };
</script>

<template>
    <div class="map-wrapper">
        <div class="inner-wrapper">
            <div v-for="row in map" class="row">
                <div v-if="!rowOutOfBounds(row)" v-for="tile in row">
                    <Tile :tile="tile" :pxSize="pxSize" :onlyBlock="onlyBlock" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .map-wrapper {
        margin: 6px;
    }

    .inner-wrapper {
        display: inline-block;
        margin: auto;
    }

    .row {
        display: flex; flex-direction: row;
        align-items: center;
    }
</style>

