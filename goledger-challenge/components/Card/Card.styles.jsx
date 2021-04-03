import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  background-color: #e5e5e9;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
  &:active {
    opacity: 0.8;
    background-color: #e9e9e9;
    transform: scale(0.95);
  }
`;

export const CardHeaderContainer = styled.span`
  display: inline-block;
  color: #585858;
  font-weight: 300;
`;

export const CardTitleContainer = styled.h2`
  padding: 2.5rem 0;
  color: #343434;
  position: relative;
  margin: 0 auto;
  font-weight: 700;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 2px solid #ccc;
  }
`;

export const CardInfoContainer = styled.span`
  color: #343434;
  margin: 0.8rem auto 0;
  font-size: 1.1rem;
  font-weight: 600;
`;
