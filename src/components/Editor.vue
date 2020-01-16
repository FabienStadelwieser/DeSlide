<template lang="html">
	<div id='grid'>
		<SlideSelector id='slide-selector'/>
		<Preview id='preview' :nbr="getId" :img="getSelectedSlide.img"/>
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
import {mapGetters} from "vuex";

export default {
	name: 'Editor',
	components: {
		SlideSelector,
		Preview,
		Chat,
		Toolbar,
		Roadmap
	},
	data() {
		return {
			postits: [],
			images: []
		}
	},
	computed: mapGetters(['getSelectedSlide', 'getId']),
	methods: {
		addPostIt: function () {
			this.postits.push({
				id: this.postits.length + 1
			})
		},
		addImage: function () {
			this.images.push({
				id: this.images.length * 100 + 1
			})
		}
	}
}
</script>

<style lang="css" scoped>

#grid {
	display: grid;
	grid-template-columns: 1fr 4fr 1.3fr;
	grid-template-rows: 4.8em 1fr 12.5em;
	grid-template-areas:
		"selector toolbar chat"
		"selector preview chat"
		"selector roadmap chat";

	height: 100%;
	width: 100%;

	//background: no-repeat center url("/editor_background.png");
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
