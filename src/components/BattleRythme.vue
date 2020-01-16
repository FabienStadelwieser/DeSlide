<template lang="html">
    <div class="container">
        <div class="row mt-5">
            <h1 class="text-left align-content-end">Battle Rythm</h1>
            <button @click="prev_date" class="btn btn-link"><img class="ml-5" src="@/assets/left_arrow.svg"></button>
            <div class="form-group">
                <label for="date">Date</label>
                <input ref="date" id="date" class="form-control" type="text" :value="current_date" readonly>
            </div>
            <button v-on:click="next_date" class="btn btn-link"><img src="@/assets/right_arrow.svg"></button>
        </div>

        <div class="row">
            <div class="col-1 border-right">
            </div>
            <div class="col">
                <div id="dock-container" class="row mt-5">
                    <div id="dock">
                        <ul>
							<li>
								<a href="#">
									<img src="@/assets/morning.svg"/>
									<span class="text-dark">
								<b class="text-danger">0800</b> CJ Morning Update
							</span>
                                    <button v-if="new Date(this.current_date) <= new Date()"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="@/assets/eagle.svg"/>
									<span class="text-dark">
								<b class="text-danger">0900</b> COS Orientation
							</span>
                                    <button v-if="new Date(this.current_date) <= new Date()"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
								</a>
							</li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/star.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1000</b> JCBWG
							</span>
                                    <button v-if="new Date(this.current_date) <= new Date()"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/project.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1100</b> DARB
							</span>
                                    <button v-if="new Date(this.current_date) <= new Date()"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    <img src="@/assets/project.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1100</b> Log Coord WG
							</span>
                                    <button v-if="new Date(this.current_date) <= new Date()"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>
							<li>
								<router-link :to="{path: '/edit', params: { is_closed: false }}">
									<img src="@/assets/star.svg"/>
									<span class="text-dark">
								<b class="text-danger">1300</b> Decision Brief
							</span>
									<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)"
											class="btn btn-danger ml-2">Closed
									</button>
									<button v-else class="btn btn-success ml-2">On Going</button>
                                </router-link>
							</li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/project.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1300</b> AWG
							</span>
                                    <button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/project.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1300</b> Other WG <i>(On Call)</i>
							</span>
                                    <button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="@/assets/target.svg"/>
                                    <span class="text-dark">
								<b class="text-danger">1400</b> JTIOWG/CB <i>(On Call)</i>
							</span>
                                    <button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)"
                                            class="btn btn-danger ml-2">Closed
                                    </button>
                                    <button v-else class="btn btn-success ml-2">On Going</button>
                                </a>
                            </li>
							<li>
								<a href="#">
									<img src="@/assets/star.svg"/>
									<span class="text-dark">
								<b class="text-danger">1730</b> Prepa INFO BRIEF
							</span>
									<button v-if="new Date(this.current_date) <= (new Date()).setDate((new Date()).getDate() - 1)"
											class="btn btn-danger ml-2">Closed
									</button>
									<button v-else class="btn btn-success ml-2">On Going</button>
								</a>
							</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row mt-5 text-center">
                    <img id="logo-battle" src="@/assets/logo.svg">
                </div>

            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'BattleRythme',
        data: function () {
            return {
                current_date: getDate()
            }
        },
        methods: {
            next_date() {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let date = new Date(this.$refs.date.value);
                date.setDate(date.getDate() + 1);
                let year = date.getFullYear();
                let month = toTwoDigits(date.getMonth() + 1);
                let day = toTwoDigits(date.getDate());
                this.current_date = `${year}-${month}-${day}`;
            },
            prev_date() {
                const toTwoDigits = num => num < 10 ? '0' + num : num;
                let date = new Date(this.$refs.date.value);
                date.setDate(date.getDate() - 1);
                let year = date.getFullYear();
                let month = toTwoDigits(date.getMonth() + 1);
                let day = toTwoDigits(date.getDate());
                this.current_date = `${year}-${month}-${day}`;
            }
        }
    }

    function getDate() {
        const toTwoDigits = num => num < 10 ? '0' + num : num;
        let today = new Date();
        let year = today.getFullYear();
        let month = toTwoDigits(today.getMonth() + 1);
        let day = toTwoDigits(today.getDate());
        return `${year}-${month}-${day}`;
    }

</script>

<style lang="css" scoped>

	#logo-battle {
		width: 80%;
		height: 100%;
	}

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
        -webkit-transition: all 0.3s;
        -webkit-transform-origin: 50% 100%;
    }

    #dock-container li span, #dock-container li button {
        display: inline-block;
        -webkit-transition: all 0.3s;
        -webkit-transform-origin: 50% 100%;
        margin-left: 16px;
    }

    #dock-container li button {
        border-radius: 20px;
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
