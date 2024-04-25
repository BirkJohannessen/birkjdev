<template>
    <div class="wrapper">
        <TerminalView/>
    </div>
</template>

<script>
import PrimeView from './PrimeView.vue';
import TerminalView from './TerminalView.vue'
export default {
    name: 'MainView',
    components: {
       TerminalView 
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
