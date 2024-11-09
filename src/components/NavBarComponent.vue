<template>
    <div :class="this.scrollY > 0 ? 'hide-mb wrapper' : this.scrollY > 2000 ? 'hide' : 'wrapper'" >
        <div class="logo-wrapper">
            <a @click="push({ path: '/' })">
                <img draggable="false" src="@/assets/images/birk_lgo.webp" />
            </a>
        </div>
        <div class="path-box">
            <div v-for="path in paths" >
                <div class="path" @click="push(path)" >
                    <a :class="isSelected(path) ? 'path-icon selected' : 'path-icon'"><span class="material-symbols-outlined">{{path.icon}}</span></a>
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
    data() {
        return {
            paths: [
                { name: 'birk', path: '/', icon: 'person' },
                { name: 'code', path: '/projects/code', icon: 'code' },
                { name: 'biSHk', path: '/projects/bishk', icon: 'terminal' },
                { name: 'prime_spiral', path: '/projects/primes', icon: 'blur_on'},
                { name: 'tetris', path: '/projects/tetris', icon: 'grid_view' },
                { name: 'typenigma', path: '/projects/typenigma', icon: 'keyboard' }
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

    .wrapper {
        background-color: $secondary;
        height: 100vh; width: 100px;
        display: flex; flex-direction: column;
        border-right: $spacing--1 solid $tetriary;
        z-index: 9;

    }

    .logo-wrapper {
        height: 150px;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .path-box {
        display: flex; flex-direction: column;
        margin: auto auto;
    }

    .path-icon {
        margin: 20px auto 5px auto;
        height: 40px;
        width: 40px;
    }

    .path-title {
        display: none;
        margin: 0 auto;
        &.selected {
            color: $quaternary;
        }
    }

    .selected {
        color: $quaternary;
    }

    .path {
        display: flex; flex-direction: column;
        cursor: pointer;
        color: $color-secondary;
        &:hover {
            color: $quaternary-offset;
        }
    }

    .material-symbols-outlined {
        font-size: 35px;
    }

    @media (max-width: $mobile-size) {
        .wrapper {
            width: 100vw; height: 80px;
            flex-direction: row;
            transition: display 0.35s ease-in;
            border-right: 0;
            border-bottom: $spacing--1 solid $tetriary;
        }

        .logo-wrapper {
            margin: auto;
            width: 90px;
        }

        .path-box {
            flex-direction: row;
            width: 100%;
            justify-content: space-around;

        }

        .path-icon {
            margin: auto;
            height: 40px;
            width: 40px;
        }
        
        .path-title {
            display: none;
        }

        .hide-mb.wrapper {
            display: none;
        }
    }
</style>

