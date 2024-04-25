<template>
    <div class="content-container">
        <div class="flex">
            <div class="foo">
                <b><span class="green">{{user}}@{{domain}}</span>:{{path}} $</b>
            </div>
            <div class="padding-div"></div>
            <div class="input-wrapper">
                <input type="text" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TerminalView',
    components: {
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
    .content-container {
        font-family: monospace;
        font-size: 17px;
        background-color: black;
        height: 100vh;
        width: 100%;
        color: white;
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
    .flex {
        width: 100%;
        display: flex;
    }
    .green {
        color: green;
        padding: 0 0 0 5px;
    }
    .input-wrapper {
        flex-grow: 1;
    }
    .foo {
    }
    .padding-div {
        width: 10px;
    }
</style>
