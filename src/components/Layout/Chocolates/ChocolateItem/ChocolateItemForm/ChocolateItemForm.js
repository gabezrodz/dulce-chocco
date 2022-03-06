import { Form } from "./Style";
import Input from "../../../../Shared/Input/Input";

const ChocolateItemForm = (props) => {
  return (
    <Form>
      <Input
        label="Quantidade"
        input={{
          id:  "quantidade" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Adicionar</button>
    </Form>
  );
};

export default ChocolateItemForm;
