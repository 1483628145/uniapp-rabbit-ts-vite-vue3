<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getGuessList } from '@/api/home/home'
import type { brandItem, guessParams } from '@/api/home/types'

// 猜你喜欢列表
const guessList = ref<brandItem[]>([])
// 是否正在加载，避免重复触发触底时并发请求
const loading = ref(false)
// 是否已经加载完全部数据
const finished = ref(false)

// 分页参数
const getListParams: Required<guessParams> = {
  page: 1,
  pageSize: 10,
}

// 获取猜你喜欢列表
const reqGuessList = async () => {
  // 已经在请求中，或者已经没有更多数据时，直接拦截
  if (loading.value || finished.value) return

  loading.value = true

  try {
    const res = await getGuessList(getListParams)

    guessList.value.push(...res.result.items)

    // 当前页已经到最后一页，标记结束，后续不再发请求
    if (getListParams.page >= res.result.pages) {
      finished.value = true
      uni.showToast({
        title: '没有更多数据了',
        icon: 'none',
      })
      return
    }

    getListParams.page++
  } finally {
    loading.value = false
  }
}

// 重置猜你喜欢列表
const resetGuessList = () => {
  guessList.value = []
  getListParams.page = 1
  finished.value = false
}

onLoad(() => {
  reqGuessList()
})

defineExpose({
  reqGuessList,
  resetGuessList,
})
</script>

<template>
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>

  <view class="guess">
    <navigator
      v-for="item in guessList"
      :key="item.id"
      class="guess-item"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">{{ item.name }}</view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>

  <view class="loading-text">
    {{ finished ? '没有更多数据了' : loading ? '正在加载...' : '上拉加载更多' }}
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}

.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      margin: 0 10rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
    }
  }
}

.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;

  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .image {
    width: 304rpx;
    height: 304rpx;
  }

  .name {
    display: -webkit-box;
    height: 75rpx;
    margin: 10rpx 0;
    overflow: hidden;
    font-size: 26rpx;
    color: #262626;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    line-height: 1;
    padding-top: 4rpx;
    font-size: 26rpx;
    color: #cf4444;
  }

  .small {
    font-size: 80%;
  }
}

.loading-text {
  padding: 20rpx 0;
  font-size: 28rpx;
  color: #666;
  text-align: center;
}
</style>
