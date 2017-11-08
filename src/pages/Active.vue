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
			  </div>

			  <form id="contact-form" class="checkform" action="#" target="#" method="post">
                <div class="form-row clearfix">
                  <label for="name" class="req">Name *</label>
                  <div class="form-value">
                    <input type="text" name="name" class="name" id="name" value="" />
                  </div>
                </div>
                <div class="form-row clearfix">
                  <label for="email" class="req">Email *</label>
                  <div class="form-value">
                    <input type="text" name="email" class="email" id="email" value="" />
                  </div>
                </div>
                <div class="form-row clearfix textbox">
                  <label for="message" class="req">Message *</label>
                  <div class="form-value">
                    <textarea name="message" class="message" id="message" rows="15" cols="50"></textarea>
                  </div>
                </div>
                <div id="form-note">
                  <div class="alert alert-error">
                    <h6><strong>Error</strong>: Please check your entries!</h6>
                  </div>
                </div>
                <div class="form-row form-submit">
                  <input type="submit" name="submit_form" class="btn btn-primary" value="vote" />
                </div>
                <input type="hidden" name="subject" value="Contact from website" />
                <input type="hidden" name="fields" value="name,email,message," />
                <input type="hidden" name="to" value="bosun@hidefperformance.com" />
              </form>

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
  /* border: 1px solid #000000; */
  /* box-shadow: 10px 10px 5px #888888; */
  height: auto;
  margin-bottom: 10%;
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
.resultButton {
  margin-bottom: 10px;
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

.nameInput {
	margin-bottom: 10px;
	margin-top: 10px;
}

.emailInput {
	margin-bottom: 10px;
	margin-top: 10px;
}

.vote-btn {
	margin-top: 10px;
}

.h3 .p {
	color: #4e4868;
  font-size: 26px;
  font-weight: 500;
}

</style>
