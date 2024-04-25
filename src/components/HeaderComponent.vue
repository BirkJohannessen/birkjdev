<template>
    <div class="wrapper">
        <div class="logo-wrapper"></div>
        <div class="path-wrapper">
            <div class="path">a</div>
            <div class="path">b</div>
            <div class="path">c</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
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
            paths: [{name: '', path: ''}],
        }
    },
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 50px;
    background-color: green;
    display: flex;
}

.logo-wrapper {
    width: 20vw;
    height: 100%;
    background-color: blue;
}

.path-wrapper {
    display: flex;
    flex-direction: row;
}

.path {
    margin: auto 10px auto 10px;
    backgrond-color: grey;
}
</style>

