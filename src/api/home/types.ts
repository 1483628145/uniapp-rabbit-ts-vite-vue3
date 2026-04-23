// 首页轮播图接口响应参数
export interface HomeBannerItem {
  hrefUrl: string
  id: string
  imgUrl: string
  type: number
}

// 首页-分类商品接口响应参数
export interface categoryItem {
  id: string
  name: string
  icon: string
}

// 首页-热门推荐接口响应参数
export interface hotItem {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

// 首页-品牌制造商接口响应参数
export interface brandItem {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}

//  首页-猜你喜欢接口响应参数
export interface guessResponse {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: brandItem[]
}

// 首页 - 猜你喜欢请求接口参数
export interface guessParams {
  page?: number
  pageSize?: number
}
