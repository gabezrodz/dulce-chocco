import { useRef, useState } from "react";
import { Actions, Control, Form } from "./Style";

const isEmpty = (value) => value.trim().length === 0;
const isCep = (value) => value.trim().length !== 9;

const Checkout = (props) => {
  const [formInputsValidaty, setFormInputsValidaty] = useState({
    name: true,
    adress: true,
    city: true,
    cep: true,
  });

  const nameInputRef = useRef();
  const adressInputRef = useRef();
  const cepInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredCep = cepInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAdressIsValid = !isEmpty(enteredAdress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCepIsValid = !isCep(enteredCep);

    setFormInputsValidaty({
      name: enteredNameIsValid,
      adress: enteredAdressIsValid,
      city: enteredCityIsValid,
      cep: enteredCepIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAdressIsValid &&
      enteredCepIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      adress: enteredAdress,
      city: enteredCity,
      cep: enteredCep,
    });
  };

  const nameControlClasses = `${formInputsValidaty.name ? "" : "invalid"}`;
  const adressControlClasses = `${formInputsValidaty.adress ? "" : "invalid"}`;
  const cityControlClasses = `${formInputsValidaty.city ? "" : "invalid"}`;
  const cepControlClasses = `${formInputsValidaty.cep ? "" : "invalid"}`;

  return (
    <Form onSubmit={confirmHandler}>
      <Control className={nameControlClasses}>
        <label htmlFor="name">Nome</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputsValidaty.name && <p>Digite um nome válido!</p>}
      </Control>
      <Control className={adressControlClasses}>
        <label htmlFor="endereço">Endereço</label>
        <input ref={adressInputRef} type="text" id="endereço" />
        {!formInputsValidaty.adress && <p>Digite um endereço válido!</p>}
      </Control>
      <Control className={cityControlClasses}>
        <label htmlFor="cidade">Cidade</label>
        <input ref={cityInputRef} type="text" id="cidade" />
        {!formInputsValidaty.city && <p>Digite uma cidade válida!</p>}
      </Control>
      <Control className={cepControlClasses}>
        <label htmlFor="CEP">CEP</label>
        <input ref={cepInputRef} type="text" id="CEP" />
        {!formInputsValidaty.cep && <p>Digite um cep válido! Ex: 99999-999</p>}
      </Control>
      <Actions>
        <button type="button" onClick={props.onClose}>
          Cancelar
        </button>
        <button className="submit" o>
          Enviar
        </button>
      </Actions>
    </Form>
  );
};

export default Checkout;
