import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../Button/Button.component';
import CardList from '../../CardList/CardList.component';
import { searchAsset } from '../../../services/assetsServices';
import { ProductsContainer } from './Products.styles';
import useRequest from '../../../hooks/useRequest';
import { SEARCH_ASSET } from '../../../services/endpoints';

const body = {
  query: {
    selector: {
      '@assetType': 'product',
    },
  },
};

const Products = ({ products }) => {
  const router = useRouter();

  const { data, isLoading, isRejected } = useRequest(SEARCH_ASSET, searchAsset(body), products);

  const redirect = (id) => router.push('/product/[id]', `/product/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isRejected) {
    // console.error(isRejected);
    return <h1>ERROR!</h1>;
  }

  return (
    <ProductsContainer>
      <Button>Add Product</Button>
      <CardList assets={data.result} onClick={redirect} />
    </ProductsContainer>
  );
};

export async function getStaticProps() {
  const products = await searchAsset({
    query: {
      selector: {
        '@assetType': 'product',
      },
    },
  });
  return { props: { products } };
}

export default Products;
