import React from 'react';
import { useRouter } from 'next/router';

import DirectoryContainer from './Directory.styles';
import Products from '../templates/Products/Products.component';
import Sellers from '../templates/Sellers/Sellers.component';
import Categories from '../templates/Category/Categories.component';

const Directory = () => {
  const router = useRouter();

  return (
    <DirectoryContainer>
      {router.query.assetType === 'products' && <Products />}
      {router.query.assetType === 'categories' && <Categories />}
      {router.query.assetType === 'sellers' && <Sellers />}
    </DirectoryContainer>
  );
};

export default Directory;
