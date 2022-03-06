import "./App.css";
import Header from "./components/Layout/Header/Header";
import Wrapper from "./components/Helpers/Wrapper";
import ChocolatesList from "./components/Layout/Chocolates/ChocolatesList";
import Cart from "./components/Layout/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHandler = () => {
    setCartDisplay(true);
  };

  const hideCartHandler = () => {
    setCartDisplay(false);
  };

  return (
    <Wrapper>
     {cartDisplay && <Cart onHideCart={hideCartHandler} />}
      <Header onDisplayCart={displayCartHandler}/>
      <main>
        <ChocolatesList />
      </main>
    </Wrapper>
  );
}

export default App;
