<template>
  <div class="hello">
	  	<div class="mhome">
			<div class="overlay" id="home">

				<div class="home-overlay">
					<div class="mp-abt">
						<h2> POLLAPP CREATES ELECTION FOR ORGRANIZATIONS</h2>
						<h4>PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.</h4>
					</div>
					<div > <a class="btn home-btn">CREATE POLL</a>
					</div>
				</div>
			</div>
			<div class="col-md-12 home ">
					</div>
		</div>
		<poll-view> </poll-view>
  </div>
</template>

<script>
// Imports
import Poll from '../components/Poll.vue';


export default {
	components: {
		'poll-view': Poll
	},
  name: 'HelloWorld',
  data () {
	return {
	  msg: 'Welcome to Your Vue.js App'
	}
  },
  mounted () {

		let token = localStorage.getItem('token');
		this.axios.get('https://poolap.herokuapp.com/users/', {
			headers: {
				'x-access-token': token
			}
		})
		.then((response) => {
		console.log(response.data);
});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mhome {
    margin-top: 6rem;
}

.overlay {
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    z-index: 30;
    width: 100%;
    height: 650px;
    margin-top: 0rem;
}

.home-overlay {
    color: #FFFFFF;
    text-align: center;
    height: 500px;
    border-color: #0084b4;
}

.mp-abt {
    padding-top: 22rem;
}

.mp-abt > h2 {
    line-height: 46px;
    margin: 0 auto;
    width: 80% !important;
}

.mp-abt > h4 {
    line-height: 28px;
    width: 80%;
    font-size: 16px;
    margin: 30px auto 50px auto;
}

.home-btn {
    color: white;
    background-color: #0084b4;
    border-color: #0084b4;
    border: 2px solid #0084b4;
    border-radius: 30px;
    width: 200px;
    padding: 8px 16px;
    box-shadow: none;
}

.home {
  background: url('../assets/team.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  padding: 15rem;
  color: #fff;
  text-align: center;
  height: 590px;
  margin-bottom: 3%;
}


</style>