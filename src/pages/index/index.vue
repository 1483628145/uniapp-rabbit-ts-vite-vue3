<script setup lang="ts">
import customNavbar from './components/CustomNavbar.vue'
import { getHomeBanner } from '@/api/home/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { HomeBannerItem } from '@/api/home/types'
import CategoryPanel from './components/CategoryPanel.vue'
import type { categoryItem } from '@/api/home/types'
import { getCategoryList } from '@/api/home/home'
import HotPanel from './components/HotPanel.vue'
import type { hotItem } from '@/api/home/types'
import { getHotList } from '@/api/home/home'

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

// 热门推荐数据 类型为hotItem
const hotList = ref<hotItem[]>([])

// 页面加载时获取热门推荐数据
onLoad(async () => {
  const res = await getHotList()
  hotList.value = res.result
})

console.log(hotList.value)
</script>

<template>
  <!-- 导航条 -->
  <customNavbar></customNavbar>
  <!-- 轮播图 -->
  <XtxSwiper :bannerList="bannerList"></XtxSwiper>
  <!-- 分类面板 -->
  <CategoryPanel :categoryList="categoryList"></CategoryPanel>
  <!-- 推荐专区 -->
  <HotPanel :hotList="hotList"></HotPanel>
</template>

<style lang="scss">
// 页面背景颜色
page {
  background-color: #f7f7f7;
}
</style>
