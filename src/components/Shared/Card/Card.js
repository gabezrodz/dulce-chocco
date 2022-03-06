import { CardStyle } from "./Style";

const Card = (props) => {
  return <CardStyle>{props.children}</CardStyle>;
};

export default Card;
