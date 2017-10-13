<template>
  <div class="hello">
<div class="register-div">
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="text-center">Sign Up to <span style="display: inline-block;"><a><router-link to="/">POLL APP</router-link></a></span></h3>
		</div>
		<div class="modal-body">
			<form class="dForm" name="registerForm" autocomplete="off" >
				<div class="form-group">
					<input type="text" class="form-control input-lg" placeholder="Firstname" name="userFirstName">

				</div>
				<div class="form-group">
					<input type="text" class="form-control input-lg" placeholder="Lastname" name="userLastName">

				</div>
				<div class="form-group">
					<input type="email" class="form-control input-lg" placeholder="Email" name="userEmail">
				</div>

				<!--password comfirm box-->
				<div class="form-group">
					<input type="password" class="form-control input-lg" placeholder="Password" name="userPassword1">
				</div>
				<div class="form-group">
					<input type="password" class="form-control input-lg" placeholder="Confirm Password" name="userPassword2">
				</div>

				<div class="form-group">
					<input type="number" class="form-control input-lg" placeholder="Phone" name="userPhoneNumber">
				</div>
				<div class="form-group">
					<input type="text" class="form-control input-lg" placeholder="Address" name="userAddress">
				</div>
				<div class="form-group row">
					<div class="form-group col-md-6 col-sm-6 form-sex">
					<select class="form-control ">
						<option> Select Gender </option>
						<option> Male </option>
						<option> Female </option>
					</select>
					</div>
					<div class="form-group col-md-6 col-sm-6 form-dob">
					<input type="date" class="form-control input-lg" name="userDOB" placeholder="DOB" required>
					</div>
					
				</div>

				<div class="form-group checkbox checkbox-primary">
					<input type="checkbox" required> <div class="term"> I accept <span><a href="#"> Terms and Conditions </a></span></div>
				</div>
				<div class="form-group">
					<button class="btn btn-block btn-lg btn-sign">REGISTER</button>
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


export default {
  name: 'HelloWorld',
  data () {
	return {
	  msg: 'Welcome to Your Vue.js App'
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>