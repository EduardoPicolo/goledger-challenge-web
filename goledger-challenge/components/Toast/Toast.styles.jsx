import styled from 'styled-components';

export const ToastContainer = styled.div`
  display: flex;
  color: white;
`;

export const ToastIconContainer = styled.div`
  font-size: 15px;
  padding-top: 8px;
  flex-shrink: 0;
  text-align: center;
  width: 30px;
`;

export const ToastMessageContainer = styled.div`
  flex-grow: 1;
  font-size: 1.05rem;
  padding: 8px 12px;
`;
