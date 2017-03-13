import axios from 'axios'

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

export default {
  login (params) {
    return axios.post(params.url, { params })
  },
  signup (params) {
    return axios.post(params.url, { params })
  },
  recover (params) {
    return axios.post(params.url, { params })
  },
  reset (params) {
    return axios.post(params.url, { params })
  },
  async check () {
    const response = await axios.create({
      baseURL: 'https://api.laravel.dev/auth/check',
      method: 'GET'
    }).data
    return response
  },
  logout (url) {
    return axios.get(url)
  }
}
