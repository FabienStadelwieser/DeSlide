<template lang="html">
	<div>
		<h1>Editor : {{ $route.params.slide }}</h1>
		<SlideSelector></SlideSelector>
		<Preview></Preview>
		<Chat></Chat>
		<Toolbar></Toolbar>
		<Roadmap></Roadmap>
	</div>
</template>

<script>
import SlideSelector from './SlideSelector.vue'
import Preview from './Preview.vue'
import Chat from './Chat.vue'
import Toolbar from './Toolbar.vue'
import Roadmap from './Roadmap.vue'

export default {
	name: 'Editor',
	components: {
		SlideSelector,
		Preview,
		Chat,
		Toolbar,
		Roadmap
	}
}
</script>

<style lang="css" scoped>
</style>
