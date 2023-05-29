<template>
	<router-view />
</template>

<script>
import PrimeView from './views/PrimeView.vue';
export default {
  name: 'App',
  components: {
    PrimeView
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
h1{
  padding: 5px 0px 5px 0px;
  margin: 0;
}
</style>
