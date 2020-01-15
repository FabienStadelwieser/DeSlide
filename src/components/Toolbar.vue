<template lang="html">
	<div>
		<nav id="toolbar" class="navbar navbar-light">
			<a class="navbar-brand" href="#">
				<img src="@/assets/disquette.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/hand.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/jocwatch.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/search.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/play.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/postit.svg" class="toolbar-icon" alt="">
			</a>
			<a class="navbar-brand" href="#">
				<img src="@/assets/notifications.svg" class="toolbar-icon" alt="">
			</a>
			<li class="nav-item dropdown">
				<a class="navbar-brand nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<img src="@/assets/menu.svg" class="toolbar-icon" alt="">
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">Import</a>
					<a class="dropdown-item" href="#">Export</a>
					<a class="dropdown-item" href="#">Template</a>
					<a class="dropdown-item" href="#">JOC Watch</a>
					<a class="dropdown-item" href="#">COP</a>
					<a class="dropdown-item" href="#">Post-it</a>
					<a class="dropdown-item" href="#">Save</a>
					<a class="dropdown-item" href="#">Save as</a>
					<a class="dropdown-item" href="#">Print</a>
					<div class="dropdown-divider"></div>
					<router-link class="dropdown-item" :to="{ path: '/battle_rythme' }">
						<a><b>Quit</b></a>
					</router-link>
				</div>
			</li>

		</nav>
	</div>
</template>

<script>
export default {
	name: 'Toolbar'
}
</script>

<style lang="css" scoped>
	#toolbar {
		width: fit-content;
		background-color: #232348
	}

	.toolbar-icon {
		width: 30px;
		height: 30px;
		margin:0 15px;
	}
</style>
