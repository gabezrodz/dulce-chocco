import { useContext, useEffect, useState } from "react";
import { CartButton, Icon, Badge } from "./Style";
import CartContex from "../../../../store/cart-context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const HeadderCartButton = (props) => {
  const cartCtx = useContext(CartContex);
  const [btnHighlight, setBtnHighlight] = useState(false);

  const numberOfCartItens = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClass = `${btnHighlight ? "bump" : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <CartButton onClick={props.onClick} className={btnClass}>
      <Icon>
      <FontAwesomeIcon icon={faCartShopping} />
      </Icon>
      <span>Carrinho</span>
      <Badge>{numberOfCartItens}</Badge>
    </CartButton>
  );
};

export default HeadderCartButton;
