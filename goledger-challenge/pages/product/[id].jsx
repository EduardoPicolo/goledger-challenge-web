import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { deleteAsset, readAsset } from '../../services/assetsServices';
import useRequest from '../../hooks/useRequest';
import Flex from '../../components/Container/Flex.style';
import Row from '../../components/Container/Row.styles';
import Container from '../../components/Container/Container.styles';
import Button from '../../components/Button/Button.component';
import Text from '../../components/Text/Text.styles';
import Heading from '../../components/Text/Heading.styles';
import formatDate from '../../utils/formatDate';
import Modal from '../../components/Modal/Modal.component';
import toast from '../../components/Toast/Toast.component';
import Spinner from '../../components/Spinner/Spinner.component';

const Products = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);
  const { data: product, isLoading, isRejected } = useRequest(
    id,
    readAsset('product', id),
  );

  const router = useRouter();

  const deleteProduct = () => {
    // setIsModalOpen(false);
    setIsDeletingProduct(true);
    deleteAsset('product', product['@key'])
      .then(() => {
        toast({ type: 'success', message: 'Product removed!' });
        router.push('/');
      })
      .catch((error) =>
        toast({
          type: 'error',
          message: `An erro has occurred. ${error}`,
        }),
      )
      .finally(() => setIsDeletingProduct(false));
  };

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
            Product Details
          </Text>
        </Row>
        <Row>
          <Text>
            code:
            {product?.code}
          </Text>
        </Row>
        <Row>
          <Text>price: ${product?.price}</Text>
        </Row>
      </Flex>

      <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
        <Row margin="0 0 1rem">
          <Text size="1.2rem" weight="700">
            Seller Details
          </Text>
        </Row>
        <Row>
          <Text>
            name:
            {product?.soldBy.name}
          </Text>
        </Row>
        <Row>
          <Text>
            cnpj:
            {product?.soldBy.cnpj}
          </Text>
        </Row>
        <Row>
          <Text>
            address:
            {product?.soldBy.address}
          </Text>
        </Row>
        <Row>
          <Text>
            Member since:
            {formatDate(product?.soldBy.dateJoined)}
          </Text>
        </Row>
      </Flex>

      <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
        <Row margin="0 0 1rem">
          <Text size="1.2rem" weight="700">
            Categories
          </Text>
        </Row>
        {(product?.categories &&
          product?.categories.map((category) => (
            <Row>
              <Text>{category.name}</Text>
            </Row>
          ))) || <Text>None</Text>}
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
          <Heading horizontalLine>{product?.name || 'Loading...'}</Heading>
          <Flex width="auto">
            <Button m="0 2rem" disabled={isLoading || isDeletingProduct}>
              Edit
            </Button>
            <Button
              danger
              onClick={() => {
                setIsModalOpen(true);
              }}
              disabled={isLoading || isDeletingProduct}
            >
              Delete
            </Button>
          </Flex>
        </Row>

        {isLoading ? loading() : productInfo()}
        <Row justify="end"><Button inverted onClick={() => router.push('/')}>Back</Button></Row>
      </Flex>

      <Modal
        hidden={!isModalOpen}
        title={`Delete ${product?.name}`}
        confirmMessage="Delete"
        dangerAction
        disabled={isDeletingProduct}
        closeMessage="Cancel"
        onClose={() => {
          setIsModalOpen(false);
        }}
        onConfirm={() => {
          deleteProduct();
        }}
      >
        <p>Are you sure you want to DELETE {product?.name} ?</p>
        <p>This action can not be undone!</p>
        {isDeletingProduct && <Spinner />}
      </Modal>
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  return {
    props: {
      id,
    },
  };
}

export default Products;
