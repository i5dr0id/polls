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
                          <input type="radio" class="options" :id="o_key" name="nameRadio">
                      </div>

                  </div>

              </div>
             
            </div>
                        <div style="margin-top: 40px; text-align: center;" class="resultButton"> 
                    <button class="btn-v btn btn-primary" v-on:click="result">VIEW RESULT</button>
              </div>
        </div> 
</div>


</template>

<script>


export default {
	name: 'poll',
	data() {
		return {
			msg: ''
		};
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
.resultButton {
  margin-bottom: 10px;
}

</style>
