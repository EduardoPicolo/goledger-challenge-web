import React from 'react';
import {
  CardContainer,
  CardHeaderContainer,
  CardTitleContainer,
  CardInfoContainer,
} from './Card.styles';

const Card = ({
  code, assetName, info, assetType, ...props
}) => (
  <CardContainer {...props}>
    <CardHeaderContainer>{code}</CardHeaderContainer>
    <CardTitleContainer>{assetName}</CardTitleContainer>
    {info && <CardInfoContainer>{`$${info}`}</CardInfoContainer>}
  </CardContainer>
);

export default Card;
