<script setup lang="ts">
import customNavbar from './components/CustomNavbar.vue'
import { getHomeBanner } from '@/api/home/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { HomeBannerItem } from '@/api/home/types'
import CategoryPanel from './components/CategoryPanel.vue'
import type { categoryItem } from '@/api/home/types'
import { getCategoryList } from '@/api/home/home'

// 轮播图数据 类型为HomeBannerItem
const bannerList = ref<HomeBannerItem[]>([])

// 页面加载时获取轮播图数据
onLoad(async () => {
  const res = await getHomeBanner(1)
  bannerList.value = res.result
})

// 分类商品数据 类型为categoryItem
const categoryList = ref<categoryItem[]>([])

// 页面加载时获取分类商品数据
onLoad(async () => {
  const res = await getCategoryList()
  categoryList.value = res.result
})
</script>

<template>
  <!-- 导航条 -->
  <customNavbar></customNavbar>
  <!-- 轮播图 -->
  <XtxSwiper :bannerList="bannerList"></XtxSwiper>
  <CategoryPanel :categoryList="categoryList"></CategoryPanel>
  <view class="index">index</view>
</template>

<style lang="scss">
// 页面背景颜色
page {
  background-color: #f7f7f7;
}
</style>
