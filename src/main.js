import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './page/App.vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
	routes: require('./config/router/router')
});

const store = new Vuex.Store({
	modules: {
		global: require('./store/global')
	}
});

new Vue({
	el: '#vue-app',
	render: h => h(App),
	router,
	store
});

