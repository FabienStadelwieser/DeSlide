<template lang="html">
    <div>
        <nav id="toolbar" class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-2">
                    <li v-bind:class="{'badge-success': !is_closed, 'badge-danger': is_closed}"
						class="nav-item badge badge-pill p-2">
						<div class="row">
							<div class="col m-auto">
								<p v-show="!is_closed" class="m-auto">On Going</p>
								<p v-show="is_closed" class="m-auto">Closed</p>
							</div>
							<div class="col m-auto">
								<label class="switch">
									<input type="checkbox" v-model="is_closed">
									<span class="slider round"></span>
								</label>
							</div>
						</div>
                    </li>
                </ul>
            </div>
			<div class="collapse navbar-collapse">
				<h5 class="text-light m-auto">{{ this.date_mili }}</h5>
			</div>
            <div class="collapse navbar-collapse float-right" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/disquette.svg" class="toolbar-icon" title="Save">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/jocwatch.svg" class="toolbar-icon" title="JocWatch">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/carto.svg" class="toolbar-icon" title="Carto">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/search.svg" class="toolbar-icon" title="Search">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#">
                            <img src="@/assets/play.svg" class="toolbar-icon" title="Present">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navbar-brand" href="#" v-on:click="addPostIt">
                            <img src="@/assets/postit.svg" class="toolbar-icon" title="Append a post-it on this slide">
                        </a>
                    </li>
                    <li class="nav-item dropdown notifications">
                        <a class="navbar-brand" href="#" id="navbarDropdownNotifications" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="@/assets/notifications.svg" class="toolbar-icon" alt=""><span
                                class="badge badge-light"
                                ref="notifications_badge">{{ this.notifications_count }}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" id="dropdown-notifications"
                             aria-labelledby="navbarDropdownNotifications">
                            <div class="list-group-flush" v-show="notifications_count > 0">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1"><b>pierre.demont</b> said <span
                                                class="font-weight-bold bg-danger text-light p-1">@antoine.payan</span>
                                        </h6>
                                        <small>10 minutes ago</small>
                                    </div>
                                    <p class="mb-1">
                                        Manque attitude population
                                    </p>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1"><b>pierre.demont</b> said <span
                                                class="font-weight-bold bg-danger text-light p-1">@antoine.payan</span>
                                        </h6>
                                        <small>1 hour ago</small>
                                    </div>
                                    <p class="mb-1">Précise situation Nedex STP</p>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1"><b>pierre.demont</b> said <span
                                                class="font-weight-bold bg-danger text-light p-1">@antoine.payan</span>
                                        </h6>
                                        <small>1 hour ago</small>
                                    </div>
                                    <p class="mb-1">Je ne vois pas le potentiel des S300 à l’ouest de L1</p>
                                </a>
                                <button @click="toggleNotifications"
                                        class="list-group-item list-group-item-action text-center text-success">
                                    Remove notifications
                                </button>
                            </div>
                            <div class="text-center" v-show="notifications_count === 0">
                                <p>No new notifications</p>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="navbar-brand" href="#" id="navbarDropdownMenu" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <img src="@/assets/menu.svg" class="toolbar-icon" alt="">
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenu">
                            <a class="dropdown-item" href="#">Import</a>
                            <a class="dropdown-item" href="#">Export</a>
                            <a class="dropdown-item" href="#">Template</a>
                            <a class="dropdown-item" href="#">JOC Watch</a>
                            <a class="dropdown-item" href="#">COP</a>
                            <a class="dropdown-item" href="#">Post-it</a>
                            <a class="dropdown-item" href="#">Save</a>
                            <a class="dropdown-item" href="#">Save as</a>
                            <a class="dropdown-item" href="#">Print</a>
                            <div class="dropdown-divider"></div>
                            <router-link class="dropdown-item" :to="{ path: '/battle_rythme' }">
                                <a><b>Quit</b></a>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Toolbar',
        data() {
            return {
                notifications_count: 3,
				date_mili: this.getDateMili(),
				is_closed: this.$route.query.is_closed
            }
        },
        methods: {
            toggleNotifications: function () {
                this.notifications_count = Math.abs(this.notifications_count - 3)
            },
			getDateMili() {
				let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				const toTwoDigits = num => num < 10 ? '0' + num : num;
				let today = new Date();
				let year = today.getFullYear().toString().substring(2);
				let month = today.getMonth();
				let day = toTwoDigits(today.getDate());
				return `${day}${toTwoDigits(month + 1)}${year}Z ${shortMonths[month].toUpperCase()}${year}`;
			},
            addPostIt() {
                this.$parent.addPostIt();
            }
        }
    }
</script>

<style lang="css" scoped>
    #toolbar {
        width: auto;
        background-color: #232348;
        padding: 0;
        height: 70px;
    }

    .toolbar-icon {
        width: 30px;
        height: 30px;
        margin: 0 5px;
    }

    .dropdown-menu#dropdown-notifications {
        width: 400px;
    }

    .dropdown.notifications {

    }

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 24px;
		margin-bottom: 0;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider {
		background-color: #ccc;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #ccc;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
