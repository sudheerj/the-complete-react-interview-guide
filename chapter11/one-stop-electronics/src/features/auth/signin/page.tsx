import { useState, FormEvent, ChangeEvent } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import MyInputText from "@/components/input/input"
import MyButton, { BUTTON_TYPE_CLASSES } from "@/components/button/button"
import { AUTH_INVALID_PASSWORD_MSG, AUTH_USER_NOT_FOUND_MSG } from "@/constants"
import {
  signInEmailAndPassword,
  signInGooglePopup,
} from "@/backend/firebase/api/auth"
import { useNavigator } from "@/app/store/hooks"
import { SignInContainer, MyButtonsContainer, SignupLink } from "./page.styles"
import { InfoContainer } from "@/global.styles"
import { AuthError, AuthErrorCodes } from "firebase/auth"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignIn = () => {
  const intl = useIntl()
  const navigator = useNavigator()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInGooglePopup()
    navigator("/")
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await signInEmailAndPassword(email, password)
      resetFormFields()
      navigator("/")
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.USER_DELETED) {
        alert(AUTH_USER_NOT_FOUND_MSG)
      } else if (
        (error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD
      ) {
        alert(AUTH_INVALID_PASSWORD_MSG)
      } else {
        alert(`User login encountered an error: ${error}`)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>
        <FormattedMessage id="signin.title" />
      </h2>
      <form onSubmit={handleSubmit}>
        <MyInputText
          label={intl.formatMessage({ id: "signin.email.label" })}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <MyInputText
          label={intl.formatMessage({ id: "signin.password.label" })}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <MyButtonsContainer>
          <MyButton type="submit">
            <FormattedMessage id="signin.email_signin" />
          </MyButton>
          <MyButton
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            type="button"
            onClick={signInWithGoogle}
          >
            <FormattedMessage id="signin.google_signin" />
          </MyButton>
        </MyButtonsContainer>
        <InfoContainer>
          <FormattedMessage id="signin.account_signup_info" />
          <SignupLink to="/signup">
            <FormattedMessage id="signin.account_signup" />
          </SignupLink>
        </InfoContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
