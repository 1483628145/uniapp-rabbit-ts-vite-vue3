// 首页-分类商品接口响应参数
export interface hotParams {
  subType?: string
  pageSize: number
  page: number
}

// 首页-热门推荐接口响应参数
export interface hotResponse {
  title: string
  id: string
  bannerPicture: string
  subTypes: {
    id: string
    title: string
    goodsItems: {
      items: {
        desc: string
        id: string
        name: string
        picture: string
        price: string
      }[]
      counts: number
      pages: string
      page: string
      pageSize: string
    }
  }[]
  pages: number
}
