import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
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
		component: Register
	},
	{
		path: '/result',
		name: 'result',
		component: Result
	}
  ],
  mode: 'history'
})
