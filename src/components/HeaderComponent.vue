<template>
    <div :class="this.scrollY > 2000 ? 'hide' : this.scrollY > 0 ? 'wrapper' : 'wrapper'" >
        <div class="logo-extender">
            <div class="logo-wrapper">
                <a @click="push({ path: '/' })">
                    <img draggable="false" src="../assets/bjcom/birk_lgo.webp" />
                </a>
            </div>
        </div>
        <div class="path-box">
            <div v-for="path in paths" >
                <div class="path" @click="push(path)" >
                    <a :class="isSelected(path) ? 'path-logo selected' : 'path-logo'"><span class="material-symbols-outlined">{{path.logo}}</span></a>
                    <div :class="isSelected(path) ? 'path-title no-hl selected' : 'path-title'"> {{path.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    mounted () {
        window.addEventListener('scroll', this.updateY);
    },
    unmounted () {
            window.removeEventListener('scroll', this.updateY);
    },
    methods: {
        push(path) {
            this.$router.push({ path: path.path }).then(() => this.$forceUpdate());
        },
        isSelected(path) {
            return window.location.pathname === path.path;
        },
        updateY() {
            this.scrollY = window.top.scrollY;
        }
    },
    computed: {
        foo(){
        }
    },
    data() {
        return {
            paths: [
                { name: 'birk', path: '/', logo: 'person' },
                { name: 'code', path: '/projects/code', logo: 'code' },
                { name: 'biSHk', path: '/projects/bishk', logo: 'terminal' },
                { name: 'prime_spiral', path: '/projects/primes', logo: 'blur_on'},
                { name: 'tetris', path: '/projects/tetris', logo: 'grid_view' },
                { name: 'typenigma', path: '/projects/typenigma', logo: 'keyboard' }
            ],
            scrollY: 0
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/stylesheets/all.scss';

    img {
        width: 100%; height: 100%;
    }

    a {
        display: block;
        cursor: pointer;
    }

    .hide {
        width: 0px;
        left: -2000px;
    }
    .wrapper {
        background-color: $secondary;
        height: 100vh;
        width: 100px;
        display: flex;
        flex-direction: column;
        transition: width 0.35s;
        &:hover {
            width: 150px;
            .path-title {
                display: block;
                margin: 0 auto;
                text-align: center;
                transition: opacity 0.35s ease-in;
                opacity: 1;
            }
            .selected {
                color: $quaternary;
            }
        }
        border-right: 2px solid $tetriary;
        z-index: 9;
    }

    .logo-wrapper {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .logo-extender {
        height: 150px;
    }

    .path-box {
        display: flex;
        flex-direction: column;
        height: 90%;
        justify-content: center;
        overflow: hidden;
    }

    .path-logo {
        margin: 20px auto 5px auto;
        height: 40px;
        width: 40px;
    }

    .path-title {
        opacity: 0;
        display: block;
        margin: 0 auto;
        transition: opacity 0.35s ease-out;
        &.selected {
            opacity: 0;
            display: block;
            margin: 0 auto;
            transition: opacity 0.35s ease-out;
            color: $quaternary;
        }
    }

    .selected {
        color: $quaternary;
    }


    .path {
        display: flex;
        flex-direction: column;
        height: 100px;
        cursor: pointer;
        color: $color-secondary;
        &:hover {
            color: $quaternary-offset;
        }
    }

    .material-symbols-outlined {
        font-size: var(--step-3);
    }
</style>

