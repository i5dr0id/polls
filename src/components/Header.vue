<template>
	<header>	
		<nav class="navbar navbar-default navbar-fixed-top nav-trans" id="navT">	
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<router-link class="navbar-brand mp-logo" to="/">POLL APP</router-link>
				</div>
				<div class="collapse navbar-collapse" id="bs-nav-demo">
					<div class="nav navbar-nav navbar-right">
						<li><a href="#home" class="nav-link"><router-link to="/">Home</router-link></a></li>
						<li><a href="#livepolls">Live-Polls</a></li>
						<li><a href="#result">Result</a></li>
						<li><a href="#">features</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#"><router-link to="/login">Login</router-link></a></li>
						<li><a href="register" class="btn btn-primary header-btn" id="btn-tran"><router-link to="/register">Sign up</router-link></a></li>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>
<script>
export default {
	data(){
		return{

		}
	}
}
</script>
<style scoped>

.nav-trans {
	background: none;
}

.navbar-default {
	background-color: #0084b4;
	border-bottom: none;
}

.navbar {
	background: #0084b4;
	min-height: 70px !important;
}

.navbar-header {
	padding-top: 10px;
}

.navbar-toggle {
	position: relative;
	float: right;
	padding: 9px 10px;
	margin-top: 8px;
	margin-right: 15px;
	margin-bottom: 8px;
	background-color: transparent !important;
	background-image: none;
	border: 1px solid transparent !important;
	border-radius: 4px;
}

button {
	height: 3.5rem;
	padding: 0;
	color: #fff;
	font-size: 14px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 115, .6);
}

.icon-bar {
	background: #ffffff !important;
	border: none !important;
}

.navbar-brand {
	color: #fff !important;
}

.mp-logo {
	font-family: Lato, Helvetica, sans-serif;
	font-weight: 700;
	font-size: 22px;
	color: #ffffff !important;
	letter-spacing: 1px;
	text-transform: uppercase;
	float: left;
	height: 50px;
	padding: 15px 15px;
	font-size: 18px;
	line-height: 20px;
}

.navbar-collapse {
	border-top: 1px solid transparent !important;
}

.nav.navbar-nav li a {
	color: rgba(255, 255, 255, 0.75);
	font-size: 15px;
	background: none;
	border-radius: 30px;
	font-family: Lato, Helvetica, sans-serif;
}

#btn-tran {
	background-color: transparent !important;
	width: 190px;
}

.nav.navbar-nav li a {
	color: rgba(255, 255, 255, 0.75);
	font-size: 15px;
	background: none;
	border-radius: 30px;
}

#btn-tran {
	background-color: transparent !important;
	width: 190px;
}

.header-btn {
	padding: 5px 10px !important;
	margin-top: 15px !important;
	border: 2px solid #fff;
	border-color: #FFFFFF !important;
	margin: auto;
}

.btn {
	box-shadow: none;
}

</style>
