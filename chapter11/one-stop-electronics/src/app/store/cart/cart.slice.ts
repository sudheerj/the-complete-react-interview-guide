import { createSlice } from "@reduxjs/toolkit"
import { CartState, Cart } from "./cart.types"
import { Product } from "@/app/store/product/product.types"

const existingProduct = (cartProducts: Cart[], product: Product) =>
  cartProducts.find((cartProduct) => cartProduct.id === product.id)

const addProduct = (cartProducts: Cart[], productToAdd: Product): Cart[] => {
  if (existingProduct(cartProducts, productToAdd)) {
    return cartProducts.map((product) =>
      product.id === productToAdd.id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    )
  }

  return [...cartProducts, { ...productToAdd, quantity: 1 }]
}

const removeProduct = (
  cartProducts: Cart[],
  productToRemove: Product,
): Cart[] => {
  const existingProductItem = existingProduct(cartProducts, productToRemove)

  if (existingProductItem && existingProductItem.quantity === 1) {
    return cartProducts.filter(
      (cartProduct) => cartProduct.id !== productToRemove.id,
    )
  }

  return cartProducts.map((cartProduct) =>
    cartProduct.id === productToRemove.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct,
  )
}

const clearProduct = (cartProducts: Cart[], productToClear: Product): Cart[] =>
  cartProducts.filter((cartProduct) => cartProduct.id !== productToClear.id)

const INITIAL_STATE: CartState = {
  cartProducts: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addProductToCart(state, action) {
      state.cartProducts = addProduct(state.cartProducts, action.payload)
    },
    removeProductFromCart(state, action) {
      state.cartProducts = removeProduct(state.cartProducts, action.payload)
    },
    clearProductFromCart(state, action) {
      state.cartProducts = clearProduct(state.cartProducts, action.payload)
    },
    resetCartProducts(state) {
      state.cartProducts = []
    },
  },
})

export const {
  addProductToCart,
  removeProductFromCart,
  clearProductFromCart,
  resetCartProducts,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
