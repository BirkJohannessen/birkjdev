<template>
    <div class="wrapper">
        <BiSHkView/>
    </div>
</template>

<script>
import PrimeView from './PrimeView.vue';
import BiSHkView from './BiSHkView.vue'
export default {
    name: 'MainView',
    components: {
       BiSHkView 
    },
    methods: {
        bar() {
        }
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            baz: 0,
        }
    },
}
</script>

<style scoped>
    .wrapper {
        height: 100%;
        width: 100%;
    }
</style>
