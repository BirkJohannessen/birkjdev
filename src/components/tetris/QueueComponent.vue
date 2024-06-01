<template>
    <div class="wrapper3">
        <div v-for="block in this.queue" class="column2">
            <div class="queue-item">
                <Map :map="block.state" :pxSize="15" />
            </div>
        </div>
    </div>
</template>

<script>
import Map from './MapComponent.vue';

export default {
    name: 'MapComponent',
    components: {
        Map 
    },
    props: {
        queue: Array,
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
    .wrapper3 {
    }
    .column2 {
        display: flex; flex-direction: column;
    }
    .queue-item {
    }
</style>

