
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLocalStorage from './services/ls'
import 'babel-polyfill'

Vue.use(ElementUI)
Vue.use(VueLocalStorage)

new Vue({
  localStorage: {
    auth: {
      type: Boolean,
      default: false
    }
  },
  el: '#app',
  render: h => h(App)
})
