import { Fragment, ChangeEvent } from "react"
import { FormattedMessage } from "react-intl"
import MySelect from "@/components/select/select"
import { useAppSelector } from "@/app/store/hooks"
import { selectCurrentUser } from "@/app/store/user/user.selector"
import { selectCartProductsCount } from "@/app/store/cart/cart.selector"
import { resetCartProducts } from "@/app/store/cart/cart.slice"
import { useAppDispatch, useNavigator } from "@/app/store/hooks"
import { setCurrentLocale } from "@/app/store/user/user.slice"
import { ReactComponent as Logo } from "@/assets/one-stop-electronics.svg"
import { ReactComponent as ShoppingCartIcon } from "@/assets/shopping-cart.svg"
import { ReactComponent as UserProfileIcon } from "@/assets/user-profile-avatar.svg"
import { signOutUser } from "@/backend/firebase/api/auth"

import {
  NavContainer,
  NavLinks,
  NavLink,
  NavLogoContainer,
  NavIconContainer,
  NavItemCount,
} from "./header.styles"

const Header = () => {
  const dispatch = useAppDispatch()
  const navigator = useNavigator()
  const currentUser = useAppSelector(selectCurrentUser)
  const cartProductsCount = useAppSelector(selectCartProductsCount)

  const signOut = () => {
    dispatch(signOutUser)
    dispatch(resetCartProducts())
  }
  const navigateToCart = () => navigator("/cart")
  const handleChangeLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value
    dispatch(setCurrentLocale(locale))
  }

  return (
    <Fragment>
      <NavContainer>
        <NavLogoContainer to="/">
          <Logo width="50" height="60" />
        </NavLogoContainer>
        <NavLinks>
          <NavLink to="/">
            <FormattedMessage id="header.navlink.products" />
          </NavLink>

          {currentUser ? (
            <NavLink to="/" onClick={signOut}>
              {currentUser.displayName}
              <NavIconContainer>
                <UserProfileIcon />
              </NavIconContainer>
            </NavLink>
          ) : (
            <NavLink to="/signin">
              <span>
                <FormattedMessage id="header.navlink.signin" />
              </span>
            </NavLink>
          )}
        </NavLinks>
        <NavIconContainer>
          <ShoppingCartIcon onClick={navigateToCart} />
          <NavItemCount>{cartProductsCount}</NavItemCount>
        </NavIconContainer>
        <MySelect onChange={handleChangeLocale}>
          <option value="en-US">English</option>
          <option value="fr-FR">French</option>
          <option value="de-DE">German</option>
        </MySelect>
      </NavContainer>
    </Fragment>
  )
}

export default Header
