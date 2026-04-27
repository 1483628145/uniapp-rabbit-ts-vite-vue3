import { http } from '@/utils/http'
import type { LoginParams } from './types'

/**
 * 小程序登陆
 * @param data 登陆参数：phoneNumber
 */
export const reqLogin = (data: LoginParams) => {
  return http({
    url: '/login/wxMin/simple',
    method: 'POST',
    data,
  })
}
