<template lang="html">
	<div class="">
		<h1>login</h1>
		<form class="" action="index.html" method="post">
			<input type="text" name="login" value="login">
			<input type="password" name="password" value="password">
		</form>
		<router-link :to="{ path: '/battle_rythme'}">
			<button type="button" name="button">Login</button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Login'
}
</script>

<style lang="css" scoped>
</style>
