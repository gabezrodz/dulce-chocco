import React from "react";
import { InputStyled } from "./Style";

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyled>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputStyled>
  );
});

export default Input;
