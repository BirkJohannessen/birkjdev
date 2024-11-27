<template>
    <div class="nav-wrapper" :class="this.scrollY > 100 ? 'hide-mb' : this.scrollY > 2000 ? 'hide' : ''" >
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
                { name: 'blogs', path: '/blogs', icon: 'rss_feed' },
                // { name: 'code', path: '/projects/code', icon: 'code' },
                // { name: 'biSHk', path: '/projects/bishk', icon: 'terminal' },
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
        color: $color-secondary;
        padding: 0 $spacing-1;
        &:hover {
            color: $tetriary;
        }
    }

    .selected {
        color: $tetriary;
    }

    .nav-wrapper {
        overflow: visible;
        background-color: $secondary;
        height: 100vh; min-width: 100px; max-width: 100px;
        display: flex; flex-direction: column;
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
        .nav-wrapper {
            display: sticky;
            min-width: 100vw; height: 80px; max-width: 100vw;
            flex-direction: row;
        }

        a {
            display: block; 
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

        img {
            width: 80px;;
        }
    }
</style>

