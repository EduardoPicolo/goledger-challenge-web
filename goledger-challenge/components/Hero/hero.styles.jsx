import styled from 'styled-components';

export const HeroContainer = styled.div`
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background-image: linear-gradient(
        to right bottom,
        rgb(0, 0, 0, 0.75),
        rgb(10, 10, 10, 0.35)
      ),
      url(/marketplace.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    pointer-events: none;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }

  grid-column-start: 1;
  grid-column-end: 13;
  height: 75vh;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 25px 50px -12px;
`;

export const HeroTextContainer = styled.h1`
  border-bottom: 1px solid white;
  text-align: left;
  max-width: 11ch;
  margin: 0 auto;
  font-size: 4.5rem;
  color: white;
  text-shadow: 2px 2px 3px #444444;

  @media (max-width: 600px) {
    padding: 2rem;
    font-size: 2.5rem;
    max-width: 13ch;
    border-bottom: none;
  }
`;
