import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.5rem;
`;

export const CustomSelectContainer = styled.select`
  background-color: white;
  outline: none;
  border: 1px solid #757575;
  border-radius: 10px;
  padding: 0.5rem 0.7rem;
  color: #333;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus {
    border: 1px solid black;
  }

  /* option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  } */
`;
