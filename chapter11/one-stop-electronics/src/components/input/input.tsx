import { FC, InputHTMLAttributes } from "react"
import { MyInputLabel, MyInputText, MyInputGroup } from "./input.styles"

export type MyInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const MyInput: FC<MyInputProps> = ({ label, ...otherProps }) => {
  return (
    <MyInputGroup>
      <MyInputText {...otherProps} />
      {label && (
        <MyInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length,
          )}
        >
          {label}
        </MyInputLabel>
      )}
    </MyInputGroup>
  )
}

export default MyInput
