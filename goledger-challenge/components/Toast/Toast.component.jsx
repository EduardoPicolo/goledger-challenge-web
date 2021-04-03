import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from 'react-icons/fa';

import { ToastContainer, ToastIconContainer, ToastMessageContainer } from './Toast.styles';

export const displayIcon = (type) => {
  switch (type) {
    case 'success':
      return <FaCheck />;
    case 'info':
      return <FaInfo />;
    case 'error':
      return <FaExclamationCircle />;
    case 'warning':
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};

const Toast = ({ type, message }) => toast[type](
  <ToastContainer>
    <ToastIconContainer>
      {displayIcon(type)}
    </ToastIconContainer>
    <ToastMessageContainer>
      {message}
    </ToastMessageContainer>
  </ToastContainer>,
);

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Toast.dismiss = toast.dismiss;

export default Toast;
