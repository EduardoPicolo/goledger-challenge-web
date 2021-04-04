import styled from 'styled-components';

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 8rem;
  align-items: center;

  @media (max-width: 600px) {
    row-gap: 2.5rem;
  }
`;

export default MainContainer;
