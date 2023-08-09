import { styled } from "styled-components"

export const CartContainer = styled.div`
  width: 75%;
  min-height: 5rem;
  font-size: 1rem;
  align-items: center;
  font-weight: 600;
`

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 2rem;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
  border: 1px solid #e7eaf0;
  border-radius: 0.4rem;
`

export const ProductImageContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  width: 18%;
  justify-content: center;
  align-items: center;
`

export const QuantityContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.div`
  width: 3rem;
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

export const CartFooterContainer = styled.div`
  padding: 2rem 0;
  margin: 4rem 2rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e7eaf0;
`

export const EmptyCartContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`
