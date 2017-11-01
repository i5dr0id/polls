import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Result from '@/pages/Result'
import Active from '@/pages/Active'
import Profile from '@/pages/Profile'
import Logout from '@/pages/Logout'
import About from '@/pages/About'

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
		component: Register
	},
	{
		path: '/result',
		name: 'result',
		component: Result
	},
	{
		path: '/active/:id',
		name: 'active',
		component: Active
	},
	{
		// Only Logged User can access this routes
		path: '/profile/:id',
		name: 'profile',
		component: Profile
	},
	{
		path: '/logout',
		name: 'logout',
		component: Logout
	},
	{
		path: '/about',
		name: '/about',
		component: About
	}
  ]
})
