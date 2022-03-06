import "./App.css";
import Header from "./components/Layout/Header/Header";
import Wrapper from "./components/Helpers/Wrapper";
import ChocolatesList from "./components/Layout/Chocolates/ChocolatesList";

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <ChocolatesList />
      </main>
    </Wrapper>
  );
}

export default App;
