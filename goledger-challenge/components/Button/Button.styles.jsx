import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: rgb(22, 160, 133);
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #333;
    border: 1px solid black;
  }
`;

const dangerButtonStyles = css`
  background-color: #d9584f;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #333;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: #333;
  border: 1px solid black;

  &:hover {
    background-color: rgb(22, 160, 133);
    color: white;
    border: 1px solid transparent;
  }
`;

const disabledButtonStyles = css`
  background-color: #9f9f9f;
  color: white;
  pointer-events: none;
`;

const getButtonStyles = (props) => {
  if (props.disabled) {
    return disabledButtonStyles;
  }
  if (props.danger) {
    return dangerButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const ButtonContainer = styled.button`
  min-width: 150px;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 5px;
  margin: ${(props) => props.m};

  &:active {
    transform: scale(0.9);
    opacity: 0.8;
  }
  ${getButtonStyles}
`;

export default ButtonContainer;
