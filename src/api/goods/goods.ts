import { http } from '@/utils/http'
import type { GoodsResult } from './types'

/**
 * 商品详情接口
 * @param id 商品id
 */
export const getGoodsList = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
