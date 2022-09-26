import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
//导入全局样式表
import './assets/css/global.css'
import './plugins/element.js'

Vue.config.productionTip = false
//配置请求的默认路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1'
Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
