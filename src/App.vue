<script setup lang="ts">
    import NavBarComponent from '@/components/NavBarComponent.vue';
    import type { Ref } from 'vue';
    import { ref } from 'vue';

    const preLoaded: Ref<boolean> = ref(false);
    setTimeout(() => preLoaded.value = true, 200);
</script>

<template>
    <div class="app-wrapper">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <NavBarComponent />
        <router-view v-if="preLoaded" />
    </div>
</template>

<style lang="scss">
@use '@/assets/stylesheets/all.scss' as *;
@use '@/assets/stylesheets/vars.scss' as vars;
@import 'https://fonts.googleapis.com/css?family=Montserrat';

html,
body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    background: black;
}

.material-symbols-outlined {
    font-family: 'Material Icons';
    font-display: block;
    font-size: 36px;
    user-select: none;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}

.app-wrapper {
    display: flex;
    position: relative;
    flex-direction: row;
    background-color: black;
    height: 100dvh;
}

@media (max-width: vars.$mobile-size) {
    .app-wrapper {
        flex-direction: column;
    }
}
</style>
