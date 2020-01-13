import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Login from './components/login.vue'
import BattleRythme from './components/battle_rythme.vue'
import Editor from './components/editor.vue'
import FinalView from './components/final_view.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
	routes: [
		{ path: '/', component: Login },
		{ path: '/battle_rythme', component: BattleRythme },
		{ path: '/edit/:slide', component: Editor },
		{ path: '/edit', component: Editor },
		{ path: '/view', component: FinalView },
		{ path: '*', component: Login }
	],
	mode: 'history'
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
