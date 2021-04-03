import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { readAsset, searchAsset } from '../../services/assetsServices';
import useRequest from '../../hooks/useRequest';
import Flex from '../../components/Container/Flex.style';
import Row from '../../components/Container/Row.styles';
import Container from '../../components/Container/Container.styles';
import Button from '../../components/Button/Button.component';
import Text from '../../components/Text/Text.styles';
import Heading from '../../components/Text/Heading.styles';
import formatDate from '../../utils/formatDate';
import Spinner from '../../components/Spinner/Spinner.component';
import EditSellertModal from '../../components/templates/EditSellerModal/EditSellerModal.component';
import DeleteAssetModal from '../../components/templates/DeleteAssetModal/DeleteAssetModal.component';

const Products = ({ id }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    data: seller, isLoading, isRejected, mutate,
  } = useRequest(
    id,
    readAsset('seller', id),
  );

  const router = useRouter();

  const loading = () => (
    <Flex justify="center" align="center" p="3rem">
      <Spinner size="175px" width="3" />
    </Flex>
  );

  if (isRejected) {
    // console.error(isRejected);
    return <div>ERROR</div>;
  }

  const productInfo = () => (
    <>
      <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
        <Row margin="0 0 1rem">
          <Text size="1.2rem" weight="700">
            Seller Details
          </Text>
        </Row>
        <Row>
          <Text>
            name:
            {seller?.name}
          </Text>
        </Row>
        <Row>
          <Text>
            cnpj:
            {seller?.cnpj}
          </Text>
        </Row>
        <Row>
          <Text>
            address:
            {seller?.address}
          </Text>
        </Row>
        <Row>
          <Text>
            Member since:
            {seller?.dateJoined ? formatDate(seller.dateJoined) : null}
          </Text>
        </Row>
      </Flex>
    </>
  );

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
          <Heading horizontalLine>{seller?.name || 'Loading...'}</Heading>
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

        {isLoading ? loading() : productInfo()}
        <Row justify="end">
          <Button inverted onClick={() => router.back()}>
            Back
          </Button>
        </Row>
      </Flex>
      <EditSellertModal
        isOpen={isEditModalOpen}
        seller={seller}
        mutate={mutate}
        onClose={() => setIsEditModalOpen(false)}
      />
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
