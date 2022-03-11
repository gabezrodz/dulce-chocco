import { useEffect, useState } from "react";
import { Chocolates } from "./Style";
import ChocolateItem from "../ChocolateItem/ChocolateItem";
import Card from "../../../Shared/Card/Card";

const AvaliableChocolates = () => {
  const [chocolates, setChocolates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://dulce-chocco-default-rtdb.firebaseio.com/chocolates.json"
      );

      if (!response.ok) {
        throw new Error("Ops! Alguma coisa deu errado!");
      }

      const responseData = await response.json();

      const loadedChocolates = [];

      for (const key in responseData) {
        loadedChocolates.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setIsLoading(false);
      setChocolates(loadedChocolates);
    };

   
      fetchMeals().catch(error =>{
        setIsLoading(false)
        setHttpError(error.message)
      })
    
     
    
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center" }}>
        <h3 style={{ color: "white" }}>Carregando...</h3>
      </section>
    );
  }

  if (httpError){
    return (
      <section style={{ textAlign: "center" }}>
        <h3 style={{ color:  "red" }}>Erro de conexão com o banco de dados!</h3>
      </section>
    )
  }


  const chocolatesList = chocolates.map((chocolate) => (
    <ChocolateItem
      id={chocolate.id}
      key={chocolate.id}
      name={chocolate.name}
      description={chocolate.description}
      price={chocolate.price}
      image={chocolate.image}
    />
  ));

  return (
    <Chocolates>
      <Card>
        <ul>{chocolatesList}</ul>
      </Card>
    </Chocolates>
  );
};

export default AvaliableChocolates;
