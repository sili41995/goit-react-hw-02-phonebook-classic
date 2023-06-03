import styled from '@emotion/styled';

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 300px;
`;

const Label = styled.label``;

const Button = styled.button`
  width: 200px;
  height: 30px;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const css = { Form, Input, Label, Button };

export default css;
