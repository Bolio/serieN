import styled from "styled-components";

const InputStyled = styled.input`
  width: 200px;
  height: 25px;
  margin-right: 0.5rem;
  background-color: lightgray;
  color: black;
`;

const Input = ({ id }) => {
  return (
    <InputStyled id={id}/>
  );
}

export default Input;