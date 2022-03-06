import { CartItemsStyled, Total, Actions } from "./Style";
import Modal from "../../Shared/Modal/Modal";

const Cart = (props) => {
  const cartItems = (
    <CartItemsStyled>
      {[{ id: "c1", name: "Pettit Gateu", amount: "2", price: 59.98 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </CartItemsStyled>
  );

  return (
    <Modal>
      {cartItems}
      <Total>
        <span>Quantidade Total</span>
        <span>59,98</span>
      </Total>
      <Actions>
        <button className="button--alt">Fechar</button>
        <button className="button">Encomendar</button>
      </Actions>
    </Modal>
  );
};

export default Cart;
