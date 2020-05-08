import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    if (error.response.status !== 200) {
      console.log(error)
      return
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  // const token = 'token'
  // if (token) {
  //   config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config
}, err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)


export {
  service as axios
}
