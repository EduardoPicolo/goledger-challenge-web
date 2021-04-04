import React from 'react';
import Flex from '../../Container/Flex.styles';
import Row from '../../Container/Row.styles';
import Text from '../../Text/Text.styles';

const AssetInfo = ({ type, details }) => {
  if (!details) {
    return (
      <Flex>
        <Row margin="0 0 1rem">
          <Text size="1.2rem" weight="700">
            No details
          </Text>
        </Row>
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column" width="auto" m="0 0 2.5rem">
      <Row margin="0 0 1rem">
        <Text size="1.2rem" weight="700">
          {`${type} Details`}
        </Text>
      </Row>

      {Array.isArray(details)
        ? details.map((item) => (
          <Row key={item.name}>
            <Text>{item.name}</Text>
          </Row>
        ))
        : Object.entries(details).map(([key, val]) => (
          <Row key={val}>
            <Text>{`${key}: ${val}`}</Text>
          </Row>
        ))}
    </Flex>
  );
};

export default AssetInfo;
