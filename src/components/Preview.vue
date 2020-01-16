<template lang="html">
	<div>
		<div class="p-3 h-100">
			<div class="border h-100 border-black slide-box" ref="slider_box" :style="'background-size: contain; background-image: url(' + getImg() + ')'">
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
		methods: {
			getImg() {
				if (this.$store.state.currentSlide > 0) {
					for (var i = 0; i < this.$store.state.slide.length; i++) {
						if (this.$store.state.slide[i].nbr === this.$store.state.currentSlide) {
							return this.$store.state.slide[i].img
						}
					}
				} else {
					return this.$attrs.img
				}
			}
		}
	}
</script>

<style lang="css" scoped>
	.slide-box {
	}
</style>
