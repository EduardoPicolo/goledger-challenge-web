import React from 'react';
import { useRouter } from 'next/router';
import toast from '../../Toast/Toast.component';
import Button from '../../Button/Button.component';
import Container from '../../Container/Container.styles';
import Flex from '../../Container/Flex.styles';
import Row from '../../Container/Row.styles';
import Heading from '../../Text/Heading.styles';
import Text from '../../Text/Text.styles';

const ErrorTemplate = ({ message }) => {
  const router = useRouter();
  toast({ type: 'error', message });

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
        <Row justify="center" margin="2rem 0">
          <Heading horizontalLine lineColor="red"> An error has occurred.</Heading>
        </Row>
        <Row justify="center">
          <Text transform="uppercase">{message}</Text>
        </Row>
        <Row justify="center">
          <Button inverted onClick={() => router.back()}>
            Back
          </Button>
        </Row>
      </Flex>
    </Container>
  );
};

export default ErrorTemplate;
