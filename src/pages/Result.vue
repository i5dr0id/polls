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
            <div>
             <button  type="submit" class="btn btn-primary" value="submit"> 700 votes</button>
             <h5 class="option-list" > Answer Option 1:</h5>
            </div>

             <div>
             <button  type="submit" class="btn btn-primary" value="submit"> 700 votes</button>
             <h5 class="option-list" > Answer Option 1:</h5>
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
          <button type="submit" class="btn btn-success" value="submit"> View poll</button>
          <h2 class="poll-title"> poll question</h2>
          </div>
            
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

div {
    /*background: purple;*/
    overflow: hidden;
}

div h5 {
    text-align: center;
    display: inline-block;
    width: 100%;
    margin-right: -50%;
    text-align: left;
    margin-left: 10px;
}

div button {
    float: right;
    margin-right: 10px;
    margin-bottom: 10px;
}
div h2 {
    /*text-align: center;*/
    display: inline-block;
    width: 100%;
    margin-right: -50%;
    text-align: left;
    margin-left: 10px;
    margin-top: -5px;
}

</style>
