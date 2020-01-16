<template lang="html">
	<div>
		<div class="p-3 h-100">
			<div class="border h-100 border-black slide-box" ref="slider_box" :style="'background-size: 100% 100%; background-repeat:no-repeat; background-image: url(' + $props.img + ')'">
				<Moveable v-for="postit in postits" v-bind:key="postit.id" v-bind:id="postit.id"/>
				<ImageBox v-for="image in images" v-bind:key="image.id" v-bind:img="image.img"/>
			</div>
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
		},
		props: ['nbr', 'img']
	}
</script>

<style lang="css" scoped>
	.slide-box {
	}
</style>
