import styled from "styled-components"
import { Link } from "react-router-dom"

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  width: 20rem;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`

export const MyButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
`

export const SignupLink = styled(Link)`
  padding-left: 0.2rem;
  color: blue;
  text-decoration: none;
  cursor: pointer;
`
