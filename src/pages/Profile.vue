<template>
	<div class="root-element">

		<div class="container poll-container" id="create-poll">
			<div class="row">
				<div class="col-sm-12 text-center">
					<br><br><br><br><br>
				<h1> {{username}} </h1>
				<h2> {{id}} </h2>
				<h4>Fullname: {{fullname}} </h4>
				<h4>Username: {{username}} </h4>
				<h4>Email: {{email}} </h4>
				<h4>Phone Number: {{phone}} </h4>
				<br><br><br><br><br>
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

</style>