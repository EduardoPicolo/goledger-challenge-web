import React from 'react';
import { readAsset } from '../../services/assetsServices';
import useRequest from '../../hooks/useRequest';
import Flex from '../../components/Container/Flex.style';
import Row from '../../components/Container/Row.styles';
import Container from '../../components/Container/Container.styles';
import Button from '../../components/Button/Button.component';
import Text from '../../components/Text/Text.styles';
import Heading from '../../components/Text/Heading.styles';
import formatDate from '../../utils/formatDate';

const Products = ({ id }) => {
  const { data, isLoading, isRejected } = useRequest(
    id,
    readAsset('product', id),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isRejected) {
    // console.error(isRejected);
    return <div>ERROR</div>;
  }

  return (
    <Container>
      <Flex
        flexDirection="column"
        p="5rem 3rem 0"
        m="5rem 0 0"
        width="100%"
        borderRadius="10px"
        shadow="rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;"
      >
        <Row margin="0 0 2rem" display="flex" justify="space-between">
          <Heading horizontalLine>{data?.name}</Heading>
          <Flex width="auto">
            <Button m="0 2rem">Edit</Button>
            <Button danger>Remove</Button>
          </Flex>
        </Row>

        <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
          <Row margin="0 0 1rem">
            <Text size="1.2rem" weight="700">
              Product Details
            </Text>
          </Row>
          <Row>
            <Text>
              code: {data?.code}
            </Text>
          </Row>
          <Row>
            <Text>price: ${data?.price}</Text>
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
              name: {data?.soldBy.name}
            </Text>
          </Row>
          <Row>
            <Text>
              cnpj: {data?.soldBy.cnpj}
            </Text>
          </Row>
          <Row>
            <Text>
              address: {data?.soldBy.address}
            </Text>
          </Row>
          <Row>
            <Text>
              Member since: { formatDate(data?.soldBy.dateJoined) }
            </Text>
          </Row>
        </Flex>

        <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
          <Row margin="0 0 1rem">
            <Text size="1.2rem" weight="700">
              Categories
            </Text>
          </Row>
          {(data?.categories &&
            data?.categories.map((category) => (
              <Row>
                <Text>{category.name}</Text>
              </Row>
            ))) || <Text>None</Text>}
        </Flex>
      </Flex>
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