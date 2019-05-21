
import '@/static/css/common.css'
import Vue from 'vue'
import Router from 'vue-router'
import app from './app.vue'
import routes from './routers'
//基础组件
import Bcomponents from '@/components/base';

Vue.use(Router)
Vue.use(Bcomponents)

var router = new Router({
    routes
});

new Vue({
	el:'#app',
	router,
	render: h => h(app)
	}
)

