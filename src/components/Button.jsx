import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100px;
  height: 40px;
  background-color: lightblue;
  margin-left: 0.5rem;
`;

const Button = ({ type, children }) => {
  return (
    <ButtonStyled type={type}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
