<template>
    <div class="wrapper">
        <div class="logo-extender">
            <div class="logo-wrapper">
                <a @click="push('/projects/primes')">
                    <img src="../assets/bjcom/birk_lgo.webp" />
                </a>
            </div>
        </div>
        <div class="path-wrapper">
            <div v-for="path in paths" >
                <a @click="push(path.path)" class="path"><span class="material-symbols-outlined">{{path.logo}}</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    components: {
    },
    methods: {
        push(url) {
            this.$router.push({ path: url });
        }
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            paths: [{name: 'bishk', path: '/projects/bishk', logo: 'terminal'}, {name: 'primes', path: '/projects/primes', logo: 'blur_on'}],
        }
    },
}
</script>

<style scoped>
    img {
        width: 100%; height: 100%; 
    }
    a {
        display: block;
        cursor: pointer;
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
        height: 90%;
        justify-content: center;
        overflow: hidden;
    }

    .path {
        margin: 20px auto 20px auto;
        color: white;
        height: 40px;
        width: 40px;
    }

    .material-symbols-outlined {
        font-size: 2.5em;
    }
</style>

