<template>
    <b>
        <h3 class="green">
            {{user}}@{{domain}}
        </h3>
        <h3>
        :{{path}} $
        </h3>
    </b>
</template>

<script>
import Ps1 from './Ps1.vue';
export default {
    name: 'Ps1',
    components: {
        Ps1
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
            user: 'Birkj',
            domain: 'Birkjohannessen.com',
            path: '~/path',
        }
    },
}
</script>

<style scoped>
    .wrapper {
        height: 100%;
        width: 100%;
    }
    .green {
        color: green;
        padding: 0 0 0 5px;
    }
    h3 { display: inline-block; }
</style>
