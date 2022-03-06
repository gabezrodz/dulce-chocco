import { ChocolateItemStyled, Description, Price } from "./Style";
import ChocolateItemForm from "./ChocolateItemForm/ChocolateItemForm";

const ChocolateItem = (props) => {
  return (
    <ChocolateItemStyled>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>${props.price.toFixed(2)}</Price>
      </div>
      <div>
        <ChocolateItemForm />
      </div>
    </ChocolateItemStyled>
  );
};

export default ChocolateItem;
