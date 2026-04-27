import { http } from '@/utils/http'
import type { LoginParams } from './types'
import type { LoginResponse } from './types'
import type { UserInfo } from './types'

/**
 * 小程序登陆
 * @param data 登陆参数：phoneNumber
 */
export const reqLogin = (data: LoginParams) => {
  return http<LoginResponse>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data,
  })
}

/**
 * 获取用户信息
 * @param data 登陆参数：token
 */
export const getUserInfo = () => {
  return http<UserInfo>({
    url: '/member/profile',
    method: 'GET',
  })
}
