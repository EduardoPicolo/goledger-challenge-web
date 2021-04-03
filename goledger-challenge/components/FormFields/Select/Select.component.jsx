import React from 'react';
import PropTypes from 'prop-types';

import { SelectContainer, CustomSelectContainer } from './Select.styles';
import LabelContainer from '../FieldLabel.styles';
import ErrorContainer from '../ErrorLabel.styles';

const Select = ({
  label, name, children, register, errors, ...otherProps
}) => (
  <SelectContainer className="select">
    <LabelContainer htmlFor={name}>{label}</LabelContainer>
    <CustomSelectContainer
      name={name}
      defaultValue="Selecione"
      ref={register}
      {...otherProps}
    >
      <option value="" hidden>
        Seller
      </option>
      {children}
    </CustomSelectContainer>
    {errors[name] ? (
      <ErrorContainer className="error">{errors[name].message}</ErrorContainer>
    ) : null}
  </SelectContainer>
);

Select.defaultProps = {
  errors: null,
  onChange: () => {},
  children: undefined,
};

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  onChange: PropTypes.func,
};

export default Select;
