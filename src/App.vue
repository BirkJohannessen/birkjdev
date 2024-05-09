<template>
    <div class="app-wrapper">
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

</style>
