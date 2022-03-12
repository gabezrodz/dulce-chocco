import styled from "styled-components";

export const ChocolateItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h2 {
    margin: 0 0 0.25rem 0;
  }
`;

export const Description = styled.div`
  font-style: italic;
  font-size: 1.2rem;
`;

export const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color:  #89380c;
  font-size: 1.25rem;
`;

export const ItemImage =styled.img`
  width: 18rem;
  height: 16rem;
  margin: 10px 2px 0;
  border: solid #672f0a;
  border-radius: 5px;

`
