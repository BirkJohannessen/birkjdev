<template>
    <div :class="this.scrollY > 0 ? 'hide-mb wrapper' : this.scrollY > 2000 ? 'hide' : 'wrapper'" >
        <div class="logo-wrapper">
            <a @click="push({ path: '/' })">
                <img draggable="false" alt="Website logo" src="@/assets/images/birk_lgo.webp" />
            </a>
        </div>
        <div class="path-wrapper">
            <div v-for="path in paths" >
                <a class="tooltip-holder" @click="push(path)">
                    <span class="material-symbols-outlined" :class="isSelected(path) ? 'selected' : ''">{{path.icon}}</span>
                    <div class="tooltip tright">{{path.name}}</div>
                </a>
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
        cursor: pointer;
        display: flex; flex-direction: column;
        cursor: pointer;
        color: $color-secondary;
        padding: 0 $spacing-1;
        &:hover {
            color: $tetriary-offset;
        }
    }

    .selected {
        color: $tetriary;
    }

    .wrapper {
        overflow: visible;
        background-color: $secondary;
        height: 100vh; min-width: 100px; max-width: 100px;
        display: flex; flex-direction: column;
        border-right: 1px solid $secondary-offset;
        z-index: 9;
    }

    .logo-wrapper {
        height: auto;
        margin: 0 auto;
    }

    .path-wrapper {
        display: flex; flex-direction: column;
        gap: $spacing-4;
        margin: auto auto;
    }

    .material-symbols-outlined {
        font-size: var(--step-3);
    }

    @media (max-width: $mobile-size) {
        a {
            display: block; 
            margin: 0 $spacing-1 0 $spacing-1;
        }

        .wrapper {
            min-width: 100vw; height: 80px; max-width: 100vw;
            flex-direction: row;
            border-right: 0;
            border-bottom: $spacing--1 solid $tetriary;
        }

        .logo-wrapper {
            margin: auto;
            width: 90px;
        }

        .path-wrapper {
            flex-direction: row;
            width: 100%;
            justify-content: space-around;

        }
        
        .hide-mb.wrapper {
            display: none;
        }
    }
</style>

