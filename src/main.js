// with polyfills 处理浏览器兼容性 兼容es5 es6新语法
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap' // 初始化主题、样式等
import './core/lazy_use' // 引入需要的依赖插件以及组件
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import { Dialog } from '@/components'

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
