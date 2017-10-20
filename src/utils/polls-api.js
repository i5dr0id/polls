import axios from 'axios';

const BASE_URL = 'https://poolap.herokuapp.com';

export {getUserToken, getPrivateStartupBattles};

function authenticateUser() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getUserToken() {
  const url = `${BASE_URL}/api/battles/private`;
  return axios.get(url).then(response => response.data);
}

function addUser() {
	const url = `${BASE_URL}/api/battles/private`;
	return axios.get(url).then(response => response.data);
  }



// btnLogin() {
// 	console.log('AFTER: ' + JSON.stringify(this.login));
//   this.axios.post('https://poolap.herokuapp.com/users/authenticate', {
//   username: this.login.username,
//   password: this.login.password,
// }).then((response) => {
//   let token = response.data.token;
//   // console.log(token);
//   // console.log(response.data);
//   if (token) {
// 	  localStorage.setItem('token',token);

// 	  this.login.username = '';
// 	  this.login.password = '';

// 	  this.$router.push('/');
//   }

//   else {

// 	  this.msg = "wrong username or password";
// 	  this.login.username = '';
// 	  this.login.password = '';
//   }
// })
// .catch(function (error) {
// console.log(error);
// });
// }