import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import account from './modules/account/store'

export default new Vuex.Store({
  modules: {
    account: account
    // modules: {
        // // Nested Module for Account
        // // Such as Settings
    // }
  }
})
