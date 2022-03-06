import { HeaderStyled, MainImage } from "./Style";
import Wrapper from "../../Helpers/Wrapper";
import bannerChocolate from "../../../assets/image/banner-chocolate.png";
import HeadderCartButton from "../Cart/CartFeatures/CartButton";

const Header = (props) => {
  return (
    <Wrapper>
      <HeaderStyled>
        <h1>Dulce Chocco</h1>
        <HeadderCartButton />
      </HeaderStyled>
      <MainImage>
        <img src={bannerChocolate} alt="Banner de chocolates deliciosos!" />
      </MainImage>
    </Wrapper>
  );
};

export default Header;
