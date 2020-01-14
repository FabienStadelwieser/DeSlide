<template lang="html">
	<div class="container">
		<div class="row">
			<h1 class="text-left align-content-end">Battle Rythm</h1>
			<button @click="prev_date" class="btn btn-link"><img class="ml-5" src="@/assets/left_arrow.svg"></button>
			<div class="form-group">
				<label for="date">Date</label>
				<input ref="date" id="date" class="form-control" type="text" :value="current_date" readonly>
			</div>
			<button v-on:click="next_date" class="btn btn-link"><img src="@/assets/right_arrow.svg"></button>
		</div>

		<div id="dock-container" class="row mt-5">
			<div id="dock">
				<ul>
					<li>
						<a href="#">
							<img src="@/assets/cyber.svg"/>
							<span class="text-dark">
								<b class="text-danger">10:00 am</b> Cyber WG
							</span>
							<button v-if="new Date(this.current_date) <= new Date()" class="btn btn-danger ml-2">Closed</button>
							<button v-else class="btn btn-success ml-2">On Going</button>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="@/assets/star.svg" />
							<span class="text-dark">
								<b class="text-danger">10:30 am</b> Decision Brief
							</span>
							<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)" class="btn btn-danger ml-2">Closed</button>
							<button v-else class="btn btn-success ml-2">On Going</button>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="@/assets/morning.svg"/>
							<span class="text-dark">
								<b class="text-danger">11:00 am</b> CJ Morning Update
							</span>
							<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)" class="btn btn-danger ml-2">Closed</button>
							<button v-else class="btn btn-success ml-2">On Going</button>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="@/assets/target.svg"/>
							<span class="text-dark">
								<b class="text-danger">11:45 am</b> JTIOWG/CB
							</span>
							<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)" class="btn btn-danger ml-2">Closed</button>
							<button v-else class="btn btn-success ml-2">On Going</button>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="@/assets/project.svg"/>
							<span class="text-dark">
								<b class="text-danger">12:30 am</b> Log Coord WG
							</span>
							<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)" class="btn btn-danger ml-2">Closed</button>
							<button v-else class="btn btn-success ml-2">On Going</button>
						</a>
					</li>
				</ul>
			</div>
		</div>

	</div>

</template>

<script>

export default {
	name: 'BattleRythme',
	data: function() {
		return {
			current_date: getDate()
		}
	},
	methods: {
		next_date() {
			const toTwoDigits = num => num < 10 ? '0' + num : num;
			let date = new Date(this.$refs.date.value);
			let year = date.getFullYear();
			let month = toTwoDigits(date.getMonth() + 1);
			let day = toTwoDigits(date.getDate() + 1);
			this.current_date = `${year}-${month}-${day}`;
		},
		prev_date() {
			const toTwoDigits = num => num < 10 ? '0' + num : num;
			let date = new Date(this.$refs.date.value);
			let year = date.getFullYear();
			let month = toTwoDigits(date.getMonth() + 1);
			let day = toTwoDigits(date.getDate() - 1);
			this.current_date = `${year}-${month}-${day}`;
		}
	}
}

function getDate () {
	const toTwoDigits = num => num < 10 ? '0' + num : num;
	let today = new Date();
	let year = today.getFullYear();
	let month = toTwoDigits(today.getMonth() + 1);
	let day = toTwoDigits(today.getDate());
	return `${year}-${month}-${day}`;
}

</script>

<style lang="css" scoped>

	#dock-container ul {
		text-align: left;
	}

	#dock-container li {
		list-style-type: none;
		display: block;
		position: relative;
		margin-bottom: 40px;
	}
	#dock-container li img {
		width: 48px;
		height: 48px;
		-webkit-box-reflect: below 2px
		-webkit-gradient(linear, left top, left bottom, from(transparent),
				color-stop(0.7, transparent), to(rgba(255,255,255,.5)));
		-webkit-transition: all 0.3s;
		-webkit-transform-origin: 50% 100%;
	}

	#dock-container li span, #dock-container li button {
		display: inline-block;
		-webkit-transition: all 0.3s;
		-webkit-transform-origin: 50% 100%;
		margin-left: 16px;
	}

	#dock-container li:hover img {
		-webkit-transform: scale(2);
		margin: 0 1.5em;
	}

	#dock-container li:hover + li img,
	#dock-container li.prev img {
		-webkit-transform: scale(1);
		margin: 0 1em;
	}

</style>
