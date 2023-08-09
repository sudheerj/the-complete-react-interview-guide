import { useIntl } from "react-intl"
import { useAppDispatch } from "@/app/store/hooks"
import { setCategory } from "@/app/store/product/product.slice"
import { CategoriesContainer } from "./categories.styles"
import { Category } from "./categories.types"

export const Categories = () => {
  const intl = useIntl()
  const dispatch = useAppDispatch()

  const categories: Category[] = [
    { type: "all", name: intl.formatMessage({ id: "categories.all" }) },
    { type: "laptop", name: intl.formatMessage({ id: "categories.laptops" }) },
    { type: "phone", name: intl.formatMessage({ id: "categories.phones" }) },
    { type: "tab", name: intl.formatMessage({ id: "categories.tabs" }) },
  ]

  function handleChangeCategory(categoryType: string) {
    dispatch(setCategory(categoryType))
  }
  return (
    <CategoriesContainer>
      {categories.map((category: Category) => (
        <p
          key={category.type}
          onClick={() => handleChangeCategory(category.type)}
        >
          <span>{category.name}</span>
        </p>
      ))}
    </CategoriesContainer>
  )
}
