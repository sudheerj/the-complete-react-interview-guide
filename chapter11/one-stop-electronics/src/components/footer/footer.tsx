import { FormattedMessage } from "react-intl"
import { FooterContainer } from "./footer.styles"

const Footer = () => {
  return (
      <FooterContainer>
        <p>
          <FormattedMessage id="footer.copyright.message" />
        </p>
      </FooterContainer>
  )
}

export default Footer
