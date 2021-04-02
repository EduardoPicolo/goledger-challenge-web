import styled, { css } from 'styled-components';

const HorizontalLine = css`
  border-bottom: 2px solid rgb(126, 214, 223, 0.6);
      //rgb(22, 160, 133, 0.2)
`;

const Heading = styled.h1`
  color: #333;
  font-size: ${(props) => props.size || '2rem'};
  font-weight: ${(props) => props.weight || 700};
  text-decoration: ${(props) => props.decoration || 'none'};

  ${(props) => props.horizontalLine && HorizontalLine}
`;

export default Heading;
