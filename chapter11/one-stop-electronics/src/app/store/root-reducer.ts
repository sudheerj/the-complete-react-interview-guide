import { combineReducers } from "redux"

import { userReducer } from "./user/user.slice"
import { productsReducer } from "./product/product.slice"
import { cartReducer } from "./cart/cart.slice"

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
})
