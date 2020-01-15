<template lang="html">
	<div id='grid'>
		<SlideSelector id='slide-selector'/>
		<Preview id='preview'/>
		<Chat id='chat'/>
		<Toolbar id='toolbar'/>
		<Roadmap id='roadmap'/>
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

#grid {
	display: grid;
	grid-template-columns: 1fr 4fr 1.3fr;
	grid-template-rows: 4.8em 1fr 7em;
	grid-template-areas:
		"selector toolbar chat"
		"selector preview chat"
		"selector roadmap chat";

	height: 100%;
	width: 100%;

	background: no-repeat center url("/editor_background.png");
	background-size: 100% 100%;
}

#slide-selector {
	grid-area: selector;
}

#preview {
	grid-area: preview;
}

#chat {
	grid-area: chat;
}

#toolbar {
	grid-area: toolbar;
}

#roadmap {
	grid-area: roadmap;
}

</style>
