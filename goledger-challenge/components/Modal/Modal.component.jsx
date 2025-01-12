import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button.component';
import {
  ModalOuterContainer,
  ModalInnerContainer,
  ModalContentContainer,
  ModalButtonsContainer,
} from './Modal.styles';

function Modal({
  id = 'modal',
  onClose = () => {},
  onConfirm = () => {},
  title,
  closeMessage,
  confirmMessage,
  confirmType = 'button',
  disabled,
  dangerAction,
  children,
  hidden,
  ...otherProps
}) {
  const handleOutsideClick = (event) => {
    if (event.target.id === id) onClose();
  };

  return hidden ? null : (
    <ModalOuterContainer id={id} onClick={handleOutsideClick} {...otherProps}>
      <ModalInnerContainer>
        <ModalContentContainer>
          <h2>{title}</h2>
          <span>{children}</span>
        </ModalContentContainer>
        <ModalButtonsContainer>
          <Button onClick={onClose} inverted>
            {closeMessage}
          </Button>
          {confirmMessage ? (
            <Button
              onClick={onConfirm}
              type={confirmType}
              inverted
              danger={dangerAction}
              disabled={disabled}
            >
              {confirmMessage}
            </Button>
          ) : null}
        </ModalButtonsContainer>
      </ModalInnerContainer>
    </ModalOuterContainer>
  );
}

Modal.defaultProps = {
  disabled: false,
  onConfirm: false,
  confirmMessage: '',
  id: 'modal',
};

Modal.propTypes = {
  id: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  closeMessage: PropTypes.string.isRequired,
  onClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  confirmMessage: PropTypes.string,
  onConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
