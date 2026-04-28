/*
登陆请求参数
*/

export interface LoginParams {
  phoneNumber: string
}

// 登陆响应参数
export interface LoginResponse {
  id: number
  mobile: string
  token: string
  nickname: string
  avatar: string
  account: string
}

// 用户信息
export interface UserInfo {
  id: number
  avatar: string
  nickname: string
  account: string
  gender: string
  birthday: string
  fullLocation: string
  profession: string
}

/*
用户添加收货地址请求参数
*/
export interface AddUserAddressParams {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
}
