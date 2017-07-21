// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
console.log(App)
Vue.config.productionTip = false

/* 引入样式 */
// import '@/assets/css/base.scss';
import '@/assets/css/index.scss';
const JQ = require('@/assets/js/jquery-1.12.2.min.js');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

