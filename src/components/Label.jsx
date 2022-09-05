import styled from "styled-components";

const LabelStyled = styled.label`
  width: 150px;
  height: 30px;
  line-height: 30px;
  background-color: wheat;
  margin-left: 0.5rem;
  padding: 10px;
  color: black;
  border: 1px solid;
  border-radius: 1rem;
`;

const Label = ({ children, title }) => {
  return (
    <LabelStyled>{`${title}: ${children}`}</LabelStyled>
  );
};

export default Label;