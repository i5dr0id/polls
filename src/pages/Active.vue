<template>

<div class="container" style="margin-top:100px;margin-bottom:100px">
  <h2 style="text-align:center"> ACTIVE POLLS </h2>
  <br><br>
  <p class="text-center"><i  v-show="loading" class="fa fa-spinner fa-spin fa-4x"></i></p>
  <div class="panel-group" id="accordion">
    <div class="panel panel-default"  v-for="result in results">
      <div class="panel-heading">
        <a data-toggle="collapse" data-parent="#accordion" v-bind:href="'#'+result._id" style="text-decoration:none">
        <h4 class="panel-title" style="text-transform:capitalize">
          {{ result.question }}
        </h4>
        <span class="glyphicon glyphicon-plus" style="float:right;margin-top:-15px"></span>
        </a>
      </div>
      <div v-bind:id="result._id" class="panel-collapse collapse in">
        <div class="panel-body">
          <ul> 
          <li>{{ result.options }}</li><br>
           <button type="button" class="btn btn-success"  id="show-modal" @click="voteOnPoll($event,result.options,result.question)">Vote on Poll</button>  
           <button type="button" class="btn btn-danger">Delete Poll</button>
          </ul>
        </div>
      </div>
    </div>
  </div> 

  <!-- template for the modal component -->
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
               <p>Hello Sanni Michael Tomiwa</p>
               <p>kjhgfrdfghjkl,kjhgfd</p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button type="button" class="btn btn-default" @click="$emit('close')">OK</button>  
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

  <!-- app -->
<div id="app">
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
     <h3 slot="header" style="text-align:center;color:white;padding-top:30px">VOTE ON POLL</h3>
    <div slot="body">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
            <h3 style="color:white;text-align:center">{{pollQuest}}</h3>
            <ul v-for="opt in pollOptions" >
               <li style="color:white;text-align:center;list-style-type:none">{{ opt }}</li>
            </ul>
            <br>
                <div class="form-group" >
                  <label for="usr" style="color:white">Enter Option Here</label>
                  <input type="text" class="form-control" v-model="optionanswer" id="option">
              </div><br>
                 <button type="button" class="btn btn-success" @click="voteAnswer($event,pollOptions,pollQuest)"> Vote on Poll</button>
          </div>
       </div>
    </div>
   
  </modal>
</div>
</div>
   
    
  
</template>



<script>
export default {
	name: 'poll',
	data() {
		return {
      loading: false,
      optionanswer:"",
			msg: '',
      showModal: false,
			pollQuestion: '',
			options: [],
      results : [],
			api: 'https://poolap.herokuapp.com/polls'

		};
	},

  methods:{

    voteOnPoll($event,options,question) {
       this.pollOptions = options
       this.showModal = true;
       this.pollQuest = question;
    },

    voteAnswer($event,options,question){
        // Covert options and answer to lowercase first
        this.optionsInLowerCase = options.toLocaleString().toLowerCase().split(',');
        // check if answer is empty
        if(this.optionanswer === ""){
          alert("You need to select an option");
          return;
        }
        // check if answer is in the option
        if(this.optionsInLowerCase.includes(this.optionanswer.toLowerCase()) === false){
          alert("You cant choose an answer not in the option");
          return;
        }

        this.data = {
            'username': localStorage.getItem('username'),
            'question': question,
            'answer': this.optionanswer.toLowerCase(),
            'fullname': localStorage.getItem('fullname')
        }
    
      
        this.axios.post('https://poolap.herokuapp.com/votes/',this.data).then(response => {
            if(response.data.responseCode === "00"){
              alert(response.data.responseMessage);
                this.$router.push({
                    name:'Main'
                });
            }else{
              alert(response.data.responseMessage);
              this.$router.push({
                  name:'active'
              });
            }
        }).catch(error => {
            alert(error);
        });
    }
  },

	created() {
		console.log('poll questions');
		let token = localStorage.getItem("token");
		if (token) {
      this.loading = true;
			this.axios
			.get(this.api, {
				headers: {
					"x-access-token": token
				}
			})
			.then(response => {
        this.loading = false;
				console.log(response.data);
        this.results = response.data.polls;
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  color:white;
}

.modal-body p{
  color:white;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

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
