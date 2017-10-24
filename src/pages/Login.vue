<template>
  <div class="hello">
<div class="login-div">
	<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="text-center">Sign In to <span style="display: inline-block;"><a class="a-mp"><router-link to="/">POLL APP</router-link></a></span></h3>
		</div>
		<div class="text-center text-danger">
			{{ msg }}
			<i  v-show="loading" class="fa fa-spinner fa-spin"></i>
		</div>
		<div class="modal-body">
			<form>
				<div class="form-group" :class="{'has-error': errors.has('username') }">
					<label class="control-label" for="username">Username: </label>
					<!-- <p :class="{ 'control': true }"> -->
					<input v-model="login.username" name="username" v-validate="'required|alpha_num|min:4'" type="text" class="form-control input-lg" placeholder="Username">
					<!-- <span v-show="fields.username && fields.username.valid">I'm valid</span> -->
					<!-- <p class="text-danger" v-show="errors.has('username')">{{ errors.first('username') }}</p> -->
					<!-- </p> -->
				</div>
				<div class="form-group" :class="{'has-error': errors.has('password') }">
					<label class="control-label" for="userPassword">Password: </label>
					<!-- <p :class="{ 'control': true }"> -->
					<input v-model="login.password" name="password" v-validate="'required'" type="password" class="form-control input-lg"  placeholder="Password">
					<!-- <p class="text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</p> -->
					<!-- </p> -->
				</div>
				<div class="form-group" :class="{'has-error': errors.has('terms') }">
					<label class="control-label" for="userPassword"><input name="terms" type="checkbox"> Remember me </label>
					 <!-- Remember me -->
				</div>
				<div class="form-group">
					<!-- <button class="btn btn-block btn-lg btn-log" @click.prevent="btnLogin" :disabled="!((fields.username && fields.username.valid) && (fields.password && fields.password.valid))"> Log in</button> -->
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
//   validated: false,
  data () {
	return {
	  msg: '',
	  loading: false,
	  api: 'https://poolap.herokuapp.com/users/authenticate',
	  login: {
		  username: '',
		  password: ''
	  }
	}
  },
	methods: {
	  btnLogin() {
		console.log('AFTER: ' + JSON.stringify(this.login));
		this.loading = true;
		this.axios.post(this.api, {
		username: this.login.username,
		password: this.login.password,
	}).then((response) => {
		let token = response.data.token;
		// console.log(token);
		console.log(response.data);
		if (token) {
			localStorage.setItem('token',token);			
			Event.$emit('login', response.data.user);

			this.login.username = '';
			this.login.password = '';
			console.log(response.data.user.username);
			// get token from localstorage
			//  send token to server
			// get username or let header get user from response header

		 	this.loading = false;
			this.$router.push('/');
		}

		else {

			this.msg = "wrong username or password";
			this.login.username = '';
			this.login.password = '';
		}
})
.catch(function (error) {
	console.log(error);
});
	  }
  },
  mounted() {
	  console.log('BEFORE: ' + JSON.stringify(this.login));

	// console.log(this.fields.username.valid);
	
	// console.log(this.fields.username);
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
