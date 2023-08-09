import {
  cartReducer,
  clearProductFromCart,
  removeProductFromCart,
  resetCartProducts,
} from "./cart.slice"
import { CartState } from "./cart.types"
import { Cart } from "./cart.types"
import { addProductToCart } from "./cart.slice"

describe("Cart Reducer", () => {
  const initialState: CartState = {
    cartProducts: [],
  }

  it("Should handle adding or incrementing products quantity inside cart", () => {
    const productToAdd: Cart = {
      id: 1,
      productImageUrl: "someurl.com",
      name: "Inspiron 15",
      price: 1200,
      quantity: 1,
    }
    const state = cartReducer(initialState, addProductToCart(productToAdd))
    expect(state.cartProducts.length).toEqual(1)
  })

  it("Should handle removing or decreasing products quantity inside cart", () => {
    const productToRemove: Cart = {
      id: 1,
      productImageUrl: "someurl.com",
      name: "Inspiron 15",
      price: 1200,
      quantity: 1,
    }
    const state = cartReducer(
      initialState,
      removeProductFromCart(productToRemove),
    )
    expect(state.cartProducts.length).toEqual(0)
  })

  it("Should handle clearing products from cart", () => {
    const initialState = {
      cartProducts: [
        {
          id: 2,
          productImageUrl: "someurl.com",
          name: "Apple Macbook",
          price: 1700,
          quantity: 2,
        },
        {
          id: 3,
          productImageUrl: "someurl.com",
          name: "Lenovo Thinkpad",
          price: 900,
          quantity: 2,
        },
      ],
    }

    const productToClear: Cart = {
        id: 2,
        productImageUrl: "someurl.com",
        name: "Apple Macbook",
        price: 1700,
        quantity: 1,
    }

    const state = cartReducer(initialState, clearProductFromCart(productToClear))
    expect(state.cartProducts.length).toEqual(1);
  })

  it("Should handle resetting cart products", () => {
    const state = cartReducer(initialState, resetCartProducts())
    expect(state.cartProducts.length).toEqual(0);
  })
})
