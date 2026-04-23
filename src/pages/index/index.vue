<script setup lang="ts">
import customNavbar from './components/CustomNavbar.vue'
import { getHomeBanner } from '@/api/home/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 轮播图数据
const bannerList: any = ref([])

// 页面加载时获取轮播图数据
onLoad(async () => {
  const res = await getHomeBanner(1)
  bannerList.value = res.result
})
</script>

<template>
  <!-- 导航条 -->
  <customNavbar></customNavbar>
  <!-- 轮播图 -->
  <XtxSwiper :bannerList="bannerList"></XtxSwiper>
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
