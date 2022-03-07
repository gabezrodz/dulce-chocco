import { useRef, useState } from "react";
import { Form } from "./Style";
import Input from "../../../../Shared/Input/Input";

const ChocolateItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsvalid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        label="Quantidade"
        ref={amountInputRef}
        input={{
          id: "quantidade" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Adicionar</button>
      {!amountIsvalid && <p>Please enter a valid amount (1-5).</p>}
    </Form>
  );
};

export default ChocolateItemForm;
