export type Cart = {
  id: number
  productImageUrl: string
  name: string
  price: number
  quantity: number
}

export type CartState = {
  cartProducts: Cart[]
}
