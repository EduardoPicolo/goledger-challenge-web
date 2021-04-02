import React from 'react';
import Card from '../Card/Card.component';
import CardListContainer from './CardList.styles';

const CardList = ({ assets, onClick = () => {} }) => (
  <CardListContainer>
    {assets
      ? assets.map((item) => (
        <Card
          code={item.code}
          assetName={item.name}
          info={item.price}
          onClick={() => onClick(item['@key'])}
          key={item['@key']}
        />
      ))
      : null}
  </CardListContainer>
);

export default CardList;
