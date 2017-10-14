<template>
	<div class="container poll-container">
		<div class="row grid-1 container">

				<div class="col-sm-6">
					<div class="make-poll">
						<form>
						
							<div class="question-div">
								<div class="form-group">
									<h3>Enter Question Here:</h3>
									<textarea v-model="msg"></textarea>
								</div>
								<div class="form-group">
									<h4>Enter choices Here:</h4>
									<div v-show="p_options">
										<div v-for="(find, index) in finds" v-bind:key="index">
											<div class="poll-options">
												<input  @keyup="addFind" :id="index" v-model="find.value" autocompelete="off" type="text" :placeholder="xyz">
											</div>
										</div>
										<div><a v-on:click="addFind">Add Options</a></div>
									</div>									
								</div>	
							</div>
							<div class="">
								<button type="submit" class="btn btn-default">Create Poll</button>
							</div>
						</form>
					</div>
				</div>

				<div class="col-sm-6">
					<div class="view-poll">
						<form>
							<div class="preview-poll">
								<div class="form-group">
									<h2>PREVIEW</h2>
									<h1 class="preview" readonly>{{ msg }}</h1>
								</div>
								<div class="row">
									<div class="opt-view" v-for="(options, o_key) in finds" v-bind:key="o_key">
										<input class="optm" type="radio" :id="o_key" id="option" name="option" v-model="options.value">
										<label for="option"> {{ options.value }} </label> <hr>
									</div>
								</div> 
							</div>
							<div><button>VOTE</button>
								<button>RESULT</button>
							</div>
						</form>
					</div>

				</div>
				
			
		</div>
	</div>

</template>

<script>


export default {
  name: 'poll',
  data () {
	return {
	  msg: '',
	  xyz: 'Choice...',
	  p_options: ["Option 1"],
	  finds: [{value:""}] 
	};
  },
  methods: {
	addFind: function (e) {
    if(e.target.id == this.finds.length - 1){
		e.target.isDirty = true;
      this.finds.push({ text: '' });
    }
	    if (e.target.isDirty && e.target.value == '') {
    	this.finds.splice(e.target.id, 1)
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#hello {
	border: 1px solid red;
	width: 100%;
	background-color: #000000;
}

.poll-container {
margin-bottom: 10%;
}

.grid-1 {
	/* background-color: #D3D3D3; */
	margin-top: 65%;
	margin-left: -9.2%;
    /* border: 1px solid blue; */
	margin-top: 55%;
}
.make-poll {
	border: 1px solid #000000;
}
.question-div {
	/* text-align: center; */
	padding-left: 4%;
	padding-right: 4%;
}
textarea {
    height: 150px;
    width: 100%;
    border: 1px solid #a6c9e2;
    border-radius: 8px;
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    outline: none;
    padding: 24px 16px;
    resize: none;
    text-align: left;
	font-family: arial, verdana;
	padding: 5%;
}

input {
	margin: 0px;
    width: 100%;
    padding: 10px;
    font-size: 14px;

}

form {
	text-align: center;
}

form > div > div > h3,
form > div > div > h4 {
	text-align: left;
}


.preview {
	height: 150px;
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

.make-poll {
	    /* background-color: #333333; */
    margin-right: 3px;
    margin-right: 3px;
    width: 150%;
    margin-left: -6%;
    background-color: #4da5f5;
    border: none;
    margin-top: -4%;
    height: 550px;
}

.preview-poll {
	/* background-color: #8E33F7; */
	    background-color: #00B394;
    border: none;
    margin-left: 44%;
    width: 90%;
    margin-top: -0.2%;
	height: 550px;
}

h2 {
	    margin-top: 0;
}


label {
	font-size: 150%;
}

.optm {
	width: 5%;
    margin-left: -60%;
}

</style>