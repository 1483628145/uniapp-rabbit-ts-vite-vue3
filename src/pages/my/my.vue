<script setup lang="ts">
import { useMemberStore } from '@/stores'

import { http } from '@/utils/http'

const memberStore = useMemberStore()

const getApi = async () => {
  const res = await http({
    url: '/home/banner',
    method: 'GET',
  })

  console.log(res.result)
}
</script>

<template>
  <view class="my">
    <!-- 测试 -->
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getApi" size="mini" plain type="primary">请求测试</button>
  </view>
</template>

<style lang="scss">
//
</style>
