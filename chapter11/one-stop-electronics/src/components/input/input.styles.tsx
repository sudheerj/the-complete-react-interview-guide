import styled, { css } from "styled-components"

const myInputColor = "grey"

const MyShrinkLabelStyles = css`
  top: -0.9rem;
  font-size: 0.7rem;
  color: #000000;
`

type MyInputLabelProps = {
  shrink?: boolean
}

export const MyInputLabel = styled.label<MyInputLabelProps>`
  color: ${myInputColor};
  font-size: 0.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.2rem;
  top: 0.6rem;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && MyShrinkLabelStyles};

  &:after {
    content: " *";
    color: red;
  }
`

export const MyInputText = styled.input`
  color: ${myInputColor};
  font-size: 1rem;
  padding: 0.5rem 0.9rem 0.6rem 0.5rem;
  display: block;
  border: none;
  border-bottom: 1px solid ${myInputColor};
  margin: 1.2rem 0;
  width: 16rem;

  &:focus {
    outline: none;
  }

  &:focus ~ ${MyInputLabel} {
    ${MyShrinkLabelStyles};
  }
`

export const MyInputGroup = styled.div`
  position: relative;
  margin: 2rem 1.2rem;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`
