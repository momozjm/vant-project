import axios from 'axios'
import { errorCode } from './errorCode'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
  timeout: 6000 // 请求超时时间
})

// 在异常处理中，我们可以 根据error.response.status返回的状态码进行操作，比如接口返回401作权限操作等
const err = (error) => {
  if (error.response) {
    if (error.response.status !== 200) {
      // 接口接口返回的状态码，获取对应的提示消息
      const errorMessage = errorCode(error.response)
      console.log(errorMessage)
      return
    }
  }
  return Promise.reject(error)
}

// 请求拦截中，我们可以对请求头作处理，比如所有的请求都加一个token等
service.interceptors.request.use(config => {
  // const token = 'token'
  // if (token) {
  //   config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config
}, err)

// 返回数据拦截中，我们可以对数据做一些小小的处理，比如后端所有接口返回的数据是这种类型:{data: {...}}，那我们就可以把data这一层给过滤掉
service.interceptors.response.use((response) => {
  return response.data
}, err)


export {
  service as axios
}
