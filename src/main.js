import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "./assets/icon/iconfont"

Vue.config.productionTip = false
Vue.use(Element)

import axios from './axios'
import router from './router';
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  components:{App},
  render: h => h(App),
  template : '<App/>'
})