import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reqLogin } from '@/api/login/login'
// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 获取用户信息
    const userInfo = ref({})

    // 登陆获取
    const login = async (phoneNumber: string) => {
      const res = await reqLogin({ phoneNumber })
      userInfo.value = res.result!
    }

    // 记得 return
    return { userInfo, login }
  },
  // TODO: 持久化
  {
    persist: true,
  },
)
