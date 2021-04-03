import React from 'react';
import StyledSpinner from './Spinner.styles';

const Spinner = ({ size, width }) => (
  <StyledSpinner viewBox="0 0 50 50" size={size} width={width}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </StyledSpinner>
);

export default Spinner;
