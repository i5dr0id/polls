<template>
  <div class="hello">
<div class="login-div">
	<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="text-center">Sign In to <span style="display: inline-block;"><a class="a-mp"><router-link to="/">POLL APP</router-link></a></span></h3>
		</div>
		<div class="modal-body">
			<form>
				<div class="form-group">

					<input v-model="login.username" type="text" class="form-control input-lg" placeholder="Username">

				</div>
				<div class="form-group">
					<input v-model="login.password" type="password" class="form-control input-lg" placeholder="Password">
				</div>
				<!-- <div class="form-group">
					<input type="checkbox"> Remember me
				</div> -->
				<div class="form-group">
					<button class="btn btn-block btn-lg btn-log" @click.prevent="btnLogin"> Log in</button>
				</div>
				<div>
					<span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
					<span><a href="#">Forgot your password?</a></span>
				</div>
			</form>
		</div>
	</div>
		<div>
		<p class="form-footer">Don't have an account? <span><a><router-link to="/register">Sign Up</router-link></a></span></p>
		</div>
	</div>
</div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
	return {
	  msg: 'Welcome to Your Vue.js App',
	  login: {
		  username: '',
		  password: ''
	  }
	}
  },
    methods: {
	  btnLogin() {
		  console.log('AFTER: ' + JSON.stringify(this.login));
		this.axios.post('https://poolap.herokuapp.com/users/authenticate', {
		username: this.login.username,
		password: this.login.password,
	}).then((response) => {
		let token = response.data.token;
		console.log(token);
		console.log(response.data);
		localStorage.setItem('token',token);

		this.$router.push('/');
})
.catch(function (error) {
	console.log(error);
});
	  }
  },
  mounted() {
	  console.log('BEFORE: ' + JSON.stringify(this.login));
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-div {
	padding-top: 3%;
	padding-bottom: 3%;
}

.modal-dialog {
	max-width: 400px;
	margin-top: 5rem;
}

.modal-content {
	box-shadow: 0 3px 9px #ddd;
	border: 1px solid #ddd;
}

.modal-header {
	border-bottom: none;
	margin: 2rem 0;
}

.modal-header h3 > span {
	display: inline-block;
	letter-spacing: 0.2rem;
	font-weight: bold;
	color: rgba(0, 0, 115, .6);
}

.modal-body {
	border-top: none;
	padding: 2rem;
}

.form-footer {
	text-align: center;
	margin-top: 2rem;
}

button {
	height: 3.5rem;
	padding: 0;
	color: #fff;
	font-size: 14px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 115, .6);
}

form > div > span, form > div > span a, form > div > span a:hover {
	color: #888;
	font-size: 13px;
}

h3, a{
	font-family: lato;
}

</style>
