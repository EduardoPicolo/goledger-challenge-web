import React from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer,
  CustomInputContainer,
} from './Input.styles';
import LabelContainer from '../FieldLabel.styles';
import   ErrorContainer from '../ErrorLabel.styles';

const Input = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  register,
  errors,
  // required = false,
  ...otherProps
}) => (
  <InputContainer>
    <LabelContainer htmlFor={name}>{label}</LabelContainer>
    <CustomInputContainer
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      ref={register}
      // {...register}
      {...otherProps}
    />
    {errors[name] ? <ErrorContainer>{errors[name].message}</ErrorContainer> : null}
  </InputContainer>
);

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  defaultValue: '',
  required: '',
  errors: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
};

export default Input;
