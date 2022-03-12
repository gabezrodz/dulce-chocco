import { useContext, useState } from "react";
import { CartItemsStyled, Total, Actions } from "./Style";
import Modal from "../../Shared/Modal/Modal";
import CartContex from "../../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Chekout";
import Wrapper from "../../Helpers/Wrapper";
const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [submited, setSubmited] = useState(false);

  const cartCtx = useContext(CartContex);

  const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmiting(true);

    await fetch(
      "https://dulce-chocco-default-rtdb.firebaseio.com/pedidos.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setSubmited(true);
    cartCtx.clearCart()
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

  const modalActions = (
    <Actions>
      <button onClick={props.onHideCart} className="button--alt">
        Fechar
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Encomendar
        </button>
      )}
    </Actions>
  );

  const isSubmittingModalContent = <h3>Enviando pedido...</h3>;

  const submitedModalContent = (
    <Wrapper>
      <h3>Pedido enviado com sucesso!</h3>
      <Actions>
        <button onClick={props.onHideCart} className="button">
          Fechar
        </button>
      </Actions>
    </Wrapper>
  );

  const cartModalContent = (
    <Wrapper>
      {cartItems}
      <Total>
        <span>Valor Total</span>
        <span>{totalAmount}</span>
      </Total>
      {checkout && (
        <Checkout onConfirm={submitOrderHandler} onClose={props.onHideCart} />
      )}
      {!checkout && modalActions}
    </Wrapper>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmiting && !submited && cartModalContent}
      {isSubmiting && isSubmittingModalContent}
      {!isSubmiting && submited && submitedModalContent}
    </Modal>
  );
};

export default Cart;
