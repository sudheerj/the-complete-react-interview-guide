import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: rgb(112, 76, 182);
  color: white;
`

export const NavLogoContainer = styled(Link)`
  height: 100%;
  width: 5rem;
  padding-left: 4rem;
  padding-top: 0.5rem;
`

export const NavLinks = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  display: flex;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 0.8rem;
  align-items: center;
`

export const NavIconContainer = styled.div`
  width: 3rem;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`

export const NavItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: 0.6rem;
  right: 0.5rem;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(247, 45, 45, 0.986);
  display: flex;
  align-items: center;
  justify-content: center;
`
