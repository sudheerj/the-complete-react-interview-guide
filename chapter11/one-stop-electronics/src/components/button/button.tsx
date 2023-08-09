import { FC, ButtonHTMLAttributes } from "react"

import { BasicButton, InvertedButton, SmallBasicButton } from "./button.styles"

export enum BUTTON_TYPE_CLASSES {
  basic = "basic",
  inverted = "inverted",
  small = "small",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.basic) =>
  ({
    [BUTTON_TYPE_CLASSES.basic]: BasicButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.small]: SmallBasicButton,
  }[buttonType])

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES
} & ButtonHTMLAttributes<HTMLButtonElement>

const MyButton: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default MyButton
