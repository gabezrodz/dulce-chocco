import { useContext } from "react";
import { CartItemsStyled, Total, Actions } from "./Style";
import Modal from "../../Shared/Modal/Modal";
import CartContex from "../../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);

  const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <CartItemsStyled>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartItemsStyled>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <Total>
        <span>Valor Total</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <button onClick={props.onHideCart} className="button--alt">
          Fechar
        </button>
        {hasItems && <button className="button">Encomendar</button>}
      </Actions>
    </Modal>
  );
};

export default Cart;
