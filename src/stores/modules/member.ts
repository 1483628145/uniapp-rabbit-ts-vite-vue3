import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息 token
    const profile = ref<any>(uni.getStorageSync('memberProfile'))

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
      // 配置数据持久化
      uni.setStorageSync('memberProfile', val)
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
      // 清除数据持久化
      uni.removeStorageSync('memberProfile')
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    persist: true,
  },
)
