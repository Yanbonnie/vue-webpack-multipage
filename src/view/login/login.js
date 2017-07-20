// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from '../router'
console.log("登录页：")
console.log(App)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  // router,
  template: '<App/>',
  components: { App }
})
