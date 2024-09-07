<template>
    <div :class="onlyBlock ? 'wrapper2' : 'wrapper22'">
        <div class="inner-wrapper">
            <div v-for="row in this.map" class="row">
                <div v-if="rowOutOfBounds(row)" v-for="tile in row">
                    <Tile :tile="tile" :pxSize="this.pxSize" :onlyBlock="this.onlyBlock" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tile from './TileComponent.vue';

export default {
    name: 'MapComponent',
    components: {
        Tile
    },
    props: {
        map: Array,
        pxSize: Number,
        onlyBlock: Boolean
    },
    methods: {
        rowOutOfBounds(row) {
            return row.map(o => o.outOfBounds).includes(0);
        }
    }
}
</script>

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

