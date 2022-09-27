// 引入 axios
import request from '@/utils/request'

export function getValidaAPI(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}

/**
 * 登录接口
 * @param {*} data 传入对象
 * @returns promise
 */
export function loginAPI(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
