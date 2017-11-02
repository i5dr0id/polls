<template>

<div id="first_column" style="width: 25%; float: left;margin-right:5px;">
	<div style="border: 1px solid blue; width: 100%;">
		<span style="align:center;">Cusomter</span>
	</div>
</div>

<div id="second_column" style="width: 25%; float: left;margin-right:5px;">
	<div style="border: 1px solid blue; width: 100%;;padding-left:0px;">2</div>
</div>
<div id="third_column" style="width: 25%; float: left;margin-right:5px;">
	<div style="border: 1px solid blue; width: 100%;;padding-left:0px;">3</div>
</div>
<div id="fourth_column" style="width: 25%; float: left;">
	<div style="border: 1px solid blue; width: 100%;;padding-left:0px;">4</div>
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