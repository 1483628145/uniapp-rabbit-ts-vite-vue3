<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getCategoryList, getHomeBanner, getHotList } from '@/api/home/home'
import type { categoryItem, HomeBannerItem, hotItem } from '@/api/home/types'
import type { XtxGuessInstance } from '@/types/component'
import customNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import Pageskeleton from './components/Pageskeleton.vue'

// 轮播图数据
const bannerList = ref<HomeBannerItem[]>([])
// 分类商品数据
const categoryList = ref<categoryItem[]>([])
// 热门推荐数据
const hotList = ref<hotItem[]>([])

// 显示骨架屏
const showPageSkeleton = ref(true)
// 下拉刷新状态
const isTriggered = ref(false)
// 猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 获取轮播图数据
const getBannerData = async () => {
  const res = await getHomeBanner(1)
  bannerList.value = res.result
}

// 获取分类商品数据
const getCategoryData = async () => {
  const res = await getCategoryList()
  categoryList.value = res.result
}

// 获取热门推荐数据
const getHotData = async () => {
  const res = await getHotList()
  hotList.value = res.result
}

// 触底加载更多数据
const handleScrollToLower = () => {
  // 触发子组件获取更多猜你喜欢数据
  guessRef.value?.reqGuessList()
}

// 下拉刷新
const handleRefresh = async () => {
  isTriggered.value = true
  // 重置猜你喜欢列表
  guessRef.value?.resetGuessList()

  try {
    // 使用 Promise.all 并行请求多个接口
    await Promise.all([
      getBannerData(),
      getCategoryData(),
      getHotData(),
      guessRef.value?.reqGuessList(),
    ])
  } finally {
    isTriggered.value = false
  }
}

// 页面加载时获取页面数据
onLoad(async () => {
  // 显示骨架屏
  showPageSkeleton.value = true

  try {
    // 并行获取首页主体数据
    await Promise.all([getBannerData(), getCategoryData(), getHotData()])
  } finally {
    // 隐藏骨架屏
    showPageSkeleton.value = false
  }
})
</script>

<template>
  <!-- 导航栏 -->
  <customNavbar></customNavbar>

  <scroll-view
    class="scroll-view"
    scroll-y
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="handleRefresh"
    @scrolltolower="handleScrollToLower"
  >
    <!-- 骨架屏 -->
    <Pageskeleton v-if="showPageSkeleton"></Pageskeleton>

    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :bannerList="bannerList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :categoryList="categoryList"></CategoryPanel>
      <!-- 推荐专区 -->
      <HotPanel :hotList="hotList"></HotPanel>
      <!-- 猜你喜欢，子组件获取数据 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}

.scroll-view {
  height: 100vh;
}
</style>
