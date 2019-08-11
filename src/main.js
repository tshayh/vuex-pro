import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入移动端组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入设置rem基准值的工具
import 'amfe-flexible'
import '@/styles/index.less'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
