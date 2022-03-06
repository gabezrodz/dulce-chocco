import "./App.css";
import Header from "./components/Layout/Header/Header";
import Wrapper from "./components/Helpers/Wrapper";
import ChocolatesList from "./components/Layout/Chocolates/ChocolatesList";
import Cart from "./components/Layout/Cart/Cart";

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Cart />
        <ChocolatesList />
      </main>
    </Wrapper>
  );
}

export default App;
