import styled from "styled-components";

export const Form = styled.form`
  text-align: right;
  font-size: 1.2rem;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #672f0a;
    border: 1px solid #672f0a;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #89380c;
      border-color: #89380c;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
