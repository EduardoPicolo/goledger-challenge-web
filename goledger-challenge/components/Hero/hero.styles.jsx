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
    -webkit-filter: blur(4px);
    -moz-filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
    transform: scale(1.02);
  }
  
  overflow: hidden;
  &:hover {
    &:before {
      transform: scale(1.15);
      transition: transform 7s cubic-bezier(0.3, 0.45, 0.45, 0.95);
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
