import { breakPoints } from '@assets/styles/palette';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
  from {
    transform: translateY(13px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const MainDesc = styled.div`
  color: rgba(0, 0, 0, 0.6);
  width: 80%;
  padding: 40px;
  display: block;

  @media screen and (max-width: 900px) {
    width: 90%;
  }

  & ul {
    list-style-type: none;
    padding: 5px;

    @media screen and (max-width: ${breakPoints.mobile}px) {
      margin-top: 50px;
    }
  }

  & .riseUp {
    color: #212529;
    animation: ${slideUp} 1s ease-out;
  }
  
  & .En {
    margin: 2px 0;
  }

  & li {
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;

    & a {
      font-size: 15px;
      color: #5e5e5e;
      padding: 3px;
      margin-right: 3px;
      text-decoration: underline;
    }
  }

  .mobileNone {
    @media screen and (max-width: ${breakPoints.mobile}px) {
      display: none;
    }
  }
`;

export const SubDesc = styled.ul`
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  width: 43%;
  list-style: none;
  margin: 40px 30px;
  
  
  @media screen and (max-width: 900px) {
    margin: 20px 30px;
    width: auto;
    padding: 0px;
  }

  & li:before {
    content: '• ';
    font-weight: 500;
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.4);
  }

  & .text-bold {
    font-weight: 800;
  }
`;

export const MainImageBox = styled.div`
  margin: 40px 30px;
  text-align: center;
  
  @media screen and (max-width: ${breakPoints.mobile}px) {
    margin: 20px auto;
    img {
      width: 90vw;
    }
  }

  &.shadow-box {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  }

  & img {
    max-width: 750px;
    min-width: 300px;  
  }
  

  &.appImageBox {
    img {
      max-width: 920px;
    }
  }
`;

export const ImageContents = styled.div`
  text-align: center;
  padding: 20px auto;
  width: 100%;
  max-width: 1240px;
  margin-bottom: 0;
  background-color: #f8f9fa;

  & .iframe {
    height: 550px;
    width: 95%;
    padding: 10px;

    @media screen and (max-width: 900px) {
      height: 450px;
    }
  }
`;

export const Images = styled.div`
  display: grid;
  margin: 20px auto;
  padding: 15px;
  justify-items: center;
  cursor: pointer;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 400px);
  grid-gap: 3px;

  @media screen and (max-width: 1300px) {
    margin-left: 0px;
    grid-template-columns: repeat(3, 260px);
    grid-template-rows: repeat(4, 390px);
  }

  @media screen and (max-width: ${breakPoints.tablet}px) {
    margin-left: 0px;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(4, 390px);
  }

  & img {
    max-width: 194px;
    max-height: 400px;
    box-shadow: 0px 0px 5px #dee2e6;
    aspect-ratio: 3/5.5;

    &.app {
      aspect-ratio: 3/6;
    }
  }
`;

export const WebImages = styled.div`
display: grid;
margin: 20px auto;
padding: 10px;
justify-items: center;

grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 220px);
grid-gap: 3px;

&.partners {
  grid-template-rows: repeat(4, 220px);
}

& img {
  max-width: 320px;
  max-height: 280px;
  box-shadow: 0px 0px 5px #dee2e6;
  aspect-ratio: 5.3/3;
  cursor: pointer;
}
`
