import { FC } from "react"
import { useDispatch } from "react-redux"
import { FormattedMessage, FormattedNumber } from "react-intl"
import { useAppSelector } from "@/app/store/hooks"
import { selectCurrentUser } from "@/app/store/user/user.selector"
import MyButton, { BUTTON_TYPE_CLASSES } from "@/components/button/button"
import { Product } from "@/app/store/product/product.types"
import { addProductToCart } from "@/app/store/cart/cart.slice"
import { BRAND_NAMES } from "@/constants"
import { ProductContainer, Footer, Name, Brand, Price } from "./product.styles"

type ProductProps = {
  product: Product
}

const hasWhiteBackground = (brand: string) => BRAND_NAMES.includes(brand)

const ProductItem: FC<ProductProps> = ({ product }) => {
  const currentUser = useAppSelector(selectCurrentUser)
  const { name, price, productImageUrl, brand } = product
  const dispatch = useDispatch()
  const addCartProduct = () => dispatch(addProductToCart(product))

  return (
    <ProductContainer $hasWhiteBackgroundImage={hasWhiteBackground(brand)}>
      <img src={productImageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Brand>
          <FormattedMessage id="product.brand" />: <span>{brand}</span>
        </Brand>
        <Price>
          <FormattedMessage id="product.price" />:{" "}
          <span>
            <FormattedNumber
              value={price}
              style="currency"
              currency="USD"
            ></FormattedNumber>
          </span>
        </Price>
        {currentUser && (
          <MyButton
            buttonType={BUTTON_TYPE_CLASSES.small}
            onClick={addCartProduct}
          >
            <FormattedMessage id="product.add_to_cart" />
          </MyButton>
        )}
      </Footer>
    </ProductContainer>
  )
}

export default ProductItem
