export interface getCategoryListResponse {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: {
    id: string
    name: string
    picture: string
    parentId: string
    parentName: string

    goods: {
      id: string
      name: string
      desc: string
      price: string
      discount: string
      orderNum: number
      picture: string
    }[]
  }[]
}
