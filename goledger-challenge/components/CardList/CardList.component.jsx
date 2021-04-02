import React from 'react';
import Card from '../Card/Card.component';
import { CardListContainer } from './CardList.styles';

const CardList = ({ assets }) => (
  <CardListContainer>
    {assets
      ? assets.map((item) => (
        <Card
          code={item.code}
          assetName={item.name}
          info={item.price}
          key={item['@key']}
        />
      ))
      : null}
  </CardListContainer>
);

export default CardList;
