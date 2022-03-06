import styled from "styled-components";

export const ChocolateItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`;

export const Description = styled.div`
  font-style: italic;
`;

export const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color:  #89380c;
  font-size: 1.25rem;
`;
