import { Actions, Amount, CartItemStyled, Price, Summary } from "./Style";

const CartItem = (props) => {
  return (
    <CartItemStyled>
      <div>
        <h2>{props.name}</h2>
        <Summary>
          <Price>{`R$${props.price.toFixed(2)}`}</Price>
          <Amount>x{props.amount}</Amount>
        </Summary>
      </div>
      <Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Actions>
    </CartItemStyled>
  );
};

export default CartItem;
