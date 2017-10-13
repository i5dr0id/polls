<template>
	<footer class="footer navbar-fixed-bottom">
		<nav class="navbar navbar-static-bottom footer">
		<div class="container">
			<div class="navbar-header">
				<!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
			  	</button>-->
				<a class="navbar-brand mp-logo" href="#home" scroll-to-item scroll-to="#home">
					POLL APP
				</a>
			</div>
		 	<!--<div class="collapse navbar-collapse" id="bs-nav-demo">-->
				<div class="nav navbar-nav navbar-right">
					<li><a href="#" class="nav-link">View Live Polls</a></li>
					<li><a href="#" >Result</a></li>
					<li><a href="#">features</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a href="#"><i class="fa fa-google-plus"></i></a></li>					
				</div>
		<!--</div>-->
		</div>
</nav>
	</footer>
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
footer{
	background: #222;
	padding: 6px;
}

.mp-logo {
	color: #ffffff;
	font-family: Lato, Helvetica, sans-serif;
}

.nav.navbar-nav li a {
	font-family: Lato, Helvetica, sans-serif;
	color: rgba(255, 255, 255, 0.75);
	font-size: 15px;
	background: none;
	border-radius: 30px;
}
</style>
