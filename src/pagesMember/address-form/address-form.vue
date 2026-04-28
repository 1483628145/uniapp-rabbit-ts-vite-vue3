<script setup lang="ts">
import { ref } from 'vue'
import { reqAddUserAddress } from '@/api/login/login'
import { reqGetUserAddressDetail } from '@/api/login/login'
import { onLoad } from '@dcloudio/uni-app'

// 表单数据
const form: any = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})

// 所在城市
const handleRegionChange = (e: any) => {
  // 使用join方法将数组转换为字符串拼接到一起，中间用空格隔开
  form.value.fullLocation = e.detail.value.join(' ')
  // 获取省市区编码 并保存到表单数据中
  const [provinceCode, cityCode, countyCode] = e.detail.code
  // 赋值给表单数据
  Object.assign(form.value, {
    provinceCode,
    cityCode,
    countyCode,
  })
}

// 默认地址
const handleDefaultChange = (e: any) => {
  if (e.detail.value) {
    form.value.isDefault = 1
  } else {
    form.value.isDefault = 0
  }
}

/*
提交数据
*/
const handleSubmit = async () => {
  await reqAddUserAddress(form.value)
  // 提示成功
  uni.showToast({
    title: '添加成功',
    icon: 'success',
  })
  // 跳转回地址列表页
  uni.navigateBack()
}

/*
判断是否是有id
*/
const { id } = defineProps(['id'])

const getAddressDetail = async () => {
  const res = await reqGetUserAddressDetail(id)
  form.value = res.result
}

onLoad(() => {
  getAddressDetail()
})
</script>

<template>
  <view class="content">
    <form>
      <!-- 表单内容 -->
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker
          @change="handleRegionChange"
          class="picker"
          mode="region"
          :value="form.fullLocation"
        >
          <view v-if="form.fullLocation">{{ form.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch @change="handleDefaultChange" class="switch" color="#27ba9b" :checked="true" />
      </view>
    </form>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="handleSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
