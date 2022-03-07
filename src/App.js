import "./App.css";
import Header from "./components/Layout/Header/Header";
import ChocolatesList from "./components/Layout/Chocolates/ChocolatesList";
import Cart from "./components/Layout/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const displayCartHandler = () => {
    setCartDisplay(true);
  };

  const hideCartHandler = () => {
    setCartDisplay(false);
  };

  return (
    <CartProvider>
      {cartDisplay && <Cart onHideCart={hideCartHandler} />}
      <Header onDisplayCart={displayCartHandler} />
      <main>
        <ChocolatesList />
      </main>
    </CartProvider>
  );
}

export default App;
