<template>
	<div class="container">
	<div class="col-md-8" style="background-color: rgb(255,243,246);">
		
	</div>
	<div class="col-md-4"></div>

	</div>
</template>


<script>
// Imports
// import Poll from "../pages/Poll.vue";

export default {
  components: {
    "poll-view": Poll
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // let token = localStorage.getItem("token");
    // this.axios
    //   .get("https://poolap.herokuapp.com/users/", {
    //     headers: {
    //       "x-access-token": token
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
	//   });
	
	// console.log(token);
  }
};

//logout
// To delete this from localStorage:

// localStorage.removeItem('YourItem')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>