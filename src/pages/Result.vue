<template>
  <div class="container" style="margin-top: 100px;">
    <div class="col-md-8">
      <div class="panel panel-default">
        <div class="panel-body">
          <h1>Poll Result</h1>
          <h4>Question 1</h4> <br>
          <div class="row">
            <div class="col-sml-3">Option 1:</div>
            <div class="col-sml-6">
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">40%</div>
              </div>
            </div>
          </div><br>

       

     


        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Popular Polls</h3>
        </div>
        <div class="panel-body">
          <div>
            <span class="poll-title"> poll title</span> <button class="btn btn-success" value="submit"> View poll</button>
          </div>
         <!-- <h1>Poll titile</h1><button class="btn btn-default" value="submit"> View </button> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// Imports
import Poll from '../pages/Poll.vue';


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
