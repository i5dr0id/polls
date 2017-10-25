import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		profile: {
			id: 1,
			username: '',
			fullname: '',
			email: '',
			phone: ''

		}
	},

	mutations: {
		changeUser: state => {
			state.user
		}
	}
})