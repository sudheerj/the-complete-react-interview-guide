import styled from "styled-components"

type ImageBackgroundProps = {
  $hasWhiteBackgroundImage: boolean
}

export const ProductContainer = styled.div<ImageBackgroundProps>`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 0.125rem;

  img {
    width: 10rem;
    height: 8rem;
    object-fit: fill;
    background-color: #f1f1f1;
    transition: 0.5s all ease-in-out;
    mix-blend-mode: ${(props) =>
      props.$hasWhiteBackgroundImage ? "multiply" : "normal"};

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  padding-left: 1rem;
`

export const Name = styled.h2`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

export const Brand = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(75 85 99);
  margin-bottom: 1rem;
  span {
    font-weight: 600;
    text-transform: capitalize;
  }
`

export const Price = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(75 85 99);
  margin-bottom: 1rem;
  span {
    font-weight: 600;
    text-transform: capitalize;
    color: rgb(85, 118, 209);
  }
`
