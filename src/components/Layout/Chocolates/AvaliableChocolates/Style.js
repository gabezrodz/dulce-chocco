import styled, { keyframes } from "styled-components";

const ChocolateAppear = keyframes`
from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Chocolates = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${ChocolateAppear} 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
