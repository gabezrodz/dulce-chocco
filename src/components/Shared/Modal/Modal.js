import { OverlayStyled, ModalStyled } from "./Style";
import ReactDom from "react-dom";
import Wrapper from "../../Helpers/Wrapper";

const Overlay = (props) => {
  return <OverlayStyled onClick={props.onHideCart}/>;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div>{props.children}</div>
    </ModalStyled>
  );
};
const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Wrapper>
      {ReactDom.createPortal(<Overlay  onHideCart={props.onHideCart} />, portal)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </Wrapper>
  );
};

export default Modal;
