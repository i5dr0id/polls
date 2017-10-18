<template>
  <div class="hello">
<div class="register-div">
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="text-center">Sign Up to <span style="display: inline-block;"><a><router-link to="/">POLL APP</router-link></a></span></h3>
		</div>
		<div class="modal-body">
			<!-- <form class="dForm" @submit.prevent="signup()" name="registerForm" autocomplete="off" > -->
			<form class="dForm"  name="registerForm" autocomplete="off" >
				<div class="form-group">
					<label class="control-label" for="userFullName">Full Name: </label>
					<input v-model="register.fullname" type="text" class="form-control input-lg" placeholder="Firstname  Lastname" name="userFullName">

				</div>
				<div class="form-group">
					<label class="control-label" for="userName">User Name: </label>
					<input v-model="register.username" type="text" class="form-control input-lg" placeholder="Username" name="userName">

				</div>
				<div class="form-group" :class="{'has-error': errors.has('email') }">
					<label class="control-label" for="userEmail">Email: </label>
					<p :class="{ 'control': true }">
					<input v-model="register.email" v-validate="'required|email'"  type="text" class="form-control input-lg" placeholder="Email" name="userEmail">
					<p class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</p>
					</p>
				</div>

				<!--password comfirm box-->
				<div class="form-group">
					<label class="control-label" for="userPassword1">Password: </label>
					<input v-model="register.password" type="password" class="form-control input-lg" placeholder="Password" name="userPassword1">
				</div>
				<!-- <div class="form-group">
					<label class="control-label" for="userPassword2">Confirm Password: </label>
					<input v-model="register.cpassword" type="password" class="form-control input-lg" placeholder="Confirm Password" name="userPassword2">
				</div> -->

				<div class="form-group">
					<label class="control-label" for="userPhoneNumber">Phone Number: </label>
					<input v-model="register.phone" type="number" class="form-control input-lg" placeholder="Phone" name="userPhoneNumber">
				</div>


		<!-- Removed The Gender and Dob of user -->
				

				<!-- <div class="form-group checkbox checkbox-primary">
					<input v-model="register.checkedit" type="checkbox" required> <div class="term"> I accept <span><a href="#"> Terms and Conditions </a></span></div>
				</div> -->
				<div class="form-group">
					<button class="btn btn-block btn-lg btn-sign" @click.prevent="btnRegister">REGISTER</button>
				</div>
			</form>
		</div>
	</div>
		<div>
		<p class="form-footer">Already have an account? <span><a><router-link to="/login">Sign In</router-link></a></span></p>
		</div>
	</div>
</div>


  </div>
</template>

<script> 
// import axios from 'axios';
export default {
  name: 'HelloWorld',
//   api: 'https://poolap.herokuapp.com/users/' ,

  data () {
	return {
		msg: 'Welcome to Your Vue.js App',
		register:{
			fullname: '',
			username: '',
			email: '',
			password: '',
			// cpassword: '',
			phone: ''
			// checkedit: ''
		}
	}
  },
  methods: {
	  btnRegister() {
		  console.log('AFTER: ' + JSON.stringify(this.register));
		this.axios.post('https://poolap.herokuapp.com/users/', {
		username: this.register.username,
		fullname: this.register.fullname,
		email:	this.register.email,
		password: this.register.password,
		phone: this.register.phone
	}).then((response) => {
		let token = response.data.token;
		// console.log(token);
  		console.log(response.data);
		  localStorage.setItem('token',token);
})
.catch(function (error) {
	console.log(error);
});
	  }
  },
  mounted() {
	  
	  console.log('BEFORE: ' + JSON.stringify(this.register));
	 //this.api = 'https://poolap.herokuapp.com/users/';
// 	this.axios.post('https://poolap.herokuapp.com/users/', {
// 		username:'test2',
// 		fullname:'test2 test',
// 		email:'test@test2.com',
// 		password:'test1234',
// 		phone:'09090908094'
// 	}).then((response) => {
//   console.log(response.data);
// })
// .catch(function (error) {
// 	console.log(error);
// });

  }
}
</script>

 Add "scoped" attribute to limit CSS to this component only
<style scoped>
h3, a{
	font-family: lato;
}

.register-div {
	padding-top: 3%;
}
.register-div {
	padding-bottom: 5%;
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
	letter-spacing: 0.2rem;
	font-weight: bold;
	color: rgba(0, 0, 115, .6);
	display: inline-block;
}

.modal-body {
	border-top: none;
	padding: 2rem;
}

form {
	padding: 2rem;
}

input[type="text"], input[type="password"] {
	outline: none;
	font-size: 14px;
	height: 3.5rem;
}

.input-lg {
	height: 3.5rem;
	font-size: 14px;
}

.form-sex {
	padding-right: 2.7rem;
	width: 50%;
	margin-right: -5%;
}

.form-dob {
	padding-right: 0%;
	margin-left: -3%;
	width: 54%;
}

.term {
	float: left;
	padding-bottom: 10%;
}

.checkbox, .radio {
	position: relative;
	display: block;
	/* margin-top: 64px; */
	margin-bottom: 10px;
	margin-left: 20px;
}

.form-footer {
	text-align: center;
	margin-top: 2rem;
}

button {
	background-color: rgba(0, 0, 115, .6);
	color: #ffffff;
}
</style>
