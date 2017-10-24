<template>
  <div class="hello">
	  	<div class="mhome">
			<div class="overlay" id="home">

				<div class="home-overlay">
					<div class="mp-abt">
						<h2> POLLAPP CREATES ELECTION FOR ORGRANIZATIONS</h2>
						<h4>PollApp is an application that seamlessly allow user to create poll(opinion),which allow other user to vote or comment on.which is use to make decision and determine opinions.</h4>
					</div>
					<div > <a class="btn home-btn" href="#create-poll">CREATE POLL</a>
					</div>
				</div>
			</div>
			<div class="col-md-12 home ">
					</div>
		</div>

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

		<poll-view> </poll-view>
  </div>
</template>

<script>
// Imports
import Poll from "../pages/Poll.vue";

export default {
  components: {
    "poll-view": Poll
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // let token = localStorage.getItem("token");
    // this.axios
    //   .get("https://poolap.herokuapp.com/users/", {
    //     headers: {
    //       "x-access-token": token
    //     }
    //   })
    //   .then(response => {
    //     console.log(response.data);
	//   });
	
	// console.log(token);
  }
};

//logout
// To delete this from localStorage:

// localStorage.removeItem('YourItem')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mhome {
  margin-top: 6rem;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 650px;
  margin-top: 0rem;
}

.home-overlay {
  color: #ffffff;
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
  background: url("../assets/team.jpg");
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

/* // */

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
  line-height: 0.75em;
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

.fa-ul > li {
  position: relative;
}

.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center;
}

.fa-li.fa-lg {
  left: -1.85714286em;
}

.fa-border {
  padding: 0.2em 0.25em 0.15em;
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  -webkit-border-radius: 0.1em;
  -moz-border-radius: 0.1em;
  -ms-border-radius: 0.1em;
  -o-border-radius: 0.1em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left {
  margin-right: 0.3em;
}

.fa.fa-pull-right {
  margin-left: 0.3em;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.fa.pull-left {
  margin-right: 0.3em;
}

.fa.pull-right {
  margin-left: 0.3em;
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
  margin: 0.5em 0 0 0;
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
  padding: 0.8em 0 15px;
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
  max-width: 1100px !important;
  width: 100%;
}

.guide h3 {
  font-size: 1.6em;
  margin-bottom: 0;
  margin-top: 1.5em;
  font-weight: bold;
  color: #828282;
  margin-top: 0;
}

.guide .icon h2 {
  font-size: 1.5em;
  line-height: 45px;
  margin: 5px 10px;
}

.guide .icon ol {
  display: inline-block;
  font-size: 0.9em;
}

.guide .wide ul li,
.col-a ul li {
  text-align: left;
}

.guide .imgborder {
  border: 2px solid #cecece;
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
}

.guide h4 {
  font-weight: 100;
  font-size: 18px;
  color: #000;
  margin-bottom: 0.25em;
}

.guide h1 {
  margin: 0;
  font-size: 3em;
}

.guide ul li {
  text-align: left;
}

.guide ul li:before {
  content: "";
  font-family: FontAwesome;
}

.guide .imgborder {
  border: 2px solid #cecece;
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 0 1px rgba(46, 75, 45, 0.15),
    0 100px 120px -50px rgba(0, 0, 0, 0.2);
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

.guide .icon p {
  font-size: 1em;
  text-align: justify;
}

.guide .center {
  text-align: center;
}

.guide h2 {
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

.wide ul li {
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

.wide ul li:before {
  content: "";
  width: 1em;
  margin-left: -1.2em;
  display: inline-block;
  color: #3b89ff;
  font-family: FontAwesome;
}

.wide ul li {
  text-align: left;
}

.containera.centera {
  text-align: center;
}

.bigpad2 {
  padding: 5.5em 1em;
  display: inline-block;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .container {
    padding: 10px;
    max-width: 768px;
    font-size: 15px;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  /* .containera {}
	.containera.guide,
	.wide .containera {} */
  .large h1 {
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
  h1 br {
    display: none;
  }
}

@media only screen and (max-width: 479px) {
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
  .icon h2 {
    width: 250px;
    margin: 5px 0 0 15px;
    font-size: 16px;
  }
  .icon img {
    float: left;
    width: 40px;
  }
  h1 br {
    display: none;
  }
  #footer a {
    padding: 0 0.4em;
    color: #848484;
    font-size: 8pt;
  }
  .poll-results-rpt #report-bad {
    margin-top: -0.8em;
  }
}

@media only screen and (max-width: 767px) {
  .updates-col-1 {
    width: 100%;
    font-size: 0.8em;
  }
  .updates-col-2 {
    width: 100%;
  }
  .f-poll {
    position: absolute;
    margin-top: 25px;
  }
  .f-poll a {
    max-width: 100%;
  }
  .qp-preview {
    margin-bottom: 30px;
  }
  .features {
    font-size: 0.8em;
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
  .guide h3 {
    font-size: 1.3em;
  }
  .update {
    padding: 0.5em 0;
  }
  .update-details {
    padding: 0.5em 1em 0 1em;
  }
  .update-img {
    padding: 0 1em;
  }
  .quiz-updates .update-details h3 {
    font-size: 1.2em;
    display: table-cell;
    vertical-align: middle;
  }
  .quiz-updates .update-details a {
    height: 28px;
    display: table;
  }
  .quiz-updates .update-details .update-meta a {
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
  .large h3 {
    font-size: 1.3em;
  }
  .features div i {
    min-height: 46px;
    line-height: 46px;
  }
  .col-3 {
    width: 100%;
  }
  .col-3 p {
    float: right;
    width: 76%;
  }
  .full p {
    width: 100%;
  }
  .full h3 {
    width: 100%;
    text-align: left;
  }
  .col-3 .title-3 {
    width: 20%;
    float: left;
  }
  .col-3 h3 {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 300;
    font-size: 1.2em;
  }
  .col-3 i {
    padding: 0.5em;
    font-size: 2em;
  }
  .regi {
    padding: 2.5em 1.5em;
  }
  .regi h3 {
    font-size: 2em;
  }
}

@media only screen and (min-width: 1100px) {
  .bigpad2 {
    padding: 5.5em 0;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  body {
    font-size: 11pt;
  }
  .poll h2,
  h2 {
    font-size: 1.7em;
  }
  input {
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
  .icon h2 {
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
  .icon p {
    margin-bottom: 20px;
  }
  .featureimg {
    margin: 0 0 40px;
  }
  .whitespace {
    height: 35px;
  }
  .large h1 {
    font-size: 2.5em;
  }
  .bigpad2 {
    padding: 5% 1em 5%;
    display: inline-block;
  }
}

@media only screen and (max-width: 768px) {
  .large {
    padding: 2.5em 1em;
  }
  .nomobile {
    display: none !important;
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

  .addopt > a {
    color: #ffffff;
  }
}
</style>