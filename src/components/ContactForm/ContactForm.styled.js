import styled from '@emotion/styled';

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
`;

const FormInput = styled.input`
  width: 300px;
`;

const FormLabel = styled.label``;

const FormButton = styled.button`
  width: 200px;
  height: 30px;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const css = { Form, FormInput, FormLabel, FormButton };

export default css;
