import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '@/api/login/login'
import type { LoginResponse } from '@/api/login/types'
// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 获取用户信息
    const profile = ref<LoginResponse>({} as LoginResponse)

    // 登陆获取
    const login = async (phoneNumber: string) => {
      const res = await reqLogin({ phoneNumber })
      profile.value = res.result!
      // 本地存储一下token
      uni.setStorageSync('token', profile.value.token)
      // 提示登陆成功
      uni.showToast({
        title: '登陆成功',
        icon: 'success',
      })
      // 跳转到首页
      uni.switchTab({
        url: '/pages/my/my',
      })
    }

    // 清除登陆 清除本地token 和 profile 中的用户信息
    const clearProfile = () => {
      profile.value = {} as LoginResponse
      uni.removeStorageSync('token')
    }

    // 记得 return
    return { profile, login, clearProfile }
  },
  // TODO: 持久化
  {
    persist: true,
  },
)
