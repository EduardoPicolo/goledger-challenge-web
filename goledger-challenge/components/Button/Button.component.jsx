import React from 'react';
import PropTypes from 'prop-types';

import ButtonContainer from './Button.styles';

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
