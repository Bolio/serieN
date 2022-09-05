import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Input from "./Input";
import HiddenComponent from "./HiddenComponent";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 700px;
  height: 500px;
  background-color: beige;
  border: 1px solid;
  border-radius: 1rem;
`;

const Form = () => {
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
      event.preventDefault();
      // console.log(event.target[0].value)
      setValue(event.target[0].value);
    }
  
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input id='n' />
      <HiddenComponent valueN={ value } hide={true}/>
      <Button type='submit'>Calcular</Button>
    </FormStyled>
  );
}

export default Form;