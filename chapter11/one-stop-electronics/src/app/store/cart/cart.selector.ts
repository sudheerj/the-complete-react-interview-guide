import { createSelector } from "reselect"
import { RootState } from "@/app/store/store"
import { CartState } from "./cart.types"

const selectCartReducer = (state: RootState): CartState => state.cart

export const selectCartProducts = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartProducts,
)

export const selectCartTotalPrice = createSelector(
  [selectCartProducts],
  (cartProducts): number =>
    cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.quantity * cartProduct.price,
      0,
    ),
)

export const selectCartProductsCount = createSelector(
  [selectCartProducts],
  (cartProducts): number =>
    cartProducts.reduce(
      (total, cartProduct) => total + cartProduct.quantity,
      0,
    ),
)
