import styled from "styled-components";

export const Form = styled.form`
  margin: 1rem 0;
  height: 24rem;
  overflow: auto;

  .invalid {
    label {
      color: #ca3e51;
    }

    input {
      border-color: #aa0b20;
      background-color: #ffeff1;
    }
  }

  @media (max-width: 1440px) {
    height: 18rem
  }
`;

export const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    height: 4.5vh;
    max-width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    font-size: 1.2rem;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: 3px solid #5a1a01;
    border-radius: 25px;
    padding: 0.5rem 2rem;

    &:hover,
    &:active {
      color: white;
      background-color: #7a2706;
    }
  }

  .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;

    &:hover,
    &:active {
      background-color: #7a2706;
    }
  }
`;
