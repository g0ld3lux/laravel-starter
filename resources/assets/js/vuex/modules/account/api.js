import request from '../../../services/api'

export default {
  login (params) {
    return request.post(params.url, { params })
  },
  logout (url) {
    return request.get(url)
  },
  signup (params) {
    return request.post(params.url, { params })
  },
  recover (params) {
    return request.post(params.url, { params })
  },
  reset (params) {
    return request.post(params.url, { params })
  }
}
