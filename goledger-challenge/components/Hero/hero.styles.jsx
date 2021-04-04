import styled from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background-image: linear-gradient(
        to right bottom,
        rgb(0, 0, 0, 0.8),
        rgb(5, 5, 5, 0.4)
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
    transform: scale(1.02);
    transition: all 3.5s;
  }
  
  overflow: hidden;
  &:hover {
    &:before {
      transform: scale(1.15);
      transition: all 7s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
      filter: blur(1px);
    }
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
  text-shadow: 1px 1px 2px #333;

  @media (max-width: 600px) {
    padding: 2rem;
    font-size: 2.5rem;
    max-width: 13ch;
    border-bottom: none;
  }
`;
