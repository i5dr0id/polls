<template>
	<div class="root-element">

		<div class='wide'>
			<div class="containera guide centera bigpad2">
				<h2 class='bigh2 grey'>How to Publish a Poll in 3 Steps</h2>

				<div class="col-3">
					<div class='title-3'>
						<i class='fa fa-edit'></i>

						<h3>1. Add Questions</h3>
					</div>
					<p>Type your question and then add answers. From this point you can simply hit create poll and you're ready to go. The rest of the steps are optional. No account or signup required.</p>
				</div>
				<div class="col-3">
					<div class='title-3'>
						<i class='fa fa-send'></i>
						<h3>2. Set Options</h3>
					</div>
					<p>On the Themes tab select one of our default themes or create your own. On the settings tab set options like allowing multiple answers, allowing voters to enter their own answers and much more</p>
				</div>
				<div class="col-3">
					<div class='title-3'>
						<i class='fa fa-pie-chart'></i>
						<h3>3. Share & Report</h3>
					</div>
					<p>Click Share and copy your poll Vote url to share with voters. You can also hit Embed to place the poll directly on your website or blog.</p>
				</div>

			</div>
		</div>

		<div class="wide bg">
			<div class="containera guide bigpad2">

				<div class="row">
					<div class="col-md-6">
						<img class='guideimg imgborder' alt='Generate leads with your quiz' src='../assets/poll.png'>
					</div>
					<div class="col-md-6" style="padding:10px;">
						<h4 class='bigh2 grey' style="font-weight:lighter;text-align: center; word-spacing: 6px;">Live Results In Clear Concise Graphs</h4>
						<h3></h3>
						<p style="padding-top:10px">
							Live graphs show your poll results immediately in easy to understand and read, bar graph format. But final results don't always reveal the whole picture. The longitudinal graph provides a visual representation of poll votes over time.
						</p>
					</div>
				</div>

			</div>
		</div>

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
								<button type="submit" class="btn btn-primary">Create Poll</button>
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
								<button class="btn-v btn btn-success" v-on:click="vote">VOTE</button>
								<!-- <h1> Selected: {{ selected }} </h1> -->
								<button class="btn-r btn btn-info">RESULT</button>
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

.fa {
	display: inline-block;
	font: normal normal normal 14px/1 FontAwesome;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.fa-lg {
	font-size: 1.33333333em;
	line-height: .75em;
	vertical-align: -15%;
}

.fa-2x {
	font-size: 2em;
}

.fa-3x {
	font-size: 3em;
}

.fa-4x {
	font-size: 4em;
}

.fa-5x {
	font-size: 5em;
}

.fa-fw {
	width: 1.28571429em;
	text-align: center;
}

.fa-ul {
	padding-left: 0;
	margin-left: 2.14285714em;
	list-style-type: none;
}

.fa-ul>li {
	position: relative;
}

.fa-li {
	position: absolute;
	left: -2.14285714em;
	width: 2.14285714em;
	top: .14285714em;
	text-align: center;
}

.fa-li.fa-lg {
	left: -1.85714286em
}

.fa-border {
	padding: .2em .25em .15em;
	border: solid .08em #eee;
	border-radius: .1em;
	-webkit-border-radius: .1em;
	-moz-border-radius: .1em;
	-ms-border-radius: .1em;
	-o-border-radius: .1em;
}

.fa-pull-left {
	float: left;
}

.fa-pull-right {
	float: right;
}

.fa.fa-pull-left {
	margin-right: .3em;
}

.fa.fa-pull-right {
	margin-left: .3em;
}

.pull-right {
	float: right;
}

.pull-left {
	float: left;
}

.fa.pull-left {
	margin-right: .3em;
}

.fa.pull-right {
	margin-left: .3em;
}

.fa-spin {
	animation: fa-spin 2s infinite linear;
	-webkit-animation: fa-spin 2s infinite linear;
	-moz-animation: fa-spin 2s infinite linear;
	-ms-animation: fa-spin 2s infinite linear;
	-o-animation: fa-spin 2s infinite linear;
}

.fa-pulse {
	animation: fa-spin 1s infinite steps(8);
	-webkit-animation: fa-spin 1s infinite steps(8);
	-moz-animation: fa-spin 1s infinite steps(8);
	-ms-animation: fa-spin 1s infinite steps(8);
	-o-animation: fa-spin 1s infinite steps(8);
}






/****END OF FONT AWESOME*****/

.col-2 {
	width: 50%;
	padding-left: 20px;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
}

.col-img {
	float: left;
	width: 50%;
	text-align: center;
}

.col-img.right {
	text-align: right;
}

.col-img.left {
	text-align: left;
}

.col-img img {
	max-width: 394px;
	text-align: center;
	width: 90%;
	margin: .5em 0 0 0;
}

.bg {
	position: relative;
	background-color: #f5f5f5;
	background-size: 100% 100%;
	/* -webkit-transform: translate3d(0, 0, 0); */
}

.col-3 {
	display: inline-block;
	width: 33%;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	padding: 0 1em;
	vertical-align: text-top;
}

.col-3 i {
	font-size: 3em;
	padding: .8em 0 15px;
	color: #0084b4;
}

.col-3 p {
	text-align: justify;
}

.grey {
	color: #3d3d3d;
}

.guide {
	padding: 20px 0;
	font-size: 17px;
	line-height: 1.7;
	color: #5d6769;
	max-width: 1100px!important;
	width: 100%;
}

.guide H3 {
	font-size: 1.6em;
	margin-bottom: 0;
	margin-top: 1.5em;
	font-weight: bold;
	color: #828282;
	margin-top: 0;
}

.guide .icon H2 {
	font-size: 1.5em;
	line-height: 45px;
	margin: 5px 10px;
}

.guide .icon ol {
	display: inline-block;
	font-size: .9em;
}

.guide .wide UL LI,
.col-a UL LI {
	text-align: left;
}

.guide .imgborder {
	border: 2px solid #cecece;
	color: #000;
	background-color: #fff;
	-webkit-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	-moz-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
}

.guide H4 {
	font-weight: 100;
	font-size: 18px;
	color: #000;
	margin-bottom: .25em;
}

.guide h1 {
	margin: 0;
	font-size: 3em;
}

.guide UL LI {
	text-align: left;
}

.guide UL LI:before {
	content: "";
	font-family: FontAwesome;
}

.guide .imgborder {
	border: 2px solid #cecece;
	color: #000;
	background-color: #fff;
	-webkit-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	-moz-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	box-shadow: inset 0 0 0 1px rgba(46, 75, 45, .15), 0 100px 120px -50px rgba(0, 0, 0, .2);
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
}

.guide img {
	max-width: 100%;
}

.guide .icon .bigh2 {
	font-size: 2.8em;
	width: 100%;
	margin: 0;
}

.guide .bigh2 {
	font-size: 2.3em;
	width: 100%;
	margin: 0;
}


.guide .icon P {
	font-size: 1em;
	text-align: justify;
}

.guide .center {
	text-align: center;
}

.guide H2 {
	margin: 0;
	font-size: 2.5em;
	color: #424242;
}

.wide .containera {
	display: inline-block;
}

.containera {
	max-width: 1100px;
	margin: 0 auto;
	text-align: left;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
}

.containera {
	padding: 0 5px 0 5px;
	display: inline-block;
}

.wide {
	clear: both;
	width: 100%;
	text-align: center;
	display: inline-block;
}

.wide UL LI {
	padding-left: 1.2em;
	padding-right: 20px;
	display: inline-block;
	font-size: 1.1em;
	line-height: 1.75;
	min-width: 300px;
	text-align: center;
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	width: 100%;
}

.wide UL LI:before {
	content: "";
	width: 1em;
	margin-left: -1.2em;
	display: inline-block;
	color: #3b89ff;
	font-family: FontAwesome;
}

.wide UL LI {
	text-align: left;
}

.containera.centera {
	text-align: center;
}

.bigpad2 {
	padding: 5.5em 1em;
	display: inline-block;
}

@media only screen and (min-width:481px)and (max-width:768px) {

	.container {
		padding: 10px;
		max-width: 768px;
		font-size: 15px;
	}
}

@media only screen and (min-width:321px)and (max-width:480px) {
	/* .containera {}
	.containera.guide,
	.wide .containera {} */
	.large H1 {
		font-size: 2.5em;
	}
	.col-1 {
		width: 100%;
	}
	.col-2 {
		width: 100%;
		margin-bottom: 20px;
	}
	/* .icon {}
	.icon P {} */
	.featureimg {
		margin: 0 25px 20px;
	}
	.whitespace {
		height: 35px;
	}
	H1 BR {
		display: none;
	}
}

@media only screen and (max-width:479px) {
	/* #content .container {}
	#content .container.guide,
	#content .wide .containera {} */
	.col-1 {
		width: 100%;
	}
	.col-2 {
		width: 100%;
		margin-bottom: 0;
	}
	.col-img {
		width: 100%;
	}
	.featureimg {
		margin: 0 0 20px 0;
	}
	.whitespace {
		height: 30px;
	}
	.icon H2 {
		width: 250px;
		margin: 5px 0 0 15px;
		font-size: 16px;
	}
	.icon IMG {
		float: left;
		width: 40px;
	}
	H1 BR {
		display: none
	}
	#footer a {
		padding: 0 .4em;
		color: #848484;
		font-size: 8pt;
	}
	.poll-results-rpt #report-bad {
		margin-top: -.8em;
	}
}

@media only screen and (max-width:767px) {
	.updates-col-1 {
		width: 100%;
		font-size: .8em;
	}
	.updates-col-2 {
		width: 100%;
	}
	.f-poll {
		position: absolute;
		margin-top: 25px;
	}
	.f-poll A {
		max-width: 100%;
	}
	.qp-preview {
		margin-bottom: 30px;
	}
	.features {
		font-size: .8em;
	}
	.features div {
		min-height: 80px;
	}
	.guide .bigh2 {
		font-size: 2em;
	}
	.guide .icon .bigh2 {
		font-size: 2em;
	}
	.guide H3 {
		font-size: 1.3em;
	}
	.update {
		padding: .5em 0;
	}
	.update-details {
		padding: .5em 1em 0 1em;
	}
	.update-img {
		padding: 0 1em;
	}
	.quiz-updates .update-details H3 {
		font-size: 1.2em;
		display: table-cell;
		vertical-align: middle;
	}
	.quiz-updates .update-details A {
		height: 28px;
		display: table;
	}
	.quiz-updates .update-details .update-meta A {
		height: initial;
	}
	.guide h2 {
		font-size: 1.8em;
	}
	#content .container.padbig.guide {
		padding: 1.8em 1em;
	}
	.guide {
		font-size: 12px;
	}
	.large H3 {
		font-size: 1.3em;
	}
	.features div i {
		min-height: 46px;
		line-height: 46px
	}
	.col-3 {
		width: 100%;
	}
	.col-3 P {
		float: right;
		width: 76%;
	}
	.full P {
		width: 100%;
	}
	.full H3 {
		width: 100%;
		text-align: left;
	}
	.col-3 .title-3 {
		width: 20%;
		float: left;
	}
	.col-3 H3 {
		font-family: 'Roboto Condensed', sans-serif;
		font-weight: 300;
		font-size: 1.2em;
	}
	.col-3 i {
		padding: .5em;
		font-size: 2em;
	}
	.regi {
		padding: 2.5em 1.5em;
	}
	.regi H3 {
		font-size: 2em;
	}
}

@media only screen and (min-width:1100px) {
	.bigpad2 {
		padding: 5.5em 0;
	}
}

@media only screen and (min-width:481px)and (max-width:768px) {
	BODY {
		font-size: 11pt;
	}
	.poll H2,
	H2 {
		font-size: 1.7em;
	}
	INPUT {
		height: 45px;
		margin-bottom: 7px;
	}
	.poll .container {
		padding: 0 10px 0;
		text-align: center;
	}
	.container {
		padding: 10px;
		max-width: 768px;
		font-size: 15px;
	}
	.ul-form {
		float: left;
		width: 100%;
		padding-top: 0;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
	}
	.fbconnect {
		padding: 0;
		margin-bottom: 8px;
	}
	.ul-connect {
		float: left;
		width: 100%;
		text-align: center;
	}
	.sup-form {
		padding: 5px;
	}
	.sup-connect {
		display: none;
	}
	.icon H2 {
		width: 270px;
	}
	.col-1 {
		width: 50%;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
	}
	.col-2 {
		width: 50%;
		padding-left: 20px;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
	}
	/* .icon {} */
	.icon P {
		margin-bottom: 20px;
	}
	.featureimg {
		margin: 0 0 40px;
	}
	.whitespace {
		height: 35px;
	}
	.large H1 {
		font-size: 2.5em;
	}
	.bigpad2 {
		padding: 5% 1em 5%;
		display: inline-block;
	}
}

@media only screen and (max-width:768px) {
	.large {
		padding: 2.5em 1em;
	}
	.nomobile {
		display: none!important;
	}
	.col-img img {
		width: 70%;
	}
	.bigpad2 {
		padding: 9% 1em;
	}
	.col-1,
	.col-2 {
		width: 100%;
		padding-left: 0;
	}
	.col-img {
		width: 100%;
	}
	.col-img.left,
	.col-img.right {
		text-align: center;
	}
	.col-img img {
		width: 50%;
		margin: 1em;
	}
	.col-img.left img {
		margin-top: 0;
	}

	.addopt {
		margin-top: 15px;
	}

	.addopt>a {
		color: #ffffff;
	}
}
</style>