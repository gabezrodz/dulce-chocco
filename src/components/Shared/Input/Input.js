import { InputStyled } from "./Style";

const Input = (props) => {
  return (
    <InputStyled>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </InputStyled>
  );
};

export default Input;
