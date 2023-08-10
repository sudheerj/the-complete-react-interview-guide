import { useState, FormEvent, ChangeEvent } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import { AuthError, AuthErrorCodes } from "firebase/auth"
import { useDispatch } from "react-redux"

import MyInputText from "@/components/input/input"
import MyButton from "@/components/button/button"

import { SignUpContainer, LoginLink, MyButtonsContainer } from "./page.styles"
import { signUpEmailAndPassword } from "@/backend/firebase/api/auth"
import { insertUserDataFromAuth } from "@/backend/firebase/api/utils"
import { useNavigator } from "@/app/store/hooks"
import { InfoContainer } from "@/global.styles"
import {
  AUTH_EMAIL_ALREADY_IN_USE_MSG,
  AUTH_WEAK_PASSWORD_MSG,
} from "@/constants"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {
  const intl = useIntl()
  const navigator = useNavigator()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      const user = await signUpEmailAndPassword(displayName, email, password)

      await insertUserDataFromAuth(user)
      resetFormFields()
      navigator("/")
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert(AUTH_EMAIL_ALREADY_IN_USE_MSG)
      } else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
        alert(AUTH_WEAK_PASSWORD_MSG)
      } else {
        alert(`User creation encountered an error: ${error}`)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      <h2>
        <FormattedMessage id="signup.title" />
      </h2>
      <form onSubmit={handleSubmit}>
        <MyInputText
          label={intl.formatMessage({ id: "signup.displayname.label" })}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <MyInputText
          label={intl.formatMessage({ id: "signup.email.label" })}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <MyInputText
          label={intl.formatMessage({ id: "signup.password.label" })}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <MyInputText
          label={intl.formatMessage({ id: "signup.confirm_password.label" })}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <MyButtonsContainer>
          <MyButton type="submit">
            <FormattedMessage id="signup.email_signup" />
          </MyButton>
        </MyButtonsContainer>
        <InfoContainer>
          <FormattedMessage id="signup.account_signin_info" />{" "}
          <LoginLink to="/signin">
            <FormattedMessage id="signin.title" />
          </LoginLink>
        </InfoContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
