import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'
import  store from './store/store.js'
import VueProgressBar from 'vue-progressbar'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})


new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})