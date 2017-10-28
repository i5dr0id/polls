<template>
	<div class="root-element">

		<div class="container poll-container" id="create-poll">
			<div class="row">
				<div class="col-sm-12 text-center">
					<!-- <br><br><br><br><br>
				<h1> {{username}} </h1>
				<h2> {{id}} </h2>
				<h4>Fullname: {{fullname}} </h4>
				<h4>Username: {{username}} </h4>
				<h4>Email: {{email}} </h4>
				<h4>Phone Number: {{phone}} </h4>
				<br><br><br><br><br> -->
				<h2 style="text-align:center">User Profile Card </h2>

				<div class="card">
				  <img src="https://www.atomix.com.au/media/2015/06/atomix_user31.png" alt="John" style="width:100%">
					<h1> {{username}} </h1>
					<h4>Fullname: {{fullname}} </h4>
					<h4>Username: {{username}} </h4>
					<h4>Email: {{email}} </h4>
					<div style="margin: 24px 0;">
	 					<a href="#"><i class="fa fa-dribbble"></i></a>
	 					<a href="#"><i class="fa fa-twitter"></i></a>
	 					<a href="#"><i class="fa fa-linkedin"></i></a>
	 					<a href="#"><i class="fa fa-facebook"></i></a>
					</div>
<p><button>Contact</button></p>
				</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>


export default {
	name: 'poll',
	data() {
		return {
			msg: '',
			// id: this.$route.params.id,
			username: this.$store.state.profile.username,
			email: this.$store.state.profile.email,
			fullname: this.$store.state.profile.name,
			phone: this.$store.state.profile.phone,
			id: this.$store.state.profile.id
		};
	},

	computed: {
		profile(){
			return this.$store.state.profile;
		}
	},

	created () {
		Event.$on('login', ($event)=>{
			this.username = $event.username;
			this.fullname = $event.fullname;
			this.email = $event.email;
			this.phone = $event.phone;
			this.phone = $event.phone;
			console.log($event.username);
					  console.log($event._id);
		  console.log('PRfile');
		//   console.log('this is all', this.$store.state.profile);
		});

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

.root-element {
	padding-top: 100px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #0084b4;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
