import styled from "styled-components"

export const BasicButton = styled.button`
  min-width: 10rem;
  width: auto;
  height: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.5px;
  padding: 0 2rem;
  background-color: rgb(112, 76, 182);
  color: white;
  font-size: 0.7rem;
  font-family: "Barlow Condensed";
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const InvertedButton = styled(BasicButton)`
  background-color: white;
  color: rgb(112, 76, 182);
  border: 1px solid black;

  &:hover {
    background-color: rgb(112, 76, 182);
    border: none;
    border: 1px solid white;
    color: white;
  }
`

export const SmallBasicButton = styled(BasicButton)`
  width: 4rem;
  height: 1.5rem;
  min-width: 0rem;
  padding: 0rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  font-size: 0.4rem;
  align-items: center;
  letter-spacing: 0rem;
`