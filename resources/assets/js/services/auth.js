import Ls from './ls'
import axios from 'axios'

export default {

  login (loginData) {
    return axios.post('/api/auth/login', loginData).then(response => {
      Ls.set('auth.token', response.data.token)
    }).catch(error => {
      if (error.response.status === 401) {

      } else {
                // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
    })
  },

  logout () {
    return axios.get('/api/auth/logout').then(response => {
      Ls.remove('auth.token')
    }).catch(error => {
      console.log('Error', error.message)
    })
  },

  check () {
    return axios.get('/api/auth/check').then(response => {
      return !!response.data.authenticated
    }).catch(error => {
      console.log('Error', error.message)
    })
  }

}
