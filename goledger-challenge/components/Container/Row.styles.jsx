import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'start'};
  padding: ${(props) => props.p};
  margin: ${(props) => props.margin || '0 0 1rem'};
  width: 100%;
`;

export default Row;
