import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  margin: 0 auto;
  width: ${(props) => props.width || '70%'};

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export default Container;
