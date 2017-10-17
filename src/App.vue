<template>
  <div id="app">
	<app-header></app-header>
	<!-- <img src="./assets/logo.png"> -->
	<router-view/>
	<app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
		components: {
		'app-header': Header,
		'app-footer': Footer
	},
  name: 'app'
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
