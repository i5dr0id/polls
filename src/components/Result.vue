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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>