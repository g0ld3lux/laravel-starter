import api from './api'

const namespaced = true

// module state is already nested and not affected by namespace option
// Meaning in this file we can do something like state.isAdmin
const state = {
  isAdmin: false,
  firstName: null,
  lastName: null,
  email: null,
  verified: false,
  token: null
}
// First Argument will Receive State, 2nd Argument Receive other Getters
const getters = {
  isAdmin: (state) => state.isAdmin, // -> getters['account/isAdmin']
  firstName: (state) => state.firstName,
  lastName: (state) => state.lastName,
  fullName: (getters) => getters.firstName + getters.lastName,
  email: (state) => state.email,
  verified: (state) => state.verified,
  token: (state) => state.token

}
// First Argument is State, 2nd is Payload
const mutations = {
  login: (state, payload) => { // -> commit('account/login')
    state.isAdmin = payload.isAdmin
    state.firstName = payload.firstName
    state.lastName = payload.lastName
    state.email = payload.email
    state.verified = payload.verified
    state.token = payload.token
  }
}
// First Argument is Context , 2nd is Payload
// Context Args are commit , state, getters, dispatch
const actions = {
  async login ({ commit, state, getters }, params) { // -> argument destructuring from context object
    commit('login', await api.login(params))
  }

}

const module = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

export default module
