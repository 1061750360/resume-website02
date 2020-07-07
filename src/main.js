import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入Vuex
import store from './store'
import axios from 'axios'

// 导入像素风格的css库
import "nes.css/css/nes.min.css"
// 导入字体图标
import './assets/static/iconfonts/iconfont.css'
// 导入样式文件
import './assets/static/css/main.scss'
// 导入fullpage全屏插件
import VueFullpage from 'vue-fullpage.js'
Vue.use(VueFullpage)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
