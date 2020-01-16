<template lang="html">
	<div id="slide-selector">
		<div class="mb-3 border-bottom border-light w-100 text-center">

			<div class="dropdown btn-group">
				<button
						class="text-decoration-none btn btn-link text-center text-white font-weight-bold"
						data-toggle="dropdown">
					<span class="h2">+</span>
				</button>

				<ul class="dropdown-menu" style="margin: 0;">
					<li class="p-2">
						<button class="btn" @click="pushSlide">
							<div class="m-auto" style="height: 100px; width: 8rem">
								<img src="@/assets/t1.svg" style="width: inherit">
							</div>
						</button>
					</li>
					<li class="p-2">
						<button class="btn" @click="pushSlide">
							<div class="m-auto" style="height: 100px; width: 8rem">
								<img src="@/assets/t2.svg" style="width: inherit">
							</div>
						</button>
					</li>
					<li class="p-2">
						<button class="btn" @click="pushSlide">
							<div class="m-auto" style="height: 100px; width: 8rem">
								<img src="@/assets/t3.svg" style="width: inherit">
							</div>
						</button>
					</li>
				</ul>

			</div>
		</div>
		<div class="p-4 w-100">
			<div class="clic-slide" v-for="slide in getSlides" :key="slide.nbr" >
				<router-link @click="setCurrent" :to='"/edit/" + slide.nbr'>
					<Preview class="preview" v-bind:img='slide.img'/>
				</router-link>
			</div>
		</div>

	</div>
</template>

<script>
	import {mapGetters} from "vuex";
	import Preview from "./Preview.vue";

export default {
	name: "SlideSelector",
	components: {
		Preview,
	},
	computed: {
		...mapGetters(["getSlides"])
	},
	methods: {
		pushSlide: function (event) {
			this.$store.commit('addSlide', {
				nbr: this.$store.state.slide.length + 1,
				img: event.target.src
			})
		},
		setCurrent: function (event) {
			event;
			this.$store.commit('changeSelected', 1)
		}
	}
}
</script>

<style lang="css" scoped>
#slide-selector {
	background-color: #232348;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
}

.clic-slide {
	background-color: #fff;
	width: 100%;
	margin-bottom: 10%;
	height: 7.7em;
}

.preview {
	height: 100%;
	width: 100%;
}

.dropdown-menu {
	left: 50%;
	right: auto;
	text-align: center;
	transform: translate(-50%, 0);
}

</style>
