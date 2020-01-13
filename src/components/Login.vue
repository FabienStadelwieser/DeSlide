<template lang="html">
	<div class="w-25 m-auto">
		<h1>Login</h1>
		<form @submit="loginApi" id="login" method="post">
			<div v-if="errors.length > 0" class="alert alert-danger">
				<ul id="errors" class="list-group">
					<li class="list-group-item" v-for="error in errors" v-bind:key="error" >
						{{ error }}
					</li>
				</ul>
			</div>
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" class="form-control" id="username" aria-describedby="username-help" v-model="username">
				<small id="username-help" class="form-text text-muted">Use your LDAP credentials</small>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" id="password" v-model="password">
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="remember-me">
				<label class="form-check-label" for="remember-me">Remember me</label>
			</div>
			<button type="submit" class="btn btn-primary">Login</button>
		</form>
	</div>
</template>

<script>

	import axios from 'axios';
	let getUrl = window.location;
	let baseUrl = getUrl.protocol + "//" + getUrl.host.split(":")[0] + ':8000/';

	export default {
		name: 'Login',
		data() { return {
			errors: [],
			username: '',
			password: ''
		}},
		methods: {
			loginApi: function(e) {
				e.preventDefault();

				let request = {
					method: 'post',
					url: baseUrl + 'api/token-auth/',
					data: {
						username: this.username,
						password: this.password
					}
				};
				let instance = this;

				axios(request).then(function(response) {
					if (response.status === 200) {
						localStorage.token = response.data['token'];
						instance.$router.push('/battle_rythme');
					}
				}).catch(function (error) {
					for (let i = 0; i < error.response.data['non_field_errors'].length; i++) {
						instance.errors.push(error.response.data['non_field_errors'][i]);
					}
				});

			}
		}
	}
</script>

<style lang="css" scoped>
</style>
