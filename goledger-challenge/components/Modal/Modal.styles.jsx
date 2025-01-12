import styled from 'styled-components';

export const ModalOuterContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInnerContainer = styled.div`
  background-color: #f9f9f9;
  color: var(--text-color);
  box-shadow: 0px 4px 15px rgba(40, 40, 40, 0.3),
    0px 1px 10px rgba(20, 20, 20, 0.5);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  max-width: 40%;
  width: 450px;
  padding: 3rem;

  @media (max-width: 600px) {
    max-width: 95%;
    padding: 1.5rem;
  }
`;

export const ModalContentContainer = styled.div`
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: var(--title-color);
    font-weight: 700;
  }

  span {
    font-size: 1.1rem;
    font-weight: 500;

    p {
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
    button + button {
      margin-top: 1.1rem;
    }
  }
`;
