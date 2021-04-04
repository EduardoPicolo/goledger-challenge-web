import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'start'};
  padding: ${(props) => props.p || 0};
  margin: ${(props) => props.m || 0};
  width: ${(props) => props.width || '100%'};
  box-shadow: ${(props) => props.shadow || 'none'};
  border-radius: ${(props) => props.borderRadius || '10px'};
  
`;

export default Flex;
