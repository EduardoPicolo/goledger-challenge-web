import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { readAsset, searchAsset } from '../../services/assetsServices';
import useRequest from '../../hooks/useRequest';
import Flex from '../../components/Container/Flex.styles';
import Row from '../../components/Container/Row.styles';
import Container from '../../components/Container/Container.styles';
import Button from '../../components/Button/Button.component';
import Heading from '../../components/Text/Heading.styles';
import formatDate from '../../utils/formatDate';
import Spinner from '../../components/Spinner/Spinner.component';
import AssetInfo from '../../components/templates/AssetInfo/AssetInfo.component';
import EditProductModal from '../../components/templates/EditProductModal/EditProductModal';
import DeleteAssetModal from '../../components/templates/DeleteAssetModal/DeleteAssetModal.component';
import ErrorTemplate from '../../components/templates/ErrorTemplate/ErrorTemplate.component';

const Products = ({ id, sellers }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data: product, isLoading, isRejected, mutate } = useRequest(
    id,
    readAsset('product', id),
  );

  const router = useRouter();

  const loading = () => (
    <Flex justify="center" align="center" p="3rem">
      <Spinner size="175px" width="3" />
    </Flex>
  );

  if (isRejected) {
    return <ErrorTemplate message={isRejected} />;
  }

  const sellerDetails = {
    name: product?.soldBy.name,
    cnpj: product?.soldBy.cnpj,
    address: product?.soldBy.address,
    'Member since':
      product?.soldBy.dateJoined && formatDate(product?.soldBy.dateJoined),
  };

  const productDetails = {
    name: product?.name,
    code: product?.code,
    price: product?.price,
  };

  return (
    <Container>
      <Flex
        flexDirection="column"
        p="4rem"
        m="5rem 0 0"
        width="100%"
        borderRadius="10px"
        shadow="rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;"
      >
        <Row margin="0 0 2rem" display="flex" justify="space-between">
          <Heading horizontalLine>{product?.name || 'Loading...'}</Heading>
          <Flex width="auto">
            <Button
              m="0 2rem"
              onClick={() => setIsEditModalOpen(true)}
              disabled={isLoading}
            >
              Edit
            </Button>
            <Button
              danger
              onClick={() => {
                setIsDeleteModalOpen(true);
              }}
              disabled={isLoading}
            >
              Delete
            </Button>
          </Flex>
        </Row>

        {isLoading ? (
          loading()
        ) : (
          <>
            <AssetInfo type="Product" details={productDetails} />
            <AssetInfo type="Seller" details={sellerDetails} />
            <AssetInfo type="Category" details={product?.categories || [{ name: 'None' }]} />
          </>
        )}
        <Row justify="end">
          <Button inverted onClick={() => router.back()}>
            Back
          </Button>
        </Row>
      </Flex>

      <EditProductModal
        isOpen={isEditModalOpen}
        product={product}
        sellers={sellers}
        mutate={mutate}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteAssetModal
        isOpen={isDeleteModalOpen}
        asset={product}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const sellers = await searchAsset({
    query: {
      selector: {
        '@assetType': 'seller',
      },
    },
  })();

  return {
    props: {
      id,
      sellers: sellers.result,
    },
  };
}

export default Products;
