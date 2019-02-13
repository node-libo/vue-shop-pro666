import Vue from 'vue'
import App from './App'
import router from './router'

// 引入css样式全局控制
import './assets/css/global.css'

// 引入element-ui
import ElementUI from 'element-ui'

// 引入“图标库”css样式文件
import './assets/fonts/iconfont.css'

// 引入axios
import axios from 'axios'
// 给axios做配置(访问根地址，Vue之$http成员)
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
Vue.prototype.$http = axios

// 注册全部的element组件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
