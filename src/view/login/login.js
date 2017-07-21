// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Login.vue'
// import router from '../router'
Vue.config.productionTip = false
console.log(App)
const JQ = require('@/assets/js/jquery-1.12.2.min.js');
/* eslint-disable no-new */
new Vue({
    el: '#login',
    // router,
    template: '<App/>',
    components: { App }
})

