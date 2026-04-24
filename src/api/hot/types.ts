// 首页-分类商品接口响应参数
export interface hotParams {
  subType: string
  pageSize: string
  page: string
}

// 首页-热门推荐接口响应参数
export interface hotResponse {
  title: string
  id: string
  bannerPicture: string
  subTypes: subTypes
}

export interface subTypes {
  id: string
  title: string
  goodsItems: goodsItems
}

export interface goodsItems {
  items: items
  counts: number
  pages: string
  page: string
  pageSize: string
}

export interface items {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
