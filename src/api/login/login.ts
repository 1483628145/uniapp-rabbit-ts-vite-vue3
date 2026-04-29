import { http } from '@/utils/http'
import type { LoginParams } from './types'
import type { LoginResponse } from './types'
import type { UserInfo } from './types'
import type { AddUserAddressParams } from './types'

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

/**
 * 修改用户资料
 * @param data 修改参数：nickname, gender, birthday, city, profession, fullLocation
 */
export const reqChangeUserInfo = (data: any) => {
  return http({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}

/**
 * 获取用户收货列表
 * @param data
 *
 */
export const reqGetUserAddressList = () => {
  return http({
    url: '/member/address',
    method: 'GET',
  })
}

/**
 * 添加用户收货地址
 * @param data
 *
 */
export const reqAddUserAddress = (data: AddUserAddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

/**
 * 获取用户收货地址详情
 * @param id
 */
export const reqGetUserAddressDetail = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}

/**
 * 删除用户收货地址
 * @param id
 */
export const reqDeleteUserAddress = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
