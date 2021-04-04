import styled from 'styled-components';

const Text = styled.p`
  color: #444;
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || 500};
  text-decoration: ${(props) => props.decoration || 'none'};
  text-transform: ${(props) => props.transform || 'none'};;
`;

export default Text;
