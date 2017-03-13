import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'babel-polyfill'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import storage from './services/ls'
Vue.use(ElementUI)
Vue.use(storage)
sync(store, router)

// When We Log In We Need to Get the Token and Store it In Local Storage
new Vue({
  localStorage: {
    token: {
      type: String
    }
  },
  methods: {
    getToken () {
      this.$localStorage.set('token', this.randomString(5))
    },
    randomString (length) {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return text
    }
  },
  router,
  store,
  mounted () {
    this.getToken()
  },
  created () {
    console.log(this.$localStorage.get('token'))
  }
}).$mount('#app')

