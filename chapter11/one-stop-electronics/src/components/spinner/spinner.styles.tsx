import styled from "styled-components"

export const MySpinnerContainer = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0.5rem solid rgba(112, 76, 182, 0.5);
  border-radius: 50%;
  border-top-color: #3498db;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`
