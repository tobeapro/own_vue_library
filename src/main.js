import Vue from 'vue'
import '@/assets/common.css'
import vk from '@/components/'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import httpUtils from '@/assets/js/httpUtils'
Vue.config.productionTip = false
Vue.use(vk)
Vue.use(httpUtils, { axios, qs })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
