<template lang="html">
	<div id="slide-selector">
		<div class="clic-slide" v-for="slide in getSlides" :key="slide.nbr" >
			<router-link :to='"/edit/" + slide.nbr'>
				<Preview class="preview"/>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import Preview from "./Preview.vue";

export default {
	name: "SlideSelector",
	components: {
		Preview,
	},
	computed: mapGetters(["getSlides"]),
}
</script>

<style lang="css" scoped>
#slide-selector {
	background-color: #232348;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10%;
	overflow-y: scroll;
}

.clic-slide {
	background-color: #fff;
	width: 100%;
	margin-bottom: 10%;
	height: 9em;
}

.preview {
	height: 100%;
	width: 100%;
}

</style>
