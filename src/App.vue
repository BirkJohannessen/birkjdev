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
html,
body {
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
