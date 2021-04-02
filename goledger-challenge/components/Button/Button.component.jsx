import React from "react";

import { ButtonContainer } from "./Button.styles";

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    {children}
  </ButtonContainer>
);

export default Button;