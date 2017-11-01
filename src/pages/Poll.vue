<template>
	<div class="root-element">

		<div class="container poll-container" id="create-poll">
			<div class="row grid-1 container">

				<div class="col-sm-6">
					<div class="make-poll">
						
						<form>
							<!-- QUESTIONS -->
							<div class="question-div">
								<div class="form-group" >
									<h3>Enter Question Here:</h3>
									<textarea v-model="msg" placeholder="Enter your question here"></textarea>
								</div>
								<div class="form-group">
									<h4>Enter Choices Here:</h4>
									<!-- <input @keyup="txtAddInput" id="0" v-model="finds[0].value" autocompelete="off" type="text" :placeholder="xyz"> -->
									<!-- <div v-show="showS"> -->
										<div v-for="(find, index) in finds" v-bind:key="index">
											<div class="poll-options">
												<!-- <pre>{{index}}</pre> -->
												<input @keyup="txtAddInput" :id="index" v-model="find.value" autocompelete="off" type="text" :placeholder="xyz">
											</div>
										</div>
										<!-- <div class="addopt">
											<a v-on:click="btnAddInput">Add Options</a>
										</div> -->
									<!-- </div> -->
								</div>
							</div>
							<div class="">
								<!-- <button type="submit" class="btn btn-primary">Create Poll</button> -->
							</div>
						</form>
					</div>
				</div>

				<div class="col-sm-6">
					<div class="view-poll">
						<form>
							<div class="preview-poll">
								<div class="form-group">
									<h2 id="preview-text">Preview</h2>
									<h1 class="preview" readonly>{{ msg }}</h1>
								</div>
								<!-- <div class="row"> -->
									<div class="form-group">
										<!-- <pre>{{finds}}</pre> -->
									<div class="opt-view row" v-for="(find, o_key) in finds" v-show="find.value != ''" v-bind:key="o_key">
										<input type="radio" class="optm col-sm-4" :id="o_key" name="nameRadio" :value="find.value">
										<!-- <input class="optm col-sm-4" type="radio" :id="o_key" name="option" v-bind:value="options.value"> -->
										<label class="col-sm-8" for="option"> {{ find.value }} </label> <hr>
									</div>
								</div>
							</div>
							<div style="margin-top: 40px;"> 
								<button class="btn-v btn btn-success" v-on:click="makePoll">Create Poll</button>
								<!-- <h1> Selected: {{ selected }} </h1> -->
								<!-- <button class="btn-r btn btn-info">RESULT</button> -->
							</div>
						</form>
					</div>
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
			xyz: 'Choice...',
			p_options: ["Option 1"],
			finds: [{value: ''}],
			aaa: null,
			selected: '',
			// showS: false
		};
	},
	methods: {
		txtAddInput: function(e) {
			if (this.finds.value != '') {
				// this.showS = true;
				if (e.target.id == this.finds.length - 1) {
				e.target.isDirty = true;
				this.finds.push({ value: '' });
			}
			}
			if (e.target.isDirty && e.target.value == '') {
				this.finds.splice(e.target.id, 1)
			}
		},

		btnAddInput: function(){
			this.finds.push({ value: '' });
		},

		vote: function() {
			alert("You Voted for " + this.selected);
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
	/* background-color: red;  */
	/* margin-left: -9.2%; */
	margin-top: 4%;
	    width: 100%;
}

.question-div {
	/* text-align: center; */
	padding-left: 4%;
	padding-right: 4%;
}

textarea {
	font-family: 'Roboto Condensed', sans-serif;
	height: 80px;
	width: 100%;
	border: 1px solid #a6c9e2;
	/* border-radius: 8px; */
	color: #000000;
	font-size: 15px;
	font-weight: 500;
	line-height: 30px;
	outline: none;
	padding: 24px 16px;
	/* resize: none; */
	text-align: left;
	font-family: arial, verdana;
	padding: 5%;
}

input[type="text"] {
	margin: 0px;
	width: 100%;
	padding: 10px;
	font-size: 14px;
	border: 1px solid #a6c9e2;
}




form {
	text-align: center;
}

form>div>div>h3,
form>div>div>h4 {
	text-align: center;
	padding-top: 19px;
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

.make-poll {
	/* background-color: #4da5f5; */
	border: none;
	width: 100%;
	border: 1px solid #000000;
	box-shadow: 10px 10px 5px #888888;
}

.preview-poll {
	/* background-color: #00B394; */
	border: none;
	width: 100%;
	margin-top: -0.2%;
}

.view-poll {
	width: 75%;
	float: right;
	background-color: #00B394;
	padding-bottom: 40px;
}

hr {
	width: 100%
}

button[type="submit"] {
	margin-bottom: 5%;
	margin-top:5%;
}

h2 {
	margin-top: 0;
}


label {
	font-size: 150%;
	color: #ffffff;
}

.optm {
	width: 30%;
	margin-right: -50px;
	padding-right: 0px;
	margin-top: 10px;
	min-height: 20px;
}

label {
	/* margin-left: -10px; */
	margin-bottom: 10px;
}

.opt-view {
	width: 100%;
/* padding-left: 2px; */
/* padding-right:2px ; */
	margin-left: 0px; 
	text-align: center;
	align-content: center;

}

.btn-v {
	margin-right: 3px;
}

.btn-r {
	margin-left: 3px;
}


#preview-text {
	font-size: 26px;
	padding-top: 20px;
}






/****FONT AWESOME*****/

/* @font-face {
	font-family: 'FontAwesome';
	src: url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?v=4.6.3');
	src: url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');
	font-weight: normal;
	font-style: normal;
} */


</style>