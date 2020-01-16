<template lang="html">
	<div>
		<div class="border border-black m-2 h-100 slide-box" ref="slider_box">
			<Moveable v-for="postit in postits" v-bind:key="postit.id" v-bind:id="postit.id"/>
			<ImageBox v-for="image in images" v-bind:key="image.id" v-bind:img="image.img"/>
		</div>
	</div>
</template>

<script>

	import Moveable from './Box.vue'
	import ImageBox from "./ImageBox.vue";

	export default {
		name: 'Preview',
		components: {
			ImageBox,
			Moveable
		},
		data() {
			return {
				postits: this.$parent.$data.postits,
				images: this.$parent.$data.images
			}
		}
	}
</script>

<style lang="css" scoped>
	.slide-box {

	}
</style>
