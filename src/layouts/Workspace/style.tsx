import { breakPoints } from '@assets/styles/palette';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
`;

export const Aside = styled.aside`
  background-color: white;
  z-index: 1000;
  width: 310px;
  min-width: 310px;
  height: 100vh;
  flex-shrink: 0; /* 메뉴 리스트가 컨텐츠 영역을 밀어내지 못하도록 설정 */
  position: fixed;
  top: 0; /* 위쪽에 고정 */
  left: 0; /* 왼쪽에 고정 */
  bottom: 0; /* 아래쪽에 고정 */
  overflow-y: auto; /* 세로 스크롤을 허용하여 내용이 넘칠 때 스크롤 표시 */
  // background-color: pink;

  &.open {
    transform: translateX(0);
    z-index: 1000;
  }

  @media screen and (max-width: ${breakPoints.mobile}px) {
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
    // width: 50%; /* 모바일에서 전체 너비로 확장 */
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
  transition: background 0.3s ease-in-out;

  &.open {
    display: block;
  }
`;
export const SideHeader = styled.section`
  transition: 0.2s;
  padding: 38px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.08);
  border-right: 1.5px solid rgba(0, 0, 0, 0.08);
  line-height: 22px;
  height: 240px;
  position: relative;
  cursor: pointer;

  & .name {
    font-size: 17px;
    font-weight: 500;
    color: #333;
  }

  & .desc {
    color: #222;
    font-size: 13px;
  }

  & .workCount {
    position: absolute;
    bottom: 38px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(102, 102, 102, 0.45);

    & span {
      font-weight: 500;
      font-size: 15px;
      color: rgba(51, 51, 51, 0.8);
    }
  }
`;
export const SideList = styled.section`
  height: calc(100% - 244px);
  border-right: 1.5px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

export const Content = styled.div`
  flex-direction: column;
  color: #5e5e5e;
  padding: 0px;
  margin-left: 310px;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  overflow-y: auto;
  backgroundd-color: #f9f9f9;
  // background-color: pink;
  height: 100%;

  @media screen and (max-width: ${breakPoints.mobile}px) {
    margin-left: 0px;
    padding-top: 0px;
  }
`;

export const ContentsHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 900;
  background-color: #fff;
  cursor: pointer;

  & #back_svg,
  #gnb_svg {
    transform: rotate(180deg);
    margin: 10px 20px;
  }
`;

const slideUpTitle = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
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

export const Article = styled.article`
  display: block;
  opacity: 1;
  transform: matrix(1, 0, 0, 1, 0, 0);
  overflow-x: hidden;


  & .title {
    margin: 80px 30px 30px;
    padding: 20px 5px;
    font-size: 40px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    animation: ${slideUpTitle} 0.5s ease-out;

    @media screen and (max-width: ${breakPoints.mobile}px) {
      margin: 80px 30px 50px;
    }
  }

  & .description {
    display: flex;
    // margin: 10px 35px;
    width: auto;
    animation: ${slideUp} 0.5s ease-out;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }

  & .underline {
    text-decoration: underline 0.7px;
  }
`;
