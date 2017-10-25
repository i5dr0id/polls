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

				<!-- Logged User Div -->
				<div class="collapse navbar-collapse" id="bs-nav-demo" v-if='loggedIn'>
					<div class="nav navbar-nav navbar-right">
						<li><a class="nav-link"><router-link to="/">Home</router-link></a></li>
						<!-- get user id for the active polls and go there -->
						<li><a href="#livepolls"><router-link :to="{name:'active', params:{id:active.id}}">Live-Polls</router-link></a></li>
						<li><a><router-link to="/result">Result</router-link></a></li>
						<li><a href="#">features</a></li>
						<li><a href="#about">About</a></li>

						<!-- <div class="login-state-in" > -->
							<li class="login-user"><a href="#"><router-link to="/logout">Logout</router-link></a></li>
							<li><a href="#" class="btn btn-primary header-btn" id="btn-tran-login"><router-link class="userText" :to="/profile/ + active.id">{{user}}</router-link></a></li>
						<!-- </div> -->

						<!-- <div class="login-state-out" > -->
							<!-- <li class="login-user-out"><a href="#"	><router-link to="/login">Login</router-link></a></li> -->
							<!-- <li><a href="#" class="btn btn-primary header-btn-out" id="btn-tran-out"><router-link to="/register">Sign up</router-link></a></li> -->
						<!-- </div> -->
					</div>
				</div>

				<!-- Visitors Div -->
				<div class="collapse navbar-collapse" id="bs-nav-demo" v-else>
					<div class="nav navbar-nav navbar-right">
						<li><a class="nav-link"><router-link to="/">Home</router-link></a></li>
						<!-- <li><a href="#livepolls">Live-Polls</a></li>
						<li><a><router-link to="/result">Result</router-link></a></li> -->
						<li><a href="#">features</a></li>
						<li><a href="#about">About</a></li>

						<!-- <div class="login-state-in">
							<li class="login-user"><a href="#" v-on:click="logout()"> Logout </a></li>
							<li><a href="#" class="btn btn-primary header-btn" id="btn-tran-login"><router-link class="userText" to="/register">{{user}}</router-link></a></li>
						</div> -->

						<div class="login-state-out">
							<li class="login-user-out"><a href="#"><router-link to="/login">Login</router-link></a></li>
							<li><a href="#" class="btn btn-primary header-btn-out" id="btn-tran-out"><router-link to="/register">Sign up</router-link></a></li>
						</div>
					</div>
				</div>

				
			</div>
		</nav>
	</header>
</template>
<script>
export default {
  // loginType: 'username',
  props:['username'],
  data() {
    return {
		user: '',
		active: {
			id: null
		},
		api: 'https://poolap.herokuapp.com/users/authenticate',
	  loggedIn: false
    };
  },

  methods: {
	  logout() {
		  localStorage.removeItem("token");
	  }
  },
  mounted() {
	// console.log('This is the ID: ', this.$store.state.profile.id);

	this.active.id = this.$store.state.profile.id;
	  Event.$on('login', ($event)=>{ // login event
		  this.loggedIn = true;
		  this.user = $event.username;
		  this.active.id = $event._id; 
		//   console.log('id', $event._id);
		//   console.log($event.phone)
	  });

	  Event.$on('loggedout', ()=> { // logout event
		  this.loggedIn = false;
	  });

    // let token = localStorage.getItem("token");
    // if (typeof token !== "undefined") {
    //   this.axios
    //     .get(this.api, {
    //       headers: {
    //         "x-access-token": token
    //       }
    //     })
    //     .then(response => {
	// 	  console.log(response.data);
    //     });
	// }
	this.loading = false;
  }
};
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
  background-color: rgba(0, 0, 115, 0.6);
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

#btn-tran-login {
  background-color: transparent !important;
  width: 140px;
  border-radius: 0px!important;
  /* padding-bottom: 900%; */
}

#btn-tran-out {
	
}
.navbar-right {
  padding-top: 10px;
}

/* .nav.navbar-nav li a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  background: none;
  border-radius: 30px;
} */

/* #btn-tran {
	background-color: transparent !important;
	width: 160px;
} */

.header-btn {
  padding: 5px 10px !important;
  margin-top: 10px !important;
  border: 2px solid #fff;
  border-color: #ffffff !important;
  margin: auto;
}

.btn {
  box-shadow: none;
}

.login-state-in {
 /* border: 1px solid #ffffff; */
 display: flex;
 flex-direction: row;
}

.login-state-in > .login-user {
	padding-top: 8%;
    margin-right: 10%;
}

.login-state-in > #btn-tran {
	/* float: left; */
	color: #ffffff;
	/* font-size: 20%; */
}

#btn-tran > router-link {
	/* font-size: 30%; */
}

.userText {
	font-size: 15px!important;
	color: #ffffff!important;
	/* font-stretch: expanded; */
	font-weight: bold;
}

.login-state-out {
 /* border: 1px solid #ffffff; */
 display: flex;
 flex-direction: row;
}

.login-state-out > .login-user-out {
	padding-top: 8%;
    margin-right: 15%;
}

.login-state-out > #btn-tran {
	/* float: left; */
	color: #ffffff;
	/* font-size: 20%; */
}

.header-btn-out {
  padding: 5px 50px !important;
  margin-top: 10px !important;
  border: 2px solid #fff;
  border-color: #ffffff !important;
  margin: auto;
}
</style>
