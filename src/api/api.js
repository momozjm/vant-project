import { axios } from '@/utils/request'

const api = {
  // 获取详情
  detail: '/detail'
}

export function getDetailApi(parameter) {
  console.log(parameter)
  return axios({
    url: api.detail,
    method: 'get'
  })
}

// export function getDetail() {
//   return axios({
//     url: api.detail,
//     method: 'post',
//     data: {}
//   })
// }
