import { CartButton,Icon,Badge } from "./Style";
import CartIcon from "./CartIcon";
const HeadderCartButton = (props) => {
  return (
    <CartButton>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Carrinho</span>
      <Badge>3</Badge>
    </CartButton>
  );
};

export default HeadderCartButton;
