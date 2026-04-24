import { http } from '@/utils/http'
import type { getCategoryListResponse } from './types'

/**
 * 分类列表接口
 * 无需传参
 */
export const getCategoryList = () => {
  return http<getCategoryListResponse[]>({
    url: '/category/top',
    method: 'GET',
  })
}
