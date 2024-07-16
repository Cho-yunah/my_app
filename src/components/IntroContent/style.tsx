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
      margin-top: 60px;
    }
  }

  & .rise_up {
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
      color: #222;
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
  width: 100%;
  margin: 40px 30px;
  text-align: center;

  &.shadow-box {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  }

  & img {
    max-width: 750px;
  }
`;

export const ImageContents = styled.div`
  text-align: center;
  padding: 20px auto;
  width: 100dvw;
  max-width: 1120px;
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

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 400px);
  grid-gap: 3px;

  @media screen and (max-width: 1300px) {
    margin-left: 0px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 390px);
  }

  & img {
    max-width: 194px;
    max-height: 400px;
    box-shadow: 0px 0px 5px #dee2e6;
  }
`;

export const WebImages = styled.div`
display: grid;
margin: 20px auto;
padding: 15px;
justify-items: center;

grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 400px);
grid-gap: 3px;

& img {
  max-width: 320px;
  max-height: 280px;
  box-shadow: 0px 0px 5px #dee2e6;
}
`
