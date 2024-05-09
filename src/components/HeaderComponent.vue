<template>
    <div class="wrapper">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div class="logo-extender">
            <div class="logo-wrapper">
                <img src="../assets/bjcom/birk_lgo.webp" />
            </div>
        </div>
        <div class="path-wrapper">
            <div class="path"><span class="material-symbols-outlined">terminal</span></div>
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
    img {
        width: 100%; height: 100%; 
    }
    .wrapper {
        background-color: #000212;
        height: 100vh;
        width: 100px;
        display: flex;
        flex-direction: column;
        transition: 0.35s;
        &:hover {
            width: 150px;
            transition: 0.35s;
        }
        z-index: 999999999999;
    }

    .logo-wrapper {
        width: 100%;
        height: auto;
        margin: 15px auto 15px auto;
    }

    .logo-extender {
        height: 150px;
    }

    .path-wrapper {
        display: flex;
        flex-direction: column;
    }

    .path {
        margin: 10px auto 10px auto;
        backgrond-color: grey;
    }
</style>

