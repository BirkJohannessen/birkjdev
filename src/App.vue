<template>
    <div class="app-wrapper">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <NavBarComponent />
        <router-view />
    </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent'
export default {
    name: 'App',
    components: {
        NavBarComponent
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import '@/assets/stylesheets/all.scss';

html,
body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
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
    flex-direction: row;
}

@media (max-width: $mobile-size) {
    .app-wrapper {
        flex-direction: column;
    }
}
</style>
