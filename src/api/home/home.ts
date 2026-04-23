// 首页轮播图接口
import { http } from '../../utils/http'
import type { HomeBannerItem } from './types'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBanner = (distributionSite = 1) => {
  return http<HomeBannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
