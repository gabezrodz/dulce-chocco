import { HeaderStyled, MainImage } from "./Style";
import Wrapper from "../../Helpers/Wrapper";
import bannerChocolate from "../../../assets/image/banner-chocolate.png";

const Header = (props) => {
  return (
    <Wrapper>
      <HeaderStyled>
        <h1>Dulce Chocco</h1>
        <button>Carrinho</button>
      </HeaderStyled>
      <MainImage>
        <img src={bannerChocolate} alt="Banner de chocolates deliciosos!" />
      </MainImage>
    </Wrapper>
  );
};

export default Header;
