import ChocolateSumary from "./ChocolateSumary/ChocolateSumary";
import AvaliableChocolates from "./AvaliableChocolates/AvaliableChocolates";
import Wrapper from "../../Helpers/Wrapper";

const ChocolatesList = () => {
  return (
    <Wrapper>
      <ChocolateSumary />
      <AvaliableChocolates />
    </Wrapper>
  );
};

export default ChocolatesList;
