import Vue from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import httpUtils from '@/assets/js/httpUtils'
Vue.config.productionTip = false
Vue.use(httpUtils, { axios, qs })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
