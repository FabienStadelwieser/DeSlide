import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'

import Login from './components/Login.vue'
import BattleRythme from './components/BattleRythme.vue'
import Editor from './components/Editor.vue'
import FinalView from './components/FinalView.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/', component: Login },
		{ path: '/battle_rythme', component: BattleRythme },
		{ path: '/edit', component: Editor },
		{ path: '/view', component: FinalView },
		{ path: '*', component: Login }
	],
	mode: 'history'
})

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		slide: [
			{
				nbr: 1,
				img: '/slide1.png'
			}
		],
		currentSlide: 1
	},
	getters: {
		getSlides(state) {
			return state.slide;
		},
		getSelectedSlide(state) {
			return state.slide[state.currentSlide - 1];
		},
		getSpecificSlide(state, id) {
			return state.slide[id];
		},
		getId(state) {
			return state.currentSlide;
		}
	},
	mutations: {
		addSlide(state, newSlide) {
			state.slide.push(newSlide);
		},
		changeSelected(state, newId) {
			state.currentSlide = newId
		},
		modifCurrentSlide(state, slide) {
			state.slide[state.currentSlide - 1] = slide;
		},
	},
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
