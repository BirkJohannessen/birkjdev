<script setup>
    import Tile from './TileComponent.vue';

    const props = defineProps(['map', 'pxSize', 'onlyBlock']);

    const rowOutOfBounds = (row) => {
        return row.map(o => o.outOfBounds).includes(0);
    }
</script>

<template>
    <div :class="onlyBlock ? 'wrapper2' : 'wrapper22'">
        <div class="inner-wrapper">
            <div v-for="row in map" class="row">
                <div v-if="rowOutOfBounds(row)" v-for="tile in row">
                    <Tile :tile="tile" :pxSize="pxSize" :onlyBlock="onlyBlock" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper22 {
        margin: 6px;
    }
    .wrapper2 {
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

