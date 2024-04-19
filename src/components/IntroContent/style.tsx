import { breakPoints } from '@assets/styles/palette';
import styled from '@emotion/styled';

export const MainDesc = styled.div`
  color: rgba(0, 0, 0, 0.6);
  width: 70%;
  margin-right: 10%;
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
  & p {
    cursor: pointer;
    text-decoration: underline;
    color: #212529;
    margin: 35px 0;
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
  width: 30%;
  list-style: none;
  margin-top: -1px;

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
    width: auto;
    padding: 0px;
  }

  & li:before {
    content: '• ';
    font-weight: 500;
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ImageContents = styled.div`
  text-align: center;
  padding: 10px auto;

  & img {
    height: 550px;
    margin: 40px;
  }

  & .iframe {
    height: 550px;
    background-color: #f8f9fa;
    width: 100%;
    margin: 40px;
    padding: 10px;
  }
`;

export const Images = styled.div`
  background: pink;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 400px 400px;
  grid-gap: 15px;
  margin-left: 38px;
`;
