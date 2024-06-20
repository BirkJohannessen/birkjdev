<template>
    <div class="wrapper2">
        <div v-for="row in this.map" class="column">
            <div v-for="tile in row" class="row">
                <Tile :tile="tile" :pxSize="this.pxSize" />
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
        pxSize: Number
    },
}
</script>

<style scoped>
    .wrapper2 {
        border: 2px solid #52495d; 
        margin: 6px;
    }
    .column {
        display: flex; flex-direction: row;
    }
    .row {
        display: flex; flex-direction: row;
    }
</style>

