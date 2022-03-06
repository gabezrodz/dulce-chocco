import { Chocolates } from "./Style";

const EX_CHOCOLATES = [
    {
      id: 'c1',
      name: 'Pettit Gateou',
      description: 'Pettit Gateou recheado com chocolate suiço',
      price: 29.99,
    },
    {
      id: 'c2',
      name: 'Torta de Ganache Valrhona ',
      description: 'Torta confecionada com o melhor chocolate francês',
      price: 49.99,
    },
    {
      id: 'c3',
      name: 'Barra trufada',
      description: 'Barra de chocolate trufado brasileiro',
      price: 13.99,
    },
    {
      id: 'c4',
      name: 'Brownie Quadruplo',
      description: 'Brownie feito com 4 tipos de chocolates',
      price: 9.99,
    },
  ];


const AvaliableChocolates = () => {
    const chocolatesList = EX_CHOCOLATES.map(chocolate=> <li>{chocolate.name}</li>)


  return (
    <Chocolates>
      <ul>{chocolatesList}</ul>
    </Chocolates>
  );
};

export default AvaliableChocolates;
