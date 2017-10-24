<template>
  <div id="app">
	<app-header v-bind:username='user'></app-header>
	<!-- <i  v-show="loading" class="fa fa-spinner fa-spin"></i> -->
	<!-- <img src="./assets/logo.png"> -->
	<router-view/>
	<app-footer></app-footer>
  </div>
</template>

<script>
// Imports
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  name: "app",

  data() {
    return {
	  user: "",
	  loading: false,
      //   username: 'i5dr0id'
    };
  },

//   mounted() {
// 	  this.loading = true;
//     let token = localStorage.getItem("token");
//     if (typeof token !== "undefined") {
// 		// <i  v-show="loading" class="fa fa-spinner fa-spin"></i>
//       this.axios
//         .get("https://poolap.herokuapp.com/users/", {
//           headers: {
//             "x-access-token": token
//           }
//         })
//         .then(response => {
//           this.user = response.data.users[0].username;
// 		  console.log(response.data.users[0].username);
// 		//   this.loading = false;
//         });
// 	}
// 	this.loading = false;
//   }
};
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
