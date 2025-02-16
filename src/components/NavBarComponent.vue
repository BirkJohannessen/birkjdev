<template>
    <div class="nav-wrapper" :class="this.scrollY > 100 ? 'hide-mb' : this.scrollY > 2000 ? 'hide' : ''" >
        <div class="logo-wrapper">
            <a @click="push({ path: '/' })">
                <img draggable="false" alt="Website logo" src="@/assets/images/birk_mich_lgo.svg" />
            </a>
        </div>
        <div class="path-wrapper">
            <nav v-for="path in paths" class="hide-mb">
                <a class="tooltip-holder" @click="push(path)">
                    <span class="material-symbols-outlined" :class="isSelected(path) ? 'selected' : ''">{{path.icon}}</span>
                    <div class="tooltip tright">{{path.name}}</div>
                </a>
            </nav>
            <button class="hamburger hide-desktop" @click="this.showHamburger = !this.showHamburger">
                <span :class="showHamburger ? 'open' : ''"></span>
                <span :class="showHamburger ? 'open' : ''"></span>
                <span :class="showHamburger ? 'open' : ''"></span>
            </button>
        </div>
    </div>
    <div class="hamburger-overlay hide-desktop" v-if="showHamburger">
        <nav v-for="path in paths">
            <a @click="push(path); this.showHamburger = false">
                <span class="material-symbols-outlined" :class="isSelected(path) ? 'selected' : ''">{{path.icon}}</span>
                <h4 :class="isSelected(path) ? 'selected' : ''">{{path.name}}</h4>
            </a>
        </nav>
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
            if (path.matchOn && path.matchOn.length && path.matchOn.some(o => window.location.pathname.match(o))) return true;
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
                { name: 'blogs', path: '/blogs', matchOn: ['^/blog/\\d+$'], icon: 'rss_feed' },
                // { name: 'code', path: '/projects/code', icon: 'code' },
                // { name: 'biSHk', path: '/projects/bishk', icon: 'terminal' },
                { name: 'prime_spiral', path: '/projects/primes', icon: 'blur_on'},
                { name: 'tetris', path: '/projects/tetris', icon: 'grid_view' },
                { name: 'typenigma', path: '/projects/typenigma', icon: 'keyboard' }
            ],
            scrollY: 0,
            showHamburger: false
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
        background-color: $secondary;
        height: 100vh; min-width: 100px; max-width: 100px;
        display: flex; flex-direction: column;
        z-index: 9;
    }

    .logo-wrapper {
        height: auto;
        margin: 30px 0 0 13px;
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
            position: relative; top: 0;
            min-width: 100vw; min-height: 80px; height: 80px; width: 100vw;
            flex-direction: row;
            z-index: 10000;
        }

        .logo-wrapper {
            margin: auto 0 auto $spacing-4;
        }

        .path-wrapper {
            flex-direction: row;
            width: 100%;
            justify-content: right;
        }

        a {
            flex-direction: row;
            gap: $spacing-1;
        }

        img {
            width: 80px;;
        }

        button {
            background-color: transparent;
            border: 0;
            width: auto;
            color: $color-secondary;
            cursor: pointer;
            padding: 0 $spacing-4 0 0;
        }

        .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            span {
                display: block;
                width: 25px;
                height: 2px;
                background-color: $color-secondary;
                transition: transform 0.3s ease, background-color 0.3s ease;
                &.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
                &.open:nth-child(2) { opacity: 0; }
                &.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
            }
        }

        .hamburger-overlay {
            position: fixed;
            top: 70px;
            z-index: 100;
            background-color: $secondary;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: left;
            a {
                width: auto;
                margin: $spacing-2 $spacing-4;
            }
        }
    }
</style>

