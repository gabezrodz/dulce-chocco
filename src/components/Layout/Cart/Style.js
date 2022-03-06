import styled from "styled-components";

export const CartItemsStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const Actions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #672f0a;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;

    &:hover,
    &:active {
      background-color: #89380c;
      border-color: #89380c;
      color: white;
    }
  }

  & .button--alt {
    color: #8a2b06;
  }

  & .button {
    background-color: #672f0a;
    color: white;
  }
`;
