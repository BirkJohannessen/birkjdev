<template>
    <div class="wrapper4" :style="this.pxSize ? `width: ${this.pxSize}px; height: ${this.pxSize}px` : `width: 30px; height: 30px`">
        <div v-if="!this.onlyBlock" :class="this.tile.tileState ? 'one' : this.tile.tileReflect ? 'two' : 'three'" :style="this.tile.tileState ? 'background-color:' + this.tile.color : ''"> </div>
        <div v-if="this.onlyBlock" :class="this.tile.tileState ? 'one' : 'd-none'" :style="this.tile.tileState ? 'background-color:' + this.tile.color : ''"> </div>
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
        pxSize: Number,
        onlyBlock: Boolean
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/all.scss';
    .one {
        border: 1px solid $color-primary;
        width: 100%; height: 100%;
    }
    .two {
        border: 1px solid $color-primary;
        width: 100%; height: 100%;
        opacity: 0.15;
    }
    .three {
        border: 1px solid $color-primary;
        width: 100%; height: 100%;
        background-color: $secondary;
    }
    .d-none {
        width: 0%; height: 0%;
        display: none;
        opacity: 0;
    }
</style>

