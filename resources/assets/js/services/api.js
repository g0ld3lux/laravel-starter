import axios from 'axios'

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

export default {

  get (url, request) {
    return axios.get(url, request)
            .then((response) => Promise.resolve(response.body.data))
            .catch((error) => Promise.reject(error))
  },
  post (url, request) {
    return axios.post(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
  },
  patch (url, request) {
    return axios.patch(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
  },
  put (url, request) {
    return axios.put(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
  },
  delete (url, request) {
    return axios.delete(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
  },
  head (url, request) {
    return axios.head(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
  }
}
