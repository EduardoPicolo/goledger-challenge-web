import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.5rem;

  ::placeholder {
    color: red;
    font-weight: 300;
  }
`;

export const CustomInputContainer = styled.input`
  outline: none;
  border: 1px solid #757575;
  border-radius: 10px;
  padding: 0.4rem 0.7rem;
  color: #333;

  ::placeholder {
    font-weight: 200;
  }

  &:focus {
    border: 1px solid black;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type=number] {
    -moz-appearance: textfield;
    margin: 0;
  }
`;
