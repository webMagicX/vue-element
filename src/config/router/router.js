module.exports = [
	...require('./A'),
	{ path: '*', component: resovle => require(['@/page/404.vue'], resovle) }
];
