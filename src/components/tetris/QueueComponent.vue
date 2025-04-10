<script setup>
    import Map from './MapComponent.vue';
    import { ref } from 'vue';

    const props = defineProps(['queue']);

    const queuePx = ref(15);
</script>

<template>
    <div class="wrapper3">
        <div v-for="block in queue" class="column">
            <Map :onlyBlock="true" :map="block.state" :pxSize="queuePx" />
        </div>
    </div>
</template>

<style scoped>
    .column {
        display: flex; flex-direction: column;
    }
</style>

