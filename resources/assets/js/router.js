import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './vuex/store'
import auth from './vuex/modules/account/api'
Vue.use(VueRouter)

import Layout from './Layouts/Site'

// Lazy Load Routes
const Login = r => require.ensure([], () => r(require('./Pages/Login')), 'Auth')

const routes = [
  { path: '/', component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Layout,
        meta: { auth: true }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { auth: false }
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    if (!auth.check()) {
      next({
        path: 'login'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
