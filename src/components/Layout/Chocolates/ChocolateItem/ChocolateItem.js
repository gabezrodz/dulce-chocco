import { useContext } from "react";
import { ChocolateItemStyled, Description, Price,  ItemImage } from "./Style";
import ChocolateItemForm from "./ChocolateItemForm/ChocolateItemForm";
import CartContex from "../../../../store/cart-context";

const ChocolateItem = (props) => {
  const cartCtx = useContext(CartContex);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ChocolateItemStyled>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        < ItemImage src={props.image} />
        <Price>R${props.price.toFixed(2)}</Price>
      </div>
      <div>
        <ChocolateItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </ChocolateItemStyled>
  );
};

export default ChocolateItem;
