import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import './plugins/vant.js'

// 解决移动端点击延迟300ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
