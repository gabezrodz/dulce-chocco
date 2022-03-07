import { useContext } from "react";
import { CartButton, Icon, Badge } from "./Style";
import CartContex from "../../../../store/cart-context";
import CartIcon from "./CartIcon";

const HeadderCartButton = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItens = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <CartButton onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Carrinho</span>
      <Badge>{numberOfCartItens}</Badge>
    </CartButton>
  );
};

export default HeadderCartButton;
