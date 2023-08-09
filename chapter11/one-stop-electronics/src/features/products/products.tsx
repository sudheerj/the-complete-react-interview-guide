import { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { useAppSelector } from "@/app/store/hooks"
import ProductItem from "@/components/product/product"
import MySpinner from "@/components/spinner/spinner"
import { insertProductsData } from "@/backend/firebase/api/utils"
import { Product } from "@/app/store/product/product.types"
import {
  selectProductsMap,
  selectCategory,
  selectProductsIsLoading,
} from "@/app/store/product/product.selector"
import { Categories } from "@/components/categories/categories"
import {
  ProductsContainer,
  Title,
  LayoutContainer,
  LoaderContainer,
} from "./products.styles"

const Products = () => {
  const productsMap = useAppSelector(selectProductsMap)
  const category = useAppSelector(selectCategory)
  const isLoading = useAppSelector(selectProductsIsLoading)
  const [products, setProducts] = useState(productsMap[category])

  useEffect(() => {
    setProducts(productsMap[category])
  }, [category, productsMap])

  return (
    <Fragment>
      <LayoutContainer>
        <Categories></Categories>
        <ProductsContainer>
          {isLoading ? (
            <LoaderContainer>
              <MySpinner />
            </LoaderContainer>
          ) : (
            products &&
            products.map((product: Product) => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </ProductsContainer>
      </LayoutContainer>
    </Fragment>
  )
}

export default Products
