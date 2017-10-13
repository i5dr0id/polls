import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Home
	},
	{
		path: '/login',
		name: 'signin',
		component: Login
	},
	{
		path: '/register',
		name: 'signup',
		component: Signup
	}
  ]
})
