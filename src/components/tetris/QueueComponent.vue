<script setup lang="ts">
    import Map from './MapComponent.vue';
    import TetrisBlock from '@/models/tetris/TetrisBlock';
    import { ref } from 'vue';

    defineProps<{
        queue: TetrisBlock[]
    }>();

    const queuePx = ref(15);
</script>

<template>
    <div v-for="block in queue" class="column">
        <Map :onlyBlock="true" :map="block.state" :pxSize="queuePx" />
    </div>
</template>

<style scoped>
    .column {
        display: flex; flex-direction: column;
    }
</style>

