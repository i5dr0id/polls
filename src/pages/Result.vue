<template>
  <div class="container" style="margin-top: 100px;">
    <div class="col-md-8">
      <div class="panel panel-default">
      <div class="panel-heading">
          <h3 class="panel-title">Poll Result</h3>
        </div>
        <div class="panel-body">
          <h4>Question 1</h4> <br>
          <div class="row">
            <div class="col-sml-3">
            <h3 class="option-list" > Answer Option 1:</h3> <button type="submit" class="btn btn-success" value="submit"> 700 votes</button>
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
            <h2 class="poll-title"> poll title</h2><button type="submit" style="float:right; margin-top:20px;" class="btn btn-success" value="submit"> View poll</button>
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
.btn {

}


</style>
