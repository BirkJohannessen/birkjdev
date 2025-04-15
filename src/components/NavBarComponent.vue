<script setup lang="ts">
    import { onMounted, onUnmounted, ref, watch } from 'vue';
    import type { Ref } from 'vue';
    import { useRouter, useRoute  } from 'vue-router';
    import { navbarpaths } from '@/config/NavbarConfig';
    import NavbarPath from '@/models/NavbarPath';

    const router = useRouter();
    const route = useRoute();

    const showHamburger: Ref<boolean> = ref(false);
    const scrollY: Ref<number> = ref(0);
    const navPaths: Ref<NavbarPath[]> = ref(navbarpaths);

    const updateY = () : void => {
        scrollY.value = window.top?.scrollY || 0;
    }

    const updateSelected = () : void => {
        navPaths.value.forEach((navPath: NavbarPath) => {
             navPath.selected = false;
        }); 

        const selectedPath: NavbarPath | undefined = navPaths.value.find((navPath: NavbarPath) => route.path === navPath.path);

        if (selectedPath) {
            selectedPath.selected = true;
            return;
        }

        const selectedPathMatch: NavbarPath | undefined = navPaths.value
            .filter((navPath: NavbarPath) => navPath.path)
            .find((navPath: NavbarPath) => navPath.matchOn.some((m: string) => route.path.match(m)));

        if (selectedPathMatch) {
            selectedPathMatch.selected = true;
        }
    };

    watch(() => route.path, () => updateSelected());

    onMounted(() => {
        window.addEventListener('scroll', updateY);
        updateSelected();
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateY);
    });

    const push = (navbarPath: NavbarPath) : void => {
        router.push({ path: navbarPath.path });
    };

    const pushRoot = () : void => {
        router.push({ path: '/' });
    };

    const toggleHamburger = () : void => {
        showHamburger.value = !showHamburger.value;
    }
</script>

<template>
    <div class="nav-wrapper" :class="scrollY > 100 ? 'hide-mb' : scrollY > 2000 ? 'hide' : ''" >
        <div class="logo-wrapper">
            <a @click="pushRoot()">
                <img draggable="false" alt="Website logo" src="@/assets/images/birk_mich_lgo.svg" />
            </a>
        </div>
        <div class="path-wrapper">
            <nav v-for="path in navPaths" class="hide-mb">
                <a class="tooltip-holder" @click="push(path)">
                    <span class="material-symbols-outlined" :class="path.selected ? 'selected' : ''">{{path.icon}}</span>
                    <div class="tooltip tright">{{path.name}}</div>
                </a>
            </nav>
            <button class="hamburger hide-desktop" @click="toggleHamburger">
                <span :class="showHamburger ? 'open' : ''"></span>
                <span :class="showHamburger ? 'open' : ''"></span>
                <span :class="showHamburger ? 'open' : ''"></span>
            </button>
        </div>
    </div>
    <div class="hamburger-overlay hide-desktop" v-if="showHamburger">
        <nav v-for="path in navPaths">
            <a @click="push(path); toggleHamburger()">
                <span class="material-symbols-outlined" :class="path.selected ? 'selected' : ''">{{path.icon}}</span>
                <h4 :class="path.selected ? 'selected' : ''">{{path.name}}</h4>
            </a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/stylesheets/all.scss' as *;
    @use '@/assets/stylesheets/_tooltip.scss' as tt;
    @use '@/assets/stylesheets/vars.scss' as vars;

    img {
        width: 100%; height: 100%;
    }

    a {
        cursor: pointer;
        display: flex; flex-direction: column;
        color: vars.$color-secondary;
        padding: 0 vars.$spacing-1;
        &:hover {
            color: vars.$tetriary;
        }
    }

    .selected {
        color: vars.$tetriary;
    }

    .nav-wrapper {
        background-color: vars.$secondary;
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
        gap: vars.$spacing-4;
        margin: auto auto;
    }

    .material-symbols-outlined {
        font-size: var(--step-3);
    }

    @media (max-width: vars.$mobile-size) {
        .nav-wrapper {
            position: relative; top: 0;
            min-width: 100vw; min-height: 80px; height: 80px; width: 100vw;
            flex-direction: row;
            z-index: 10000;
        }

        .logo-wrapper {
            margin: auto 0 auto vars.$spacing-4;
        }

        .path-wrapper {
            flex-direction: row;
            width: 100%;
            justify-content: right;
        }

        a {
            flex-direction: row;
            gap: vars.$spacing-1;
        }

        img {
            width: 80px;;
        }

        button {
            background-color: transparent;
            border: 0;
            width: auto;
            color: vars.$color-secondary;
            cursor: pointer;
            padding: 0 vars.$spacing-4 0 0;
        }

        .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            span {
                display: block;
                width: 25px;
                height: 2px;
                background-color: vars.$color-secondary;
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
            background-color: vars.$secondary;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: left;
            a {
                width: auto;
                margin: vars.$spacing-2 vars.$spacing-4;
            }
        }
    }
</style>

