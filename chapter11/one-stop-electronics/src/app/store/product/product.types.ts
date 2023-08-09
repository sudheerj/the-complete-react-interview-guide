export type Product = {
  id: number
  productImageUrl: string
  name: string
  brand: string
  price: number
  category: string
}

export type ProductsState = {
  products: Product[]
  category: string
  isLoading: boolean
}

export type ProductMap = {
  [key: string]: Product[]
}
