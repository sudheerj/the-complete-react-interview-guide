import { SelectContainer } from "./select.styles"
import { FC, SelectHTMLAttributes } from "react"

const MySelect: FC<SelectHTMLAttributes<HTMLSelectElement>>  = ({...props}) => (
  <SelectContainer {...props}></SelectContainer>
)

export default MySelect