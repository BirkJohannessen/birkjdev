<template>
    <div class="flex">
        <div class="foo">
            <Ps1/>
        </div>
        <div class="padding-div"></div>
        <h3>
            {{command.input}}
        </h3>
    </div>
    <h3 class="flex">
        {{command.output}}
    </h3>
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

<style lang="scss" scoped>
@import '@/assets/stylesheets/all.scss';
    .flex {
        width: 100%;
        display: flex;
    }
    input {
        font-family: monospace;
        font-size: 17px;
        background-color: transparent;
        color: $color-secondary;
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
