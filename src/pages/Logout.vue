<template>
	<div class="root-element">

		<div class="container poll-container" id="create-poll">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
					<h1> LOGOUT WILL BE HERE</h1>
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
			msg: ''
		};
	},

	created () {
		let token = localStorage.getItem('token');
		localStorage.removeItem('token');

		Event.$emit('loggedout');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>