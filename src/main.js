import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

//axios全局配置
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
