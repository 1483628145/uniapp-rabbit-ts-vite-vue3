import { http } from '@/utils/http'
import type { hotParams } from './types'
import type { hotResponse } from './types'

/**
 * 推荐-热门推荐
 * @param Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
 */
export const getHot = (url: string, data?: hotParams) => {
  return http<hotResponse>({
    url,
    method: 'GET',
    data,
  })
}
