import { http } from '@/utils/http'

/**
 * 商品详情接口
 * @param id 商品id
 */
export const getGoodsList = (id: string) => {
  return http({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
