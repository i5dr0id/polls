<template>
  <div class="container" style="margin-top: 100px;">
   
		<div class="col-md-8 active-poll">
			<br>
			<div class="panel panel-default">
			   <div class="panel-heading">
				  <h3 class="panel-title">Polls</h3>
			  </div>
			  <div class="panel-body">
				  <form>
					<div class="preview-poll">
						<div class="form-group">
							<h2 id="preview-text"></h2>
							 <h1 class="preview" readonly>{{ pollQuestion }}</h1>
						</div>      
					</div>
				  </form>
			  </div>
		  </div>

		<div class="poll-option">
		 <div class="panel panel-defaul">
			  <div class="panel-body">
				  <div class="form-group">
					<div v-for="(opt, kiy) in options" :key="kiy">
					  <input type="radio"  class="options" :id="kiy" name="nameRadio" v-bind:value="opt">
              <span class="option">{{opt}}</span> <hr>
				     <!-- <label class="col-sm-8" for="option"> {{ opt }} </label> <hr> -->
				  	</div>
				  </div>
			  </div>

		  </div>
            <div class="vote-btn" style="text-align: center;">
            <button class="btn-v btn btn-success" v-on:click="result">VOTE</button>
            </div>
		  </div>

		</div> 
   

</div>


</template>

<script>


export default {
	name: 'poll',
	data() {
		return {
			msg: '',
			pollQuestion: '',
			options: [],
			api: 'https://poolap.herokuapp.com/polls'

		};
	},

	created() {
		console.log('poll questions');
		let token = localStorage.getItem("token");
		if (token) {
			this.axios
			.get(this.api, {
				headers: {
					"x-access-token": token
				}
			})
			.then(response => {
				console.log(response.data);
				this.pollQuestion = response.data.polls[0].question;
				this.options = this.options.concat(response.data.polls[1].options);
				console.log('This are the options \n', response.data.polls[1].options);
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active-poll {
  /* background-color: #4da5f5; */
  border: none;
  width: 100%;
  border: 1px solid #000000;
  box-shadow: 10px 10px 5px #888888;
  height: auto;
}

.preview {
  /* height: 150px; */
  width: 90%;
  border: none;
  border-radius: 8px;
  color: #4e4868;
  font-size: 26px;
  font-weight: 500;
  line-height: 30px;
  outline: none;
  padding: 24px 16px;
  resize: none;
  text-align: center;
  margin-left: 24px;
  background-color: #ffffff;
}

.option{
  width: 100%;
/* padding-left: 2px; */
/* padding-right:2px ; */
  /*margin-left: 0px; */
  text-align: left;
  align-content: center;
  margin-left: 24px;
  background-color: #ffffff;
  font-weight: 500;
  color: #4e4868;
  font-size: 20px;

}

.btn {
  
  margin-bottom: 20px;
  text-align:center;

}

.options {
height: 20px;
width: 20px;
}

</style>
