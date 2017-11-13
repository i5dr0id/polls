// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'


Vue.use(VeeValidate);
Vue.use(VueAxios, axios)
Vue.component('modal', {
  template: '#modal-template'
})


Vue.config.productionTip = false

window.Event = new Vue;
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    showModal: false
  }
})