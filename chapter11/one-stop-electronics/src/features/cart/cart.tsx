import { FormattedMessage, FormattedNumber } from "react-intl"
import { useAppSelector } from "@/app/store/hooks"
import {
  selectCartProducts,
  selectCartTotalPrice,
} from "@/app/store/cart/cart.selector"
import {
  clearProductFromCart,
  addProductToCart,
  removeProductFromCart,
} from "@/app/store/cart/cart.slice"
import { Cart } from "@/app/store/cart/cart.types"
import { useAppDispatch } from "@/app/store/hooks"
import MyButton from "@/components/button/button"
import { ReactComponent as PlusCartProduct } from "@/assets/plus.svg"
import { ReactComponent as MinusCartProduct } from "@/assets/minus.svg"
import { ReactComponent as ClearCartProduct } from "@/assets/clear.svg"
import {
  CartContainer,
  CartItemContainer,
  ProductImageContainer,
  QuantityContainer,
  IconContainer,
  FieldContainer,
  EmptyCartContainer,
  CartFooterContainer,
} from "./cart.styles"

const CartProducts = () => {
  const cartProducts = useAppSelector(selectCartProducts)
  const cartProductsTotalCost = useAppSelector(selectCartTotalPrice)
  const dispatch = useAppDispatch()

  const clearCartProduct = (cartProduct: Cart) =>
    dispatch(clearProductFromCart(cartProduct))
  const addCartProduct = (cartProduct: Cart) =>
    dispatch(addProductToCart(cartProduct))
  const removeCartProduct = (cartProduct: Cart) =>
    dispatch(removeProductFromCart(cartProduct))
    
  return (
    <CartContainer>
      {cartProducts &&
        cartProducts.map((cartProduct) => {
          const { id, productImageUrl, name, quantity, price } = cartProduct
          return (
            <CartItemContainer key={id}>
              <ProductImageContainer>
                <img src={productImageUrl} alt={`${name}`} />
              </ProductImageContainer>
              <FieldContainer>
                <span>{name}</span>
              </FieldContainer>
              <QuantityContainer>
                <IconContainer onClick={() => addCartProduct(cartProduct)}>
                  <PlusCartProduct></PlusCartProduct>
                </IconContainer>
                <div>{quantity}</div>
                <IconContainer onClick={() => removeCartProduct(cartProduct)}>
                  <MinusCartProduct></MinusCartProduct>
                </IconContainer>
              </QuantityContainer>
              <FieldContainer>
                <FormattedNumber
                  value={quantity * price}
                  style="currency"
                  currency="USD"
                ></FormattedNumber>
              </FieldContainer>
              <IconContainer onClick={() => clearCartProduct(cartProduct)}>
                <ClearCartProduct></ClearCartProduct>
              </IconContainer>
            </CartItemContainer>
          )
        })}
      {cartProducts.length > 0 && (
        <CartFooterContainer>
          <span>
            <FormattedMessage id="cart.total" />:
            <FormattedNumber
              value={cartProductsTotalCost}
              style="currency"
              currency="USD"
            ></FormattedNumber>
          </span>
          <MyButton>
            <FormattedMessage id="cart.checkout" />
          </MyButton>
        </CartFooterContainer>
      )}

      {cartProducts.length === 0 && (
        <EmptyCartContainer>
          <span>
            <FormattedMessage id="cart.empty.basket.description" />
          </span>
        </EmptyCartContainer>
      )}
    </CartContainer>
  )
}

export default CartProducts
