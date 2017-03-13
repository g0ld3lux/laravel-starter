import lodash from 'lodash'
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Ls from './services/localstorage'
import Vuex from 'vuex'
import Jquery from 'jquery'
import 'bootstrap-sass'
import storage from './services/ls'

window._ = lodash
window.Vue = Vue
window.router = VueRouter
window.axios = axios
window.vuex = Vuex
window.$ = Jquery
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(storage)

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
  const AUTH_TOKEN = Ls.get('auth.token')

  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }

  return config
}, function (error) {
    // Do something with request error
  return Promise.reject(error)
})
