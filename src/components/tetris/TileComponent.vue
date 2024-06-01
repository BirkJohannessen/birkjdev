<template>
    <div class="wrapper4" :style="this.pxSize ? `width: ${this.pxSize}px; height: ${this.pxSize}px` : `width: 30px; height: 30px`">
        <div :class="this.tile.tileState ? 'one' : this.tile.tileReflect ? 'two' : 'three'" :style="this.tile.tileState ? 'background-color:' + this.tile.color : ''">
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
        tile: Object,
        pxSize: Number 
    },
    methods: {
        foo() {
        }
    },
    data() {
        return {
            bar: 1
        }
    },
}
</script>

<style scoped>
    .wrapper4 {
        border: 1px solid #52495d;
    }
    .one {
        width: 100%; height: 100%;
        border: 0px;
    }
    .two {
        width: 100%; height: 100%;
        opacity: 0.15;
    }
    .three {
        width: 100%; height: 100%;
        background-color: #000212;
    }
</style>

