import { createSelector } from "reselect"
import { RootState } from "@/app/store/store"
import { Product, ProductMap, ProductsState } from "./product.types"

const selectProductReducer = (state: RootState): ProductsState => state.products

export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.products,
)

export const selectCategory = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.category,
)

export const selectProductsIsLoading = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.isLoading,
)

export const selectProductsMap = createSelector(
  [selectProducts],
  (products): ProductMap =>
    products.reduce(
      (acc, product) => {
        const { category } = product
        acc[category]
          ? acc[category].push(product)
          : (acc[category] = [product])
        acc["all"].push(product)
        return acc
      },
      { all: [] } as ProductMap,
    ),
)
