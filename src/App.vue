<template>
    <div class="app-wrapper">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <HeaderComponent />
        <router-view />
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
export default {
    name: 'App',
    components: {
        HeaderComponent
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html,
body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    font-size: 1em;
}

h1 {
    padding: 5px 0px 5px 0px;
    margin: 0;
}
.app-wrapper {
    display: flex;
    flex-direction: row;
}

.material-symbols-outlined {
    font-family: 'Material Icons';
    font-display: block;
    font-size: 36px;
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}

</style>
