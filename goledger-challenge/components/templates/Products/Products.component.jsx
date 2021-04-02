import React, { useEffect, useState } from 'react';
import Button from '../../Button/Button.component';
import { searchAsset } from '../../../services/assetsServices';
import { ProductsContainer } from './Products.styles';

const Products = () => {
  const [{ data, isLoading, isRejected }, setStatus] = useState({
    data: null,
    isLoading: true,
    isRejected: false,
  });

  useEffect(() => {
    searchAsset({
      query: {
        selector: {
          '@assetType': 'product',
        },
      },
    }).then((res) => setStatus({ data: res.result, isLoading: false, isRejected: false }));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isRejected) {
    return <h1>ERROR!</h1>;
  }

  return (
    <ProductsContainer>
      <Button>Add Product</Button>
    </ProductsContainer>
  );
};

export default Products;
