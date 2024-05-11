<template>
    <div class="flex">
        <div class="foo">
            <Ps1/>
        </div>
        <div class="padding-div"></div>
        <div>
            {{command.input}}
        </div>
    </div>
    <div class="flex">
        {{command.output}}
    </div>
</template>

<script>
import Ps1 from './Ps1.vue';
export default {
    name: 'Output',
    components: {
        Ps1
    },  
    props: {
        command: String
    },
    methods: {
    },
    computed: {
    },
}
</script>

<style scoped>
    .flex {
        width: 100%;
        display: flex;
    }
    input {
        font-family: monospace;
        font-size: 17px;
        background-color: transparent;
        color: white;
        margin: 0;
        padding: 0;
        border: none;
        &:focus-visible {
            border: none;
            outline: none;
        }
        width: 100%;
        padding-bottom: 100vh;
    }
    .input-wrapper {
        flex-grow: 1;
    }
    .padding-div {
        width: 10px;
    }
</style>
