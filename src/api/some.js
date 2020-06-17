import { axios } from '@/utils/request'

export function getSomeDataApi(parameter) {
  return axios({
    url: '/detail',
    method: 'get',
    params: parameter
  })
}

// export function getDetail() {
//   return axios({
//     url: api.detail,
//     method: 'post',
//     data: {}
//   })
// }
