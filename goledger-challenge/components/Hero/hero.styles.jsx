import styled from 'styled-components';

export const HeroContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 13;
  height: 75vh;
  background-image: linear-gradient(
      to right bottom,
      rgb(126, 214, 223, 0.6),
      rgb(22, 160, 133, 0.2)
    ),
    url(/marketplace.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //position: relative;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export const HeroTextContainer = styled.h1`
  border-bottom: 1px solid white;
  text-align: left;
  max-width: 11ch;
  //position: absolute;
  //top: 50%;
  //left: 15%;
  // transform: translate(-50%, -50%);
  margin: 0 auto;
  font-size: 4.5rem;
  color: white;
  text-shadow: 2px 2px 3px #444444;
`;
