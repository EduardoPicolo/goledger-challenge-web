import styled from 'styled-components';

const DirectoryContainer = styled.div`
  grid-row: 2;
  grid-column-start: 5;
  grid-column-end: 12;
  align-self: start;
  min-height: 250px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    grid-row: 3;
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

export default DirectoryContainer;
