import { createSlice } from "@reduxjs/toolkit"
import { ProductsState } from "./product.types"

const INITIAL_STATE: ProductsState = {
  products: [],
  category: "all",
  isLoading: true,
}

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
      state.isLoading = false
    },
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { setProducts, setCategory } = productsSlice.actions

export const productsReducer = productsSlice.reducer
