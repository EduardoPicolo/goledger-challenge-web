import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { readAsset, searchAsset } from '../../services/assetsServices';
import useRequest from '../../hooks/useRequest';
import Flex from '../../components/Container/Flex.styles';
import Row from '../../components/Container/Row.styles';
import Container from '../../components/Container/Container.styles';
import Button from '../../components/Button/Button.component';
import Heading from '../../components/Text/Heading.styles';
import Spinner from '../../components/Spinner/Spinner.component';
import AssetInfo from '../../components/templates/AssetInfo/AssetInfo.component';
import DeleteAssetModal from '../../components/templates/DeleteAssetModal/DeleteAssetModal.component';
import ErrorTemplate from '../../components/templates/ErrorTemplate/ErrorTemplate.component';

const Products = ({ id }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { data: seller, isLoading, isRejected } = useRequest(
    id,
    readAsset('category', id),
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

  const details = {
    name: seller?.name,
  };

  return (
    <Container>
      <Flex
        flexDirection="column"
        p="4rem"
        mobilePadding="2rem"
        m="5rem 0 0"
        mobileMargin="2rem 0"
        width="100%"
        borderRadius="10px"
        shadow="rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;"
      >
        <Row margin="0 0 2rem" display="flex" justify="space-between">
          <Heading horizontalLine>{seller?.name || 'Loading...'}</Heading>
          <Flex width="auto" justify="center" mobileMargin="2rem 0">
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

        {isLoading ? loading() : <AssetInfo type="Category" details={details} />}

        <Row justify="end">
          <Button inverted onClick={() => router.back()}>
            Back
          </Button>
        </Row>
      </Flex>
      <DeleteAssetModal
        isOpen={isDeleteModalOpen}
        asset={seller}
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
